import RegisterModel from "@/models/User";
import { NewUser } from "@/types";
import connectMongoDB from "@/config/dbConn";

export async function POST(req: Request, res: Response) {
  const { email, firstName, lastName, password }: NewUser = await req.json();
  let userState;
  try {
    await connectMongoDB();
    const registerData = await RegisterModel.findOne({ email: email });
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
  } catch (error) {
  }
  return Response.json({
    method: "POST",
    status: "Complete",
    userState: userState,
  });
}
