import { Document, model, Schema } from "mongoose";
interface iUser {
  name: string;
  email: string;
  age: number;
  password: string;
  isVerified: boolean;
  verifiedToken: string;
}
interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
    verifiedToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUser>("users", userModel);
