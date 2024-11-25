import { useEffect, useState } from "react";
import axiosConfig from "../../config/axiosConfig";
import Layout from "../../components/Layout/layout";
import { roleTh } from "../../constants/index";
import { PlusIcon, TrashIcon, EditIcon } from "lucide-react";

const newUser = () => {
  const token = localStorage.getItem("token");
  const [fetchrole, setFetchRole] = useState("");

  const getUser = async () => {
    try {
      const response = await axiosConfig.get("/api/v1/roleGet", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data.data);
        setFetchRole(response.data.data);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  useEffect(() => {
    getUser();
  });
  return (
    <Layout>
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Role Management
        </h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          <PlusIcon className="mr-2" /> Add Role
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            {roleTh.map((head) => (
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                key={head.id}
              >
                {head.title}
              </th>
            ))}
          </tr>
        </thead>
        {/* <tbody className="bg-white divide-y divide-gray-200">
          {fetchuser.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <EditIcon size={16} />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <TrashIcon size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </Layout>
  );
};

export default newUser;
