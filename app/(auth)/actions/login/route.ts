import { LoginActionInterface, loginActions } from "@/lib/actions/auth/auth-actions";
import { ActionsResponse } from "@/lib/interfaces/responses";
import { cookies } from "next/headers";;
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let data: LoginActionInterface = await req.json();

  let action: ActionsResponse = await loginActions(data);

  if (!action.success) {
    return NextResponse.json(
      action,
      {status: 500}
    );
  }

  if(!action.data.token){
    return NextResponse.json(
      {
        message: "Token does not generate!",
        error: "Token does not generate!"
      },
      {status: 500}
    );
  }

  const cookieStore = await cookies()

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  cookieStore.set("token", action.data.token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })

  return NextResponse.json(action, {
    status: 200,
  })
}
