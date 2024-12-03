"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import Link from "next/link";

const formSchema = z.object({
    username: z
        .string()
        .min(5, {
            message: "Username minimal 5 karakter",
        })
        .max(50, {
            message: "Username maksimal 50 karakter",
        }),
    email : z.string().email({
        message:'Format salah'}),
    password: z.string().min(8, {
        message: "Password minimal 8 karakter",
    }),
});

export function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>

            <h1 className="font-bold text-2xl">Buat Akun</h1>
            <h2 className="font-semibold text-sm">Anda harus membuat akun terlebih dahulu</h2>
            </div>
                <FormField control={form.control} name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Masukkan Nama Anda</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            <FormDescription>
                                
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormDescription>
                                
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password"  type="password" {...field} />
                            </FormControl>
                            <FormDescription>
                                
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button className="w-full font-bold hover:bg-white hover:text-blue-500" type="submit">Daftar</Button>

                <p>Sudah punya akun? <Link href="/login" className="underline text-blue-500">Masuk</Link></p>
            </form>
        </Form>
    );
}
