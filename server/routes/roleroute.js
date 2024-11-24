import express from "express";
const router = express.Router();
import {
  createRole,
  updateRole,
  deleteRole,
  getRole,
} from "../controller/roleController/roleController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";
router.post("/role",AuthMiddleware, createRole);
router.patch("/roleUpdate/:id",AuthMiddleware, updateRole);
router.delete("/roleDelete/:id",AuthMiddleware, deleteRole);
router.get("/roleGet", AuthMiddleware, getRole);

export default router;
