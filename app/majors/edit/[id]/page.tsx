"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "@/components/ui/sonner";
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
import { Switch } from "@/components/ui/switch";
import { editMajors } from "../edit-majors";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const formSchema = z.object({
  majors_head_id: z.string().min(1),
  name: z.string().min(1),
  isActive: z.boolean(),
});

export default function MyForm() {
  const params = useParams();
  const router = useRouter();

  console.log(params.id);
  console.log("this is " + params);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editMajors(values, params.id.toString());
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-1 flex-col p4 max-w-lg w-full">
        <h1>Perbarui Kejuruan</h1>
        <Toaster />
        <div className="rounded-xl bg-muted/90 corder darl:border-none dark:bg-muted/50 p-8 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-3xl mx-auto py-10"
            >
              <FormField
                control={form.control}
                name="majors_head_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Id Kepala Kejurursan</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>deez nuts</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama kejurusan</FormLabel>
                    <FormControl>
                      <Input placeholder="RPL" type="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Is Active</FormLabel>
                      <FormDescription>
                        Status Keaktifan Kejurusan
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" onClick={() => router.back()}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
