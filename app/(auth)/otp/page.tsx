import { InputOTPForm } from "@/components/forms/otpForm";
import Image from "next/image";
import bgResetPassword from "@/assets/bgResetPassword.svg"
import wave from "@/assets/wave5.svg"

export default function otpPage() {
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">

        <div className="w-full h-full flex justify-center items-center relative bg-blue-600 rounded-r-3xl">
            <Image
            src={bgResetPassword}
            alt=""
            />

            <div className="absolute bottom-0">
            <Image
            src={wave}
            alt=""
            />
            </div>
        </div>

        <div className="w-full h-full">
            
        <InputOTPForm />
        </div>

        </div>
        </>
    )
}