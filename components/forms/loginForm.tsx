"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner"

const formSchema = z.object({
    email: z
        .string()
        .min(5, {
            message: "Email minimal 5 karakter",
        })
        .max(50, {
            message: "Email maksimal 50 karakter",
        }),
    password: z.string().min(8, {
        message: "Password minimal 8 karakter",
    }),
});
export function LoginForm() {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {

        let action = fetch("/actions/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-cache",
        })

        toast.promise(action, {
            loading: "Loading...",
            success: async (data) => {
                if(data.status != 200){
                    toast.error((await data.json()).message ?? "ERROR ON REQUEST!");
                    return;
                }
                router.push("/")
                return "Login success!"
            },
        });
    }
    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="py-2">
            <h1 className="font-bold text-2xl">Selamat Datang di Starbhak Apps</h1>
            <h2 className="font-semibold text-sm">Masukkan email dan password anda untuk mengakses akun</h2>
            </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between">

                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Ingat saya
                        </label>
                    </div>

                    <Link href="/forgotPassword" className="text-blue-500 underline font-semibold">Lupa Password ?</Link>
                </div>
                <Button className="w-full font-bold hover:bg-white hover:text-blue-600" type="submit">
                    Masuk
                </Button>

                <p>Belum punya akun? <Link href="/register" className="underline text-blue-500">Daftar</Link></p>
            </form>
        </Form>
    );
}
