import express from "express";
const router = express.Router();
import {
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  getUser,
} from "../controller/userController/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
router.post("/user", authMiddleware, createUser);
router.patch("/userUpdate/:id", authMiddleware, updateUser);
router.delete("/userDelete/:id", authMiddleware, deleteUser);
router.get("/userGets", authMiddleware, getUsers);
router.get("/userGet/:id", authMiddleware, getUser);
export default router;
