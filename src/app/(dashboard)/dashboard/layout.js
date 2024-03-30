"use client";
import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./component/Sidebar";
import AuthLayout from "@/app/components/AuthLayout";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <AuthLayout>
      <section className="flex bg-gray-100 h-screen ">
        <aside className="md:w-64">
          <Sidebar />
        </aside>

        <div className="flex-1  overflow-y-auto px-5">{children}</div>
      </section>
    </AuthLayout>
  );
};

export default Layout;