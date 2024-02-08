import { NextRequest, NextResponse } from "next/server";
import UserService from "@/server/services/user-service";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

interface MyRequestCookies extends RequestCookies {
  refreshToken?: string;
}

export const GET = async (request: NextRequest) => {
  try {
    const response = NextResponse.next();

    const refreshToken = (request.cookies as MyRequestCookies).refreshToken;
    console.log('refreshToken', refreshToken);

    if (!refreshToken) {
      return new NextResponse(JSON.stringify({ error: 'User is not authorized' }), {
        status: 401,
      });
    }

    const userData = await UserService.refresh(refreshToken);

    response.cookies.set({
      name: "refreshToken",
      value: userData.refreshToken,
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: true,
    });

    return new NextResponse(JSON.stringify(userData), {
      status: 200,
    });
  } catch (e:any) {
    return new NextResponse(JSON.stringify({ error: e.message }), {
      status: 500,
    });
  } 
}
