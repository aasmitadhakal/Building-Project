// pages/login.js
"use client";
import axiosInstance from "@/app/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const img = "/assets/image/logo.jpg";

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
        router.push("/dashboard");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-20 border font-[poppins]  p-10 rounded-md container">
      <ToastContainer />
      <div className="flex justify-center mb-5">
        <img src={img} className="h-20"></img>
      </div>

      <div>
        <h2 className="font-semibold text-xl text-gray-500">Welcome to 108 build! </h2>
        <p className="text-sm my-2 text-gray-500">Please sign in with your credentials</p>
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block my-2 text-sm font-medium text-gray-600 dark:text-white">
          Email :
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
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
          Password :
        </label>
        <i className={`${passwordView ? "ri-eye-off-line" : "ri-eye-line"} text-lg  absolute ml-52 sm:ml-[17rem] mt-2 `} onClick={passwordToggle}></i>
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
        className="text-white flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Login;
