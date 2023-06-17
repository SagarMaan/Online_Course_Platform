import mongoose from "mongoose";
const { Schema, model } = mongoose;

const administratorSchema = new Schema(
  {
    administratorName: {
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
  },
  { timestamps: true }
);

const administratorModel = model(Administrators, administratorSchema);
export default administratorModel;
