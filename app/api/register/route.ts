import { NextResponse } from "next/server";
import connectMongoDB from "@/config/dbConn";
import UserModel, { searchDeneme } from "@/models/User";
import { NewUser } from "@/types";

export const POST = async (req: Request, res: Response) => {
  const { email, firstName, lastName, password }: NewUser = await req.json();
  await connectMongoDB();
  const registerData = await searchDeneme({ email: email })
  let userState;
  if (registerData == null) {
    await UserModel.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
    userState = "User created";
    console.log(userState);
  } else if (typeof registerData === "object") {
    userState = "User exist in database already.";
    console.log(userState);
  }
  return NextResponse.json({
    method: "POST",
    status: "Complete",
    userState: userState,
  });
};
