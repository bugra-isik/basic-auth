import { NextResponse } from "next/server";
import LoginModel from "@/models/User";

export async function POST(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } =
    await req.json();
  const loginData = await LoginModel.findOne({
    email: email,
    password: password,
  });
  let userState;
  if (loginData == null) {
    userState = false;
  } else if (typeof loginData === "object") {
    userState = true;
  }
  return NextResponse.json({
    method: "POST",
    status: "Complete",
    userState: userState,
    res: { data: loginData, role: "member" },
  });
}
