import Role from "../../model/roleModel/roleModel.js";

export const createRole = async (req, res) => {
  try {
    console.log(req.auth._id);
    const { roleName, Permission } = req.body;
    if (!roleName || roleName.trim() === "") {
      res.status(400).json({
        message: "RoleName Required",
      });
    }
    const role = new Role({
      roleName,
      Permission,
      auth: req.auth._id,
    });
    await role.save();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};
export const updateRole = async (req, res) => {
  try {
    const { roleName, Permission } = req.body;
    const UserID = req.auth._id;
    const { id } = req.params;
    if (!id) {
      res.status(404).json({
        message: "Not valid id",
      });
    }
    const role = await Role.findById(id);
    if (!role) {
      res.status(404).json({
        message: "role not found",
      });
    }
    if (!role.auth.equals(UserID)) {
      res.status(401).json({
        message: "Not Authorized",
      });
    }
    role.roleName = roleName || role.roleName;
    role.Permission = Permission || role.Permission;
    await role.save();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};

export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const UserID = req.auth._id;

    if (!id) {
      res.status(404).json({
        message: "Not valid id",
      });
    }
    const role = await Role.findByIdAndDelete(id);
    if (!role.auth.equals(UserID)) {
      res.status(401).json({
        message: "Not Authorized",
      });
    }
    res.status(200).json("Role Delete Successfully");
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};

export const getRole = async (req, res) => {
  try {
    const UserID = req.auth._id;
    if (!UserID) {
      res.status(400).json({
        message: "User Not found",
      });
    }
    const role = await Role.find({ userAuth: UserID });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};
