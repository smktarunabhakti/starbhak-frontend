import { ForgotPasswordForm } from "@/components/forms/forgotPasswordForm";
import { LockKeyhole } from "lucide-react";

export default function ForgotPasswordPage() {
    return (
        <>

            <div className="w-vw h-vh flex justify-center items-center">


                <div className="w-screen h-screen bg-blue-500 rounded-r-3xl"></div>
                <div className="w-screen h-screen flex flex-col justify-center items-center">
                <LockKeyhole size={50} />
                    <h1 className="font-bold text-3xl">Lupa Password</h1>
                    <p className="font-semibold text-sm">Masukkan email untuk mencari akun anda</p>
                    <ForgotPasswordForm />


                </div>

            </div>

        </>
    )
}