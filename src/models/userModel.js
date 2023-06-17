import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      lowerCase: true,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      lowerCase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
      trim: true,
    },
  }
);

const userModel = model("Users", userSchema);
export default userModel;
