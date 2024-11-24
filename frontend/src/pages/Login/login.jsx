import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axiosConfig from "../../config/axiosConfig";
import toast from "react-hot-toast";
// import { validatePassword } from "../../utils/validatePassword.js";
// import { useDispatch } from "react-redux";
// import { showLoading, hideLoading } from "../src/redux/alertSlice";
// import { signInSuccess, signInFailure } from "../src/redux/logInSlice";

const login = () => {
  //const { loading } = useSelector((state) => state.alerts);
  //console.log(loading) redux checking
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setshowPass] = useState(false);
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    //backend connectivity
    // const validationError = validatePassword(password);
    //     // if (validationError) {
    //     //   toast.error(validationError);
    //     //   return;
    //     // }
    try {
      // dispatch(showLoading());
      const response = await axiosConfig.post("/api/v1/authLogin", {
        email,
        password,
      });
      // dispatch(hideLoading());
      if (response.data.success) {
        //local storage created
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        console.log(response.data.data);
        // dispatch(signInSuccess(response.data.message));
        navigate("/");
      } else {
        // dispatch(signInFailure(response.data.message));
        toast.error(response.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      console.log(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto mt-40">
      <h1 className="text-3xl my-7 text-center text-white font-semibold bg-orange-400 rounded-lg">
        WELCOME BACK
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <input
          className="border p-3 rounded-lg focus:outline-none shadow-lg"
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={emailHandler}
          required
        />
        <label className="relative">
          <input
            className=" border p-3 rounded-lg focus:outline-none w-full shadow-lg"
            type={showpass ? "text" : "password"}
            placeholder="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            required
          />
          <span
            className="absolute right-5 top-4 cursor-pointer "
            onClick={() => setshowPass((prev) => !prev)}
          >
            {showpass ? (
              <AiOutlineEyeInvisible fontSize={24} />
            ) : (
              <AiOutlineEye fontSize={24} />
            )}
          </span>
        </label>
        <button
          className="border  p-3 rounded-lg bg-slate-700 text-white hover:opacity-95
        disabled:opacity-80"
        >
          LOGIN
        </button>
      </form>
      <div className="mt-5 flex gap-2">
        <p className="hover:font bold">Don't Have an account?</p>
        <Link to="/signup">
          <span className="text-blue-700">Register</span>
        </Link>
      </div>
      <div>
        <p className=" text-base text-gray-600">
          <Link
            to="/forgot--password"
            className="text-blue-600 font-bold hover:text-blue-700"
          >
            Forgot Password ?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default login;
