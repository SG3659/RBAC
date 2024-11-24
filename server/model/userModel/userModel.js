import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please add a valid email"],
  },
  role: {
    type: String,
    trim: true,
    require: true,
  },

  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically stores the creation date
  },
  auth: {
    type: mongoose.Schema.ObjectId,
    ref: "Auth",
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
