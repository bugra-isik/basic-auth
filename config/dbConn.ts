import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: "UserDB",
      });
    }
    console.log("Connected to MongoDB ");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
