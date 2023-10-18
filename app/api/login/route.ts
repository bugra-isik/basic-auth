import { NextResponse } from "next/server";
import connectMongoDB from "@/config/dbConn";
import { searchDeneme } from "@/models/User";

export const POST = async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } =
    await req.json();
  await connectMongoDB();
  const loginData = await searchDeneme({ email: email, password: password });
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
};
