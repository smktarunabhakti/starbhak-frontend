import { RegisterForm } from "@/components/forms/registerForm";
import Image from "next/image";
import bgRegister from "@/assets/bgRegister.svg"
import wave from "@/assets/wave4.svg"

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

                    <div className="absolute bottom-0 w-full">
                    <Image
                    src={wave}
                    alt=""  
                    />
                    </div>
                </div>

            </div>

        </>
    )
}