import { lazy } from "react";
const NewRole = lazy(() => import("./pages/NewRole/newRole.jsx"));
const NewUser = lazy(() => import("./pages/NewUser/newUser.jsx"));
const Home = lazy(() => import("./pages/Home/home.jsx"));
const Login = lazy(() => import("./pages/Login/login.jsx"));
const Register = lazy(() => import("./pages/Register/register.jsx"));

// import NewUser from "./pages/NewUser/newUser.jsx";
// import NewRole from "./pages/NewRole/newRole.jsx";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<NewUser />} />
        <Route path="/role" element={<NewRole />} />
      </Routes>
    </>
  );
}

export default App;
