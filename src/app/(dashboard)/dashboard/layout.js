"use client";
import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./component/Sidebar";
import AuthLayout from "@/app/components/AuthLayout";
 
const Layout = ({ children }) => {
 
 
  return (
    <AuthLayout>
      <div className="flex md:gap-64 w-full bg-gray-100">
      <aside>
        <Sidebar />
      </aside>
 
      <div className="w-full h-screen px-5">{children}</div>
    </div>    </AuthLayout>
   
  );
};
 
export default Layout;


