import { NextResponse } from "next/server";
import connect from "../../../db";
import User from "../../../server/models/user-model";

export const GET = async (request: any) => {
  try {
    await connect();

    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 });
  }
};
