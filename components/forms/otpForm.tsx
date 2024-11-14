"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { RotateCcw } from "lucide-react"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full h-full  flex flex-col justify-center items-center gap-10">
        <RotateCcw size={70} color="#2563eb"/>
        <div className="space-y-10">

        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="font-bold text-3xl">Buat Ulang Password</FormLabel>
              <p className="">Kami mengirim kode ke <span className="font-bold">emailKamu@email.com</span></p>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup className="flex w-full justify-center items-center gap-3 mt-9">
                    <InputOTPSlot className="border border-blue-600 rounded-md w-full h-full py-10" index={0} />
                    <InputOTPSlot className="border border-blue-600 rounded-md w-full h-full py-10" index={1} />
                    <InputOTPSlot className="border border-blue-600 rounded-md w-full h-full py-10" index={2} />
                    <InputOTPSlot className="border border-blue-600 rounded-md w-full h-full py-10" index={3} />
                    
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />

        <Button className="w-full hover:bg-white hover:text-blue-600" type="submit">Kirim</Button>

        <div className="flex gap-1">
          <p className="font-thin">Tidak menerima email?</p>
          <a href="" className="text-blue-600 font-semibold">
            Klik untuk mengirim ulang
          </a>
        </div>
          </div>
      </form>
    </Form>
  )
}
