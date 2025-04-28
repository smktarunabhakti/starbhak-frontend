import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import Axios from "axios";
import { setCookie } from "cookies-next";


interface FormValues {
  email: string;
  password: string;
}

export function LoginForm({
  
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  

const onSubmit = async (data: FormValues) => {
  try {
    const response = await Axios.post(
      "http://localhost:3000/api/v1/auth/login",
      data
    );

    setCookie(
      "auth",
      JSON.stringify({
        token: response.data.token,
        user: response.data.user,
      }),
      {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
        path: "/",
      }
    );
    alert("Berhasil login");
  } catch (error: any) {
    console.error("Gagal login", error);
    alert(error.response?.data?.message || "Gagal login");
  }
};

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Taruna Bhakti</CardTitle>
          <CardDescription>Login dengan email dan password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4"></div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email", {
                      required: "dibutuhkan email",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "gagal menemukan email",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-700 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="/forgot-password"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      lupa password?
                    </a>
                  </div>
                  <Input id="password" type="password" {... register("password",{
                    required: "password dibutuhkan",
                    minLength:{
                      value: 6,
                      message: "Password Setidaknya 6 huruf"
                    }
                  })} />
                  {errors.password && (
                    <span className="text-red-700 text-sm">{errors.password.message}</span>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
