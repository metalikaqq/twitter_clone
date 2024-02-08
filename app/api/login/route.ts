import { NextResponse } from "next/server";
import UserService from "@/server/services/user-service";
import { redirect } from "next/navigation";

export const POST = async (request: any) => {
  try {
    const body = await request.json();

    const { email, password } = body;
    const userData = await UserService.login(email, password);

    // console.log('remember', remember);

    console.log("email", email, "username", "password", password);

    // if (remember) {
    //   res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    // }

    console.log("thaebis");

    return new NextResponse(JSON.stringify(userData), {
      status: 200,
    });

  } catch (e:any) {
    return new NextResponse(JSON.stringify({ error: e.message }), {
      status: 500,
    });
  }
};
