import LoginModel from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const { email, password }: { email: string; password: string } =
    await req.json();
  let userState, loginData, mongoDb;
  await mongoose
    .connect(
      "mongodb+srv://librouse98:ze1dodp9JXHfTGwB@cluster0.4qjwa0b.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "UserDB",
      },
    )
    .then(() => {
      mongoDb = "Connected";
    })
    .catch((e) => (mongoDb = "Disconnected"));

  loginData = await LoginModel.findOne({
    email: email,
    password: password,
  });
  if (loginData == null) {
    userState = false;
  } else if (typeof loginData === "object") {
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
