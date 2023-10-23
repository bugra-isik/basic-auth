import LoginModel from "@/models/User";
import connectMongoDB from "@/config/dbConn";

export async function POST(req: Request, res: Response) {
  await connectMongoDB();
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
  return Response.json({
    method: "POST",
    status: "Complete",
    userState: userState,
    res: { data: loginData, role: "member" },
  });
}
