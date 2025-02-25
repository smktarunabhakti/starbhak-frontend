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

const formSchema = z.object({
  name_7724100898: z.string(),
  name_6121817967: z.string(),
  name_3641742571: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex flex-1 flex-col p-4 pt-6 max-w-lg mx-auto">
      {/* <div className="col-span-3 col-start-2"> */}
      <h1 className="text-xl font-bold py-4">Kelas Baru</h1>
      <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="name_7724100898"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id Mapel</FormLabel>
                  <FormControl>
                    <Input placeholder="uuid" type="" {...field} />
                  </FormControl>
                  <FormDescription>Id Mapel Baru</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name_7724100898"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hari Mapel</FormLabel>
                  <FormControl>
                    <Input placeholder="Hari" type="" {...field} />
                  </FormControl>
                  <FormDescription>Hari Mapel Baru</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name_7724100898"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jam Mulai Mapel</FormLabel>
                  <FormControl>
                    <Input placeholder="Jam Mulai" type="" {...field} />
                  </FormControl>
                  <FormDescription>Jam Mulai Baru</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name_7724100898"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jam Selesai Mapel</FormLabel>
                  <FormControl>
                    <Input placeholder="Jam Selesai" type="" {...field} />
                  </FormControl>
                  <FormDescription>Jam Selesai Baru</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name_3641742571"
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
                      <SelectItem value="Is_active">Is active</SelectItem>
                      <SelectItem value="Isnt_active">Isnt active</SelectItem>
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
    // </div>
  );
}
