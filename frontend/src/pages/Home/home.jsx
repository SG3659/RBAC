import React, { useEffect } from "react";
import Layout from "../../components/Layout/layout";
import apiUserFetch from "../../api/fetchUser.js";
import { useNavigate } from "react-router-dom";
const home = () => {
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const response = await apiUserFetch();
      if (response.status === 200) {
        console.log(response.data.data);
      }
    } catch (error) {
      // localStorage.clear();
      console.error("Error fetching data:", error);
      navigate("/login");
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Layout>
        <div>Hiii</div>
      </Layout>
    </>
  );
};

export default home;
