import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Auth from "../model/authModel/authModel.js";
dotenv.config();
const AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    // const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Please login or Register." });
    }

    const tokenWithoutBearer = token.replace("Bearer ", "");

    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET_KEY);
    const user = await Auth.findById(verified.userId).select("-password");

    req.auth = user;
    next();
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ message: "Token expired. Please log in again." });
  }
};

export default AuthMiddleware;
