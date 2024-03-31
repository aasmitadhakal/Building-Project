"use client";
import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import AuthLayout from "@/app/components/AuthLayout";
 
import "react-toastify/dist/ReactToastify.css";
import Sidenav from "./component/Sidenav";
 
const Layout = ({ children }) => {
  return (
    <AuthLayout>
      <section className="bg-gray-100 h-screen font-['poppins']">
        <Sidenav />

        <div className="px-4  xl:ml-80">{children}</div>
      </section>
    </AuthLayout>
  );
};
 
export default Layout;
 