"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./component/Sidebar";
import { isAuthenticated } from "./component/decoded/Decode";
 
const Layout = ({ children }) => {
  const router = useRouter();
 
  const loggedIn = isAuthenticated();
  if (!loggedIn) {
    router.push("/login"); // Redirect to your login page
    return null; // Return null to prevent rendering the rest of the layout
  }
 
  return (
    <div className="flex md:gap-64 w-full bg-gray-100">
      <aside>
        <Sidebar />
      </aside>
 
      <div className="w-full h-screen px-5">{children}</div>
    </div>
  );
};
 
export default Layout;