import { LoginForm } from "@/components/forms/loginForm";
import Image from "next/image";
import bgLogin from "@/assets/bgLogin.svg";
import wave from "@/assets/Waves.svg";


export default function LoginPage() {
    return (
        <>

            <div className="w-screen h-screen flex justify-center items-center">

                <div className="w-full h-full bg-blue-500 rounded-r-3xl flex justify-center items-center relative">

                    <Image
                    src={bgLogin}
                    alt=""
                    />
                    
                    <div className="absolute bottom-0 w-full">
                        
                        <Image
                        src={wave}
                        alt=""
                        />
                    </div>  
                </div>

                <div className="w-full h-full flex flex-col justify-center items-center">

                    <LoginForm />

                </div>

            </div>

        </>
    )
}