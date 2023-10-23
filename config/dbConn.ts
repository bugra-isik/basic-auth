import mongoose from "mongoose";

const connectMongoDB = async () => {
  await mongoose.connect(
    "mongodb+srv://librouse98:ze1dodp9JXHfTGwB@cluster0.4qjwa0b.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "UserDB",
    },
  );
  console.log("Connected to MongoDB ");
  return "Connected to MongoDB ";
};

export default connectMongoDB;
