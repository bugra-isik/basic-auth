import LoginModel from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const { email, password }: { email: string; password: string } =
    await req.json();
  let userState, loginData, mongoDb;
  process.env.MONGO_URI &&
    (await mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "UserDB",
      })
      .then(() => {
        mongoDb = "Connected";
      })
      .catch(() => (mongoDb = "Disconnected")));

  loginData = await LoginModel.findOne({
    email: email,
    password: password,
  });
  if (loginData == null) {
    userState = false;
  }
  if (typeof loginData === "object") {
    userState = true;
  }
  return Response.json({
    method: "POST",
    status: "Complete",
    mongoDb: mongoDb,
    userState: userState,
    res: { data: loginData },
  });
}
