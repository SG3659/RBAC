import { Schema, model } from "mongoose";

const AuthSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },

    email: {
      type: String,
      required: [true, "Please an email"],
      unique: true,
      trim: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add password!"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Auth = model("Auth", AuthSchema);
export default Auth;
