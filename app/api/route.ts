import connectMongoDB from "@/config/dbConn";
import mongoose, { connection } from "mongoose";

export async function POST(req: Request, res: Response) {
  let deneme = "bırt";
  await mongoose
    .connect(
      "mongodb+srv://librouse98:ze1dodp9JXHfTGwB@cluster0.4qjwa0b.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "UserDB",
      },
    )
    .then((e) => {
      console.log(e);
      deneme = "tımım";
    })
    .catch((e) => console.error(e));

  await mongoose.connection.close();
  return Response.json(deneme);
}
