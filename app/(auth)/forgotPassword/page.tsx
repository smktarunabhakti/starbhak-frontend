"use client"

import { ForgotPasswordForm } from "@/components/forms/forgotPasswordForm";
import Lock  from "@/assets/Lock.svg";
import Image from "next/image";
import bgForgotPassword from "@/assets/bgforgotPassword.svg"
import backButton from "@/assets/backButton.svg"
import Link from "next/link";
import { WaveForAuth } from "@/components/custom/waves";

export default function ForgotPasswordPage() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">


                <div className="w-full h-full bg-blue-500 rounded-r-3xl flex justify-center items-center relative">
                    <Image
                        src={bgForgotPassword}
                        alt=""
                        
                    />

                    <div className="absolute w-full bottom-0">
                        <WaveForAuth />
                    </div>
                </div>


                <div className="w-screen h-screen flex flex-col justify-center items-center">
                <Image
                            src={Lock}
                            alt=""
                        />
                    
                    <h1 className="font-bold text-3xl">Lupa Password</h1>
                    <p className="font-semibold text-sm">Masukkan email untuk mencari akun anda</p>

                    <ForgotPasswordForm />
                    <div className="flex w-full justify-center items-center py-10">
                    <Image
                            src={backButton}
                            alt=""
                        />
                    <Link
                    className="text-blue-500"
                    href="/login" >Back</Link>
                    </div>

                </div>

            </div>

        </>
    )
}