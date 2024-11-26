import { useState } from "react";

import toast from "react-hot-toast";
import axiosConfig from "../../config/axiosConfig";
const addRole = (props) => {
  let toggle = props.toggle;
  let setToggle = props.setToggle;
  const token = localStorage.getItem("token");
  // useEffect(()=>{
  //   if(!token){
  //     toast.error("Please Login or Register")
  //   }
  // },[token])
  const [formData, setFormData] = useState({
    roleName: "",
    permissions: {
      read: false,
      write: false,
      delete: false,
      manage_users: false,
      manage_roles: false,
    },
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        permissions: { ...formData.permissions, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Submitted Role:", formData);
      const response = await axiosConfig.post("/api/v1/role", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Role added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user.");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Role</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Name Input */}
          <div>
            <label
              htmlFor="roleName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role Name
            </label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              value={formData.roleName}
              onChange={handleChange}
              placeholder="Enter role name"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              required
            />
          </div>

          {/* Permissions Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Permissions
            </label>
            <div className="flex flex-col space-y-2">
              {Object.keys(formData.permissions).map((permission) => (
                <label key={permission} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name={permission}
                    checked={formData.permissions[permission]}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="capitalize text-gray-800">
                    {permission.replace("_", " ")}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() =>
                setFormData(
                  {
                    roleName: "",
                    permissions: {
                      read: false,
                      write: false,
                      delete: false,
                      manage_users: false,
                      manage_roles: false,
                    },
                  },
                  setToggle(!toggle)
                )
              }
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addRole;
