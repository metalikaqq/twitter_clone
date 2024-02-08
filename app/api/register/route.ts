import { NextApiRequest, NextApiResponse } from "next";
import UserService from "@/server/services/user-service";
import connect from "../../../db";
import { NextResponse } from "next/server";

export default async function handler(req: any) {
  try {
    await connect();

    const response = NextResponse.next();

    console.log("req", req, "res", response);

    const body = await req.json();

    console.log(req.body);

    const { username, email, password } = body;

    const userData: any = await UserService.registration(
      username,
      email,
      password
    );

    console.log("userData", userData);

    response.cookies.set({
      name: "refreshToken",
      value: userData.refreshToken,
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: true,
    });

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (e: any) {
    return new NextResponse(JSON.stringify({ error: e.message }), {
      status: 500,
    });
  }
}

export const config = {
  api: {
    bodyParser: false, 
  },
};

export const POST = handler;
