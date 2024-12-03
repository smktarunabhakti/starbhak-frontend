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

const formSchema = z.object({
    password: z.string().min(8, {
        message: "Password minimal 8 karakter",
    }),
    confirm_password: z.string().min(1, {
        message: "Please confirm your password",
    }),
}).superRefine((val, ctx) => {
    if(val.password !== val.confirm_password){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Password harus sama',
            path: ['confirm_password']
        })  
    }
})

export function ResetPassword() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirm_password: "",
        },
    })

    
    function onSubmit(values: z.infer<typeof formSchema>) {
        
        console.log(values);
    }
    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="py-2">
            <h1 className="font-bold text-2xl">Selamat Datang di SIMS</h1>
            <h2 className="font-semibold text-sm">Masukkan email dan password anda untuk mengakses akun</h2>
            </div>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type="Password" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm Password" type="password" {...field} />
                            </FormControl>
                            <FormDescription>
                                
                            </FormDescription>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-full font-bold hover:bg-white hover:text-blue-600" type="submit">
                    Submit
                </Button>

            </form>
        </Form>
    );
}
