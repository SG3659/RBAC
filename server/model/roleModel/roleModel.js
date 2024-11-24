import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const permissionSchema = new Schema({
  read: { type: Boolean, default: false },
  write: { type: Boolean, default: false },
  delete: { type: Boolean, default: false },
  manage_users: { type: Boolean, default: false },
  manage_roles: { type: Boolean, default: false },
});
const roleSchema = new Schema(
  {
    roleName: {
      type: String,
      required: true,
      trim: true,
    },
    permissions: permissionSchema,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    auth: {
      type: mongoose.Schema.ObjectId,
      ref: "Auth",
      required: true,
    },
  },
  { timestamps: true }
);

const RoleModel = model("Role", roleSchema);
export default RoleModel;
