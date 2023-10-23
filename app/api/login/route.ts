import LoginModel from "@/models/User";
import connectMongoDB from "@/config/dbConn";

export async function POST(req: Request) {
  const { email, password }: { email: string; password: string } =
    await req.json();
  let userState;
  let loginData;
  try {
    connectMongoDB();
    loginData = await LoginModel.findOne({
      email: email,
      password: password,
    });
    if (loginData == null) {
      userState = false;
    } else if (typeof loginData === "object") {
      userState = true;
    }
  } catch (error) {
    console.log(error);
  }
  return Response.json({
    method: "POST",
    status: "Complete",
    userState: userState,
    res: { data: loginData },
  });
}
