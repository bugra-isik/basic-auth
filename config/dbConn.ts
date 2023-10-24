import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    process.env.MONGO_URI &&
      (await mongoose.connect(process.env.MONGO_URI, {
        dbName: "UserDB",
      }));
    return "Connected to MongoDB2 ";
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
