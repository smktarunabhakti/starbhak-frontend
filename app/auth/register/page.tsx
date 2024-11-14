import { RegisterForm } from "@/components/forms/registerForm";

export default function RegisterPage() {
    return (
        <>

            <div className="w-vw h-vh flex justify-center items-center">

                <div className="w-screen h-screen flex flex-col justify-center items-center">

                    <RegisterForm />

                </div>

                <div className="w-screen h-screen bg-blue-500 rounded-l-3xl"></div>

            </div>

        </>
    )
}