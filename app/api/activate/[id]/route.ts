import userService from "@/server/services/user-service";
import { NextResponse } from "next/server";
import connect from "@/db";
import { redirect } from "next/navigation";

export async function GET(request:any, { params }: { params: any }) {
  await connect();
  const activationLink = params.id;

  await userService.activate(activationLink);

  return redirect("/");
}