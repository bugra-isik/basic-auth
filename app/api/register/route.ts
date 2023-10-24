import RegisterModel from "@/models/User";
import { NewUser } from "@/types";
import mongoose from "mongoose";

export async function POST(req: Request, res: Response) {
  const { email, firstName, lastName, password }: NewUser = await req.json();
  let userState, mongoDb;
  await mongoose
    .connect(
      "mongodb+srv://librouse98:ze1dodp9JXHfTGwB@cluster0.4qjwa0b.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "UserDB" },
    )
    .then(() => {
      mongoDb = "Connected";
    })
    .catch(() => (mongoDb = "Disconnected"));
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

  return Response.json({
    method: "POST",
    status: "Complete",
    mongoDb: mongoDb,
    userState: userState,
  });
}
