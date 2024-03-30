"use client";
import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import AuthLayout from "@/app/components/AuthLayout";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
=======
import Sidenav from "./component/Sidenav";
>>>>>>> fa7fe564b661fd4281e7281088a5a6a4920f8b12

const Layout = ({ children }) => {
  return (
    <AuthLayout>
<<<<<<< HEAD
      <section className="flex bg-gray-100 h-screen ">
        <aside className="md:w-64">
          <Sidebar />
        </aside>

        <div className="flex-1  overflow-y-auto px-5">{children}</div>
=======
      <section className="bg-gray-100 h-screen">
        <Sidenav />

        <div className="px-4 pb-4 xl:ml-80">{children}</div>
>>>>>>> fa7fe564b661fd4281e7281088a5a6a4920f8b12
      </section>
    </AuthLayout>
  );
};

export default Layout;