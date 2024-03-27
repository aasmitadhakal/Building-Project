"use client";
import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./component/Sidebar";
import AuthLayout from "@/app/components/AuthLayout";

import "react-toastify/dist/ReactToastify.css";


const Layout = ({ children }) => {
  return (
    <AuthLayout>
      <div className="flex  w-screen md:pl-64 bg-gray-100">
        <aside>
          <Sidebar />
        </aside>

        <div className="w-full h-screen px-5 mt-14">{children}</div>
      </div>{" "}
    </AuthLayout>
  );
};

export default Layout;
