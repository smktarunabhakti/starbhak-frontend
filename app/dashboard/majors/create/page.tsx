"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "@/components/ui/sonner";
import * as z from "zod";
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
import { useRouter } from "next/navigation";
import { addMajors } from "./add-majors";

const formSchema = z.object({
  majors_head_id: z.string(),
  name: z.string(),
});

export default function MyForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      majors_head_id: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addMajors(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-1 flex-col p-4 max-w-lg w-full">
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
                name="majors_head_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Id Kepala Kejuruan</FormLabel>
                    <FormControl>
                      <Input placeholder="9a5cf1fd-86d8-4b63-8e7d-defa768ab9e8" type="" {...field} />
                    </FormControl>
                    <FormDescription>Id Kepala Kejuruan</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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