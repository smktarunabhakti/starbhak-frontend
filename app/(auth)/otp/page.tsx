"use client"

import { InputOTPForm } from "@/components/forms/otpForm";
import Image from "next/image";
import bgResetPassword from "@/assets/bgResetPassword.svg"
import { WaveForAuth } from "@/components/custom/waves";

export default function otpPage() {
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">

        <div className="w-full h-full flex justify-center items-center relative bg-blue-600 rounded-r-3xl">
            <Image
            src={bgResetPassword}
            alt=""
            />

            <div className="absolute w-full bottom-0">
                <WaveForAuth />
            </div>
        </div>

        <div className="w-full h-full">
            
        <InputOTPForm />
        </div>

        </div>
        </>
    )
}