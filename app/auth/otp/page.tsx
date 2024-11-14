import { InputOTPForm } from "@/components/forms/otpForm";

export default function otpPage() {
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">

        <div className="w-full h-full bg-blue-600 rounded-r-3xl"></div>

        <div className="w-full h-full">
            
        <InputOTPForm />
        </div>

        </div>
        </>
    )
}