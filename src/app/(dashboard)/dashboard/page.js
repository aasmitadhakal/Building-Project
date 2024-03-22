"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import DashBody from "./component/homepage/dasbody";



const Dashboard = () => {
  // const router = useRouter();
  // const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (!token) {
  //     router.push("/home");
  //   }
  // }, []);

  return (
    <div className="">
     
     
     <DashBody/>
    </div>
  );
};

export default Dashboard;
