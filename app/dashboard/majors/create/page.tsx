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

const formSchema = z.object({
  name_2028579058: z.string(),
  name_6271945838: z.string(),
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
    <div className="grid grid-cols-4 place-items-center min-h-screen">
      <div className="col-span-2 col-start-2">
        <h1 className="text-xl font-bold">Kejuruan Baru</h1>
        <div className="rounded-xl dark:bg-muted/50 col-span-1 p-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="name_2028579058"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Kejuruan</FormLabel>
                        <FormControl>
                          <Input placeholder="PPLG" type="" {...field} />
                        </FormControl>
                        <FormDescription>Nama kejuruan baru.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="name_6271945838"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ketua Jurusan</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Miranda S.pd"
                            type=""
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Ketua jurusan baru</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button 
              type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
