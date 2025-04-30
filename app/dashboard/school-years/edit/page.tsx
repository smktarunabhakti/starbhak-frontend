"use client";
import { useState,useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";  
import { useRouter,useSearchParams } from "next/navigation";

const formSchema = z.object({
  start: z.string(),
  end: z.string(),
  isActive: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const school_year_id = searchParams.get("school_year_id");
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.put(`http://127.0.0.1:3000/api/v1/master-data/school-year/${school_year_id}`, {
        start: values.start,
        end: values.end,
        isActive: values.isActive
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(values);

      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(response.data, null, 2)}</code>
        </pre>
      );

      router.push('/dashboard/school-years');
      
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }

  }

  useEffect(() => {
    if (school_year_id) {
      fetchData();
    }
  }, [school_year_id]);

  async function fetchData() {
    try {
      const res = await axios.get(`http://127.0.0.1:3000/api/v1/master-data/school-year/${school_year_id}`);
      const data = res.data.data.schoolYear;

      form.reset({
        start: data.start,
        end: data.end,
        isActive: data.isActive.toString(),
      });
    } catch (error) {
      console.error("Failed to fetch data", error);
      toast.error("Failed to fetch data");
    }
  }
  
  return (
    <div className="flex flex-1 flex-col p-4 pt-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold py-4">Edit Tahun Ajaran</h1>
      <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun Mulai</FormLabel>
                  <FormControl>
                    <Input placeholder="Tahun Ajaran" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Tahun Mulai Tahun Ajaran</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="end"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun Selesai</FormLabel>
                  <FormControl>
                    <Input placeholder="Tahun Ajaran" type="text" {...field} />
                  </FormControl>
                  <FormDescription>Tahun Selesai Tahun Ajaran</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status Mapel</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Is active" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">Is active</SelectItem>
                      <SelectItem value="false">Isn't active</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Status keaftifan mapel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
