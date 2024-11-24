import express from "express";
const router = express.Router();
import {
  login,
  register,
} from "../controller/authController/authController.js";
router.post("/auth", register);
router.post("/authLogin", login);

export default router;
