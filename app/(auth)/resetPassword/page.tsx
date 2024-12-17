"use client"

import { ResetPassword } from "@/components/forms/resetPassword";
import Image from "next/image";
import bgLogin from "@/assets/bgLogin.svg";
import { WaveForAuth } from "@/components/custom/waves";


export default function ResetPasswordPage() {
    return (
        <>

            <div className="w-screen h-screen flex justify-center items-center">

                <div className="w-full h-full bg-blue-500 rounded-r-3xl flex justify-center items-center relative">

                    <Image
                    src={bgLogin}
                    alt=""
                    />
                    
                    <div className="absolute w-full bottom-0">
                        <WaveForAuth />
                    </div> 
                </div>

                <div className="w-full h-full flex flex-col justify-center items-center">

                    <ResetPassword />

                </div>

            </div>

        </>
    )
}