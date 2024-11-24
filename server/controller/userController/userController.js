import User from "../../model/userModel/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, role, status } = req.body;

    if (!username || username.trim() === "") {
      res.status(400).json({
        message: "Name is  required",
      });
    }
    const user = new User({
      username,
      email,
      role,
      status,
      auth: req.auth._id,
    });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, email, role, status } = req.body;
    const { id } = req.params;
    const UserID = req.auth._id;
    if (!id) {
      res.status(404).json({
        message: "Not valid id",
      });
    }
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User Not Found",
      });
    }
    if (!user.auth.equals(UserID)) {
      res.status(401).json({
        message: "Not Authorized",
      });
    }
    user.username = username || user.username;
    user.email = email || user.email;
    user.role = role || user.role;
    user.status = status || user.status;

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const UserID = req.auth._id;
    if (!id) {
      res.status(404).json({
        message: "Not valid id",
      });
    }
    const user = await User.findByIdAndDelete(id);
    if (!user.auth.equals(UserID)) {
      res.status(401).json({
        message: "Not Authorized",
      });
    }
    res.status(200).json("User Delete Successfully");
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};
export const getUsers = async (req, res) => {
  try {
    const UserID = req.auth._id;
    if (!UserID) {
      res.status(400).json({
        message: "User Not found",
      });
    }
    const user = await User.find({ userAuth: UserID });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};
export const getUser = async (req, res) => {
  try {
    const UserID = req.auth._id;
    const { id } = req.params;
    if (!id) {
      res.status(401).json({
        message: "Not valid id",
      });
    }
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User Not found",
      });
    }
    if (!user.auth.equals(UserID)) {
      res.status(401).json({
        message: "Not Authorized",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};
