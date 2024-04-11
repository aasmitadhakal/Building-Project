"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

function PackageBanner() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/pages/14");
      if (response.data.success) {
        setData(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  return (
   <>
     <div className="relative w-full h-96 font-[Karla]">
        <div
          className="w-full h-96"
          style={{
            position: "absolute",
            backgroundColor: "#051721",
            opacity: "0.7",
            zIndex: "1",
          }}
        ></div>
        <img
          className="absolute inset-0 w-full h-96 object-cover"
          src={axiosInstance.defaults.baseURL + data.image}
          alt="Background"
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "100%",
            zIndex: "2",
          }}
        >
          <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">
            {data.name}
          </h1>
        </div>
      </div>
      <div className="  bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] leading-[25px]">
        <div className="container mx-auto flex items-center md:px-0 px-4 gap-x-1 leading-[24px] text-[18px]">
          <Link href="/">Home</Link>
          <IoIosArrowForward />
          <p> Packages</p>
        </div>
      </div>
   </>
  )
}

export default PackageBanner