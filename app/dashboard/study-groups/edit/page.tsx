"use client";
import { useState } from "react";
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
  starting_school_years_id: z.string(),
  name: z.string(),
  homeroom_teacher_id: z.string(),
  year: z.string(),
  is_active: z.string(),
  counseling_teacher_id: z.string(),
  major_id: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const study_groups_id = searchParams.get("study_groups_id");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.put(`http://127.0.0.1:3000/api/v1/master-data/study-groups/${study_groups_id}`, {
        starting_school_years_id: values.starting_school_years_id,
        name: values.name,
        homeroom_teacher_id: values.homeroom_teacher_id,
        year: values.year,
        is_active: values.is_active,
        counseling_teacher_id: values.counseling_teacher_id,
        major_id: values.major_id,
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(values);

      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );

      router.push('/dashboard/study-groups')

    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex flex-1 flex-col p-4 pt-6 max-w-lg mx-auto">
      {/* <div className="col-span-3 col-start-2"> */}
      <h1 className="text-xl font-bold py-4">Edit Kelas</h1>
      <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="starting_school_years_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Tahun Ajaran</FormLabel>
                  <FormControl>
                    <Input placeholder="ID" type="" {...field} />
                  </FormControl>
                  <FormDescription>ID Tahun Ajaran Kelas Baru</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kelas</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Kelas" type="" {...field} />
                  </FormControl>
                  <FormDescription>Nama Kelas Baru</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="homeroom_teacher_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Wali Kelas</FormLabel>
                  <FormControl>
                    <Input placeholder="ID Wali Kelas" type="" {...field} />
                  </FormControl>
                  <FormDescription>ID Wali Kelas</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun</FormLabel>
                  <FormControl>
                    <Input placeholder="Tahun" type="" {...field} />
                  </FormControl>
                  <FormDescription>Tahun Kelas</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status Kelas</FormLabel>
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
                      <SelectItem value="false">Isnt active</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Status keaftifan Kelas</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="counseling_teacher_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Guru BK</FormLabel>
                  <FormControl>
                    <Input placeholder="ID" type="" {...field} />
                  </FormControl>
                  <FormDescription>ID Guru BK</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="major_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Jurusan</FormLabel>
                  <FormControl>
                    <Input placeholder="ID" type="" {...field} />
                  </FormControl>
                  <FormDescription>ID Jurusan</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
    // </div>
  );
}
