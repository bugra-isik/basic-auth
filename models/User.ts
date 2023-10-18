import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

export const searchDeneme = (p1:{}) => UserModel.findOne(p1);

export default UserModel;
