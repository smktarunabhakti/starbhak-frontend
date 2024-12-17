"use client"

import { RegisterForm } from "@/components/forms/registerForm";
import Image from "next/image";
import bgRegister from "@/assets/bgRegister.svg"
import { WaveForAuth } from "@/components/custom/waves";

export default function RegisterPage() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">

                <div className="w-full h-full flex flex-col justify-center items-center">

                    <RegisterForm />

                </div>

                <div className="w-full h-full bg-blue-500 rounded-l-3xl flex justify-center items-center relative">
                    <Image
                    src={bgRegister}
                    alt=""
                    />

                    <div className="absolute w-full bottom-0">
                        <WaveForAuth />
                    </div>
                </div>

            </div>

        </>
    )
}