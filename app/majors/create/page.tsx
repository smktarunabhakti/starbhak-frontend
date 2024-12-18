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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addMajors } from "./add-majors";

const formSchema = z.object({
  name: z.string(),
  majors_head_id: z.string(),
  isActive: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      majors_head_id: "",
      isActive: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addMajors(values);
  }

  return (
    <div className="flex flex-1 flex-col p-4 pt-6 max-w-lg mx-auto">
      {/* <div className="col-span-3 col-start-2"> */}
      <h1 className="text-xl font-bold">Kejuruan Baru</h1>
      <Toaster />
      <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="PPLG" type="" {...field} />
                  </FormControl>
                  <FormDescription>Nama kejuruan</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="majors_head_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id kepala jurusan</FormLabel>
                  <FormControl>
                    <Input placeholder="6531HYV" type="" {...field} />
                  </FormControl>
                  <FormDescription>Id kepala jurusan</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
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
                  <FormDescription>Status keaftifan kejuruan</FormDescription>
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
