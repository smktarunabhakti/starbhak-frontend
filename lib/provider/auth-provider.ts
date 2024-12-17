import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function checkForToken(req: NextRequest): Promise<boolean> {
  const cookieStore = cookies();

  let checkToken = cookieStore.get("token");

  if (!checkToken || !checkToken.value) {
    return false;
  }

  return true;
}

export async function checkForProfile(req: NextRequest): Promise<boolean> {
  const cookieStore = cookies();

  let check = cookieStore.get("profile");

  if (!check || !check.value) {
    return false;
  }

  return true;
}

export async function getProfile(req: NextRequest): Promise<void> {
  const cookieStore = cookies();

  let token = cookieStore.get("token");

  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${token?.value}`
  );

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/auth/self",
      requestOptions
    );

    const result = await response.json();

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    
    cookieStore.set("profile", JSON.stringify(result.data), {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });

  } catch (error) {
    throw error
  }

  return;
}
