import { NextResponse } from "next/server";
import connectMongoDB from "@/config/dbConn";
import RegisterModel from "@/models/User";
import { NewUser } from "@/types";

export const POST = async (req: Request, res: Response) => {
  const { email, firstName, lastName, password }: NewUser = await req.json();
  const registerData = await RegisterModel.findOne({ email: email });
  let userState;
  if (registerData == null) {
    await RegisterModel.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
    userState = true;
  } else if (typeof registerData === "object") {
    userState = false;
  }
  return NextResponse.json({
    method: "POST",
    status: "Complete",
    userState: userState,
  });
};
