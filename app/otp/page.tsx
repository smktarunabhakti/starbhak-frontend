"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  pin: z
    .string()
    .min(6, { message: "OTP harus 6 digit" })
    .regex(/^\d+$/, { message: "Hanya angka yang diperbolehkan" }),
});

export default function InputOTPForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [resendCooldown, setResendCooldown] = useState(30);
  const [isResending, setIsResending] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: "" },
  });


  useEffect(() => {
    if (form.watch("pin").length === 6) {
      form.handleSubmit(onSubmit)();
    }
  }, [form.watch("pin")]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendCooldown]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (!email) {
        toast.error("Email tidak ditemukan");
        return;
      }

      const response = await axios.post(
        `http://localhost:3000/api/v1/auth/verify-otp`,
        {
          email,
          otp: data.pin,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        

        toast.success("OTP berhasil diverifikasi");
        window.location.href = '/reset-password';
      }
    } catch (error) {
      let errorMessage = "Terjadi kesalahan sistem";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || error.message;
      }
      toast.error(errorMessage);
      form.resetField("pin");
    }
  }

  async function handleResendOTP() {
    try {
      setIsResending(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/kode-otp`,
        { email }
      );
      if (response.status === 200) {
        toast.success("OTP baru telah dikirim");
        setResendCooldown(30);
      }
    } catch (error) {
      let errorMessage = "Gagal mengirim ulang OTP";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || error.message;
      }
      toast.error(errorMessage);
    } finally {
      setIsResending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="text-center">
                <FormLabel className="text-2xl font-semibold">
                  Verifikasi OTP
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    render={({ slots }) => (
                      <InputOTPGroup className="gap-2">
                        {slots.map((slot, index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            {...slot}
                            className="h-16 w-16 text-3xl border-2 rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
                          />
                        ))}
                      </InputOTPGroup>
                    )}
                  />
                </FormControl>
                <FormDescription className="text-lg">
                  Masukkan 6 digit kode yang dikirim ke {email}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-14 text-xl"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Memverifikasi..." : "Verifikasi"}
          </Button>

          <div className="text-center text-lg">
            Tidak menerima kode?{" "}
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={resendCooldown > 0 || isResending}
              className="text-primary underline hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendCooldown > 0
                ? `Kirim ulang (${resendCooldown}s)`
                : "Kirim ulang OTP"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
