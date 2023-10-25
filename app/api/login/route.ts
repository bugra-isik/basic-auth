import LoginModel from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const { email, password }: { email: string; password: string } =
    await req.json();
  let login, loginData, mongoDb;
  console.log(email, password)
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
    login = false;
  }
  if (loginData) {
    login = true;
  }
  return Response.json({
    method: "POST",
    status: "Complete",
    mongoDb: mongoDb,
    login: login,
    res: { data: loginData },
  });
}
