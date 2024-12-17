import { RegisterActionInterface, registerActions } from "@/lib/actions/auth/auth-actions";
import { ActionsResponse } from "@/lib/interfaces/responses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let data: RegisterActionInterface = await req.json();

  let action: ActionsResponse = await registerActions(data);

  if (!action.success) {
    return NextResponse.json(
      action,
      {status: 500}
    );
  }

  return NextResponse.json(action, {
    status: 200,
  })
}
