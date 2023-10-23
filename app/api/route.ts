import mongoose from "mongoose";

export async function POST(req: Request, res: Response) {
  let deneme = "bırt";

  try {
    await mongoose.connect(
      "mongodb+srv://librouse98:ze1dodp9JXHfTGwB@cluster0.4qjwa0b.mongodb.net/UserDB",
      {
        dbName: "UserDB",
      },
    );

    console.log("Bağlantı başarılı");
    deneme = "tımım";
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.connection.close();
  }

  return Response.json(deneme);
}
