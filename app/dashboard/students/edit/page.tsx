"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
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
} from "@/components/ui/select"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import axios from "axios";  
import { useRouter,useSearchParams } from "next/navigation";

const formSchema = z.object({
  nisn: z.string(),
  nipd: z.string(),
  nik: z.string(),
  rfid: z.string(),
  gender: z.string(),
  email: z.string(),
  name: z.string(),
  DoB: z.date(),
  PoB: z.string(),
  starting_school_years_id: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const student_id = searchParams.get("student_id");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.put(`http://127.0.0.1:3000/api/v1/master-data/students/${student_id}`, {
        nisn: values.nisn,
        nipd: values.nipd,
        nik: values.nik,
        rfid: values.rfid,
        gender: values.gender,
        email: values.email,
        name: values.name,
        DoB: values.DoB,
        PoB: values.PoB,
        starting_school_years_id: values.starting_school_years_id,
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

      router.push('/dashboard/students');

    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  useEffect(() => {
    if (student_id) {
      fetchData();
    }
  }, [student_id]);
  
  async function fetchData() {
    try {
      const res = await axios.get(`http://127.0.0.1:3000/api/v1/master-data/students/${student_id}`);
      const data = res.data.data.student[0];

      const parsedDate = new Date(data.DoB);
  
      form.reset({
        nisn: data.nisn,
        nipd: data.nipd,
        nik: data.nik,
        rfid: data.rfid,
        email: data.email,
        name: data.name,
        DoB: parsedDate,
        PoB: data.PoB,
        starting_school_years_id: data.starting_school_years_id,
      });
    } catch (error) {
      console.error("Failed to fetch data", error);
      toast.error("Failed to fetch data");
    }
  }

  return (
    <div className="grid grid-cols-4 place-items-center min-h-screen">
      <div className="col-span-2 col-start-2">
        <h1 className="text-xl font-bold py-4">Edit Siswa</h1>
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
                    name="nisn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>NISN Siswa</FormLabel>
                        <FormControl>
                          <Input placeholder="NISN" type="" {...field} />
                        </FormControl>
                        <FormDescription>NISN siswa baru.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="nipd"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>NIPD Siswa</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="NIPD"
                            type=""
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>NIPD siswa baru</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="nik"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>NIK Siswa</FormLabel>
                        <FormControl>
                          <Input placeholder="NIK" type="" {...field} />
                        </FormControl>
                        <FormDescription>NIK siswa baru.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="rfid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>RFID</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="RFID"
                            type=""
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>RFID siswa baru</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jenis Kelamin Siswa</FormLabel>
                        <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Jenis Kelamin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="laki=laki">Laki-laki</SelectItem>
                            <SelectItem value="perempuan">Perempuan</SelectItem>
                          </SelectContent>
                        </Select>
                        </FormControl>
                        <FormDescription>Jenis Kelamin Siswa.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type=""
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Email siswa baru</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Siswa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nama" type="" {...field} />
                        </FormControl>
                        <FormDescription>Nama siswa baru.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="DoB"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tanggal Lahir Siswa</FormLabel>
                        <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn("block w-full text-left bg-transparent", !field.value && "text-muted-foreground")}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onDayClick={(selectedDate) => field.onChange(selectedDate)}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        </FormControl>
                        <FormDescription>Tanggal lahir siswa.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="PoB"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tempat Lahir</FormLabel>
                        <FormControl>
                          <Input placeholder="Tempat Lahir" type="" {...field} />
                        </FormControl>
                        <FormDescription>Tempat lahir siswa.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="starting_school_years_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID Tahun Ajaran</FormLabel>
                        <FormControl>
                          <Input placeholder="ID Tahun Ajaran" type="" {...field} />
                        </FormControl>
                        <FormDescription>ID Tahun ajaran.</FormDescription>
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

