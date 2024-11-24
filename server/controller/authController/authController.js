import Auth from "../../model/authModel/authModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
dotenv.config();

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // pass secure
    let hashPass;
    try {
      hashPass = await bcrypt.hashSync(password, 10);
    } catch (error) {
      return res.status(401).json({
        message: "error in hashing pass ",
      });
    }
    // create
    const userAuth = new Auth({
      name,
      email,
      password: hashPass,
    });
    await userAuth.save();
    return res.status(200).json({
      message: "User created successfully ",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does't not exist." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      console.log("Password doest match");
      return res.status(400).json({ message: "Password does't match" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    const { _id, name } = user;
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: "none", // cross-site access --> allow all third-party cookies
      secure: true,
    });

    return res
      .status(200)
      .json({ message: "logged in successfully!", _id, name, email, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
