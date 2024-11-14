import { LoginForm } from "@/components/forms/loginForm";


export default function LoginPage() {
    return (
        <>

            <div className="w-vw h-vh flex justify-center items-center">

                <div className="w-screen h-screen bg-blue-500 rounded-r-3xl"></div>

                <div className="w-screen h-screen flex flex-col justify-center items-center">

                    <LoginForm />

                </div>

            </div>

        </>
    )
}