"use client";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
 
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
 
  if (!token) {
    // No token found, user is not authenticated
    return false;
  }
 
  try {
    const decodedToken = jwt.decode(token);
    if (decodedToken.exp < Date.now() / 1000) {
      // Token expired, user is not authenticated
      window.location.href = "/login";
    }
 
    // Token is valid, user is authenticated
    return true;
  } catch (error) {
    // Error decoding token, user is not authenticated
    return false;
  }
};
 
