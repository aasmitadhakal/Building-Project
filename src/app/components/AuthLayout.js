"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../utils/auth";
import jwt from "jsonwebtoken";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  
  // const gettoken = localStorage.getItem("authorization");
  // const decodedToken = jwt.decode(gettoken);

  const logout = () => {
    localStorage.removeItem("authorization");
    router.push("/login");
  };

  const oneHourInMilliseconds = 60 * 60 * 1000;
  setTimeout(() => {
    logout();
  }, oneHourInMilliseconds);

  useEffect(() => {
    // Check if user is authenticated
    let token;
    // Check if user is authenticated
    if (typeof window !== "undefined") {
      // Access localStorage only when running in the browser
      token = localStorage.getItem("authorization");
    }
    if (!isAuthenticated || !token) {
      // If not authenticated and trying to access the dashboard, redirect to login page
      router.push("/login");
    }

    const handleWindowClose = () => {
      // Remove the token from localStorage when the window is closed
      localStorage.removeItem("authorization");
    };

    // Add event listener for window close event
    window.addEventListener("beforeunload", handleWindowClose);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, []);

  return <div>{children}</div>;
};

export default AuthLayout;
