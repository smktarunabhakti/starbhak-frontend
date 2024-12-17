import { ActionsResponse } from "@/lib/interfaces/responses";

export interface LoginActionInterface {
    email: string,
    password: string,
}

export interface RegisterActionInterface {
  username: string,
  email: string,
  password: string,
}

export async function loginActions({email, password}: LoginActionInterface): Promise<ActionsResponse> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email,
    password: password,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/auth/login",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      errors: error,
      message: "thrown error at login.",
    }
  }
}

export async function registerActions({username, email, password}: RegisterActionInterface): Promise<ActionsResponse> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: username,
    email: email,
    passwordHash: password,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/auth/register",
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      errors: error,
      message: "thrown error at login.",
    }
  }
}