"use client"
import { LoginForm } from "@/components/forms/loginForm";
import Image from "next/image";
import bgLogin from "@/assets/bgLogin.svg";
import { WaveForAuth } from "@/components/custom/waves";

export default function LoginPage() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-screen bg-blue-500 rounded-r-3xl flex justify-center items-center relative">
          <Image src={bgLogin} alt="" />
          <div className="absolute w-full bottom-0">
            <WaveForAuth />
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}