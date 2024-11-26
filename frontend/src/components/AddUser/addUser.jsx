import { useState } from "react";
import axiosConfig from "../../config/axiosConfig";
import Layout from "../../components/Layout/layout";
import toast from "react-hot-toast";
const addUser = (props) => {
  let toggle = props.toggle;
  let setToggle = props.setToggle;
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (!token) {
  //     toast.error("Please Login or Register");
  //   }
  // }, [token]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "Super Admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosConfig.post("/api/v1/user", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("User added successfully!");
      // console.log(response.data);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user.");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            >
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-md mr-2"
              onClick={() => {
                setFormData({ username: "", email: "", role: "Super Admin" }),
                  setToggle(!toggle);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addUser;
