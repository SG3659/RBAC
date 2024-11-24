import axiosConfig from "../../src/config/axiosConfig";
import toast from "react-hot-toast";
const apiUserFetch = async () => {
  const token = localStorage.getItem("token");
  try {
    const result = await axiosConfig.get("/api/v1/userGets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (result.status !== 200) {
      toast.error("Something went wrong");
      return;
    }
    const data = result.data;
    if (result.status === 200) {
      toast.success("Here is your user details");
      return data;
    } else if (result.status === 400) {
      toast.error(data.message || "Something went wrong");
      return { status: 400, message: data.message || "Bad Request" };
    } else {
      toast.error(data.message || "Something went wrong");
      return {
        status: result.status,
        message: data.message || "Unknown Error",
      };
    }
  } catch (error) {
    console.error("Error adding user:", error);
    toast.error("Failed to Fetch user.");
  }
};
export default apiUserFetch;
