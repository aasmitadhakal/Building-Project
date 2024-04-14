// pages/login.js
"use client";
import axiosInstance from "@/app/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const img = "/assets/image/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordView, setPasswordView] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const passwordToggle = () => {
    setPasswordView(!passwordView);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your login logic here
    try {
      const response = await axiosInstance.post(
        "/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.data;
        // Set the token in a cookie named 'authorization'
        // localStorage.set("authorization", data.accessToken);
        localStorage.setItem("authorization", data.accessToken);
        toast.success("Login Successful", { autoClose: 3000 });
        router.push("/dashboard");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto  shadow-sm bg-white font-[poppins] p-5 rounded-sm container">
      <ToastContainer />
      <div className="flex justify-center mb-5  ">
        <img src={img} className="h-32 bg-white rounded-b-xl shadow-md p-2 pb-5"></img>
      </div>

      <div>
        <h2 className="font-semibold text-xl text-gray-800">Welcome to 108Build !</h2>
        <p className="text-sm font-normal my-2 text-gray-500">Please sign-in to your account</p>
      </div>
      <div className="my-5">
        <label htmlFor="email" className="block my-2 text-base font-normal text-slate-800 dark:text-white">
          EMAIL :
        </label>
        <input
          type="email"
          id="email"
          className="border border-blue-500 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5   "
          placeholder="Please enter your Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-base font-normal text-slate-800 dark:text-white ">
          <div className="flex justify-between">
            PASSWORD : <p className="text-sm text-blue-500 font-[Montserrat]">Forgot password?</p>
          </div>
        </label>
        <i
          className={`${passwordView ? "ri-eye-off-line" : "ri-eye-line"} text-lg  absolute ml-52 sm:ml-[19rem] mt-2 xm:ml-64`}
          onClick={passwordToggle}
        ></i>
        <input
          type={`${passwordView ? "text" : "password"}`}
          placeholder="Please enter your Password "
          id="password"
          className=" border border-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="text-white flex justify-center items-center bg-[#4581AC]   font-semibold rounded-lg text-xl w-full  px-5 py-2.5 text-center "
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Login;
