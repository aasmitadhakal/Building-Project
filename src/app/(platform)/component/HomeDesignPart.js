"use client";
import { useState } from "react";
import "../component/servicecontent/index.css";
import axiosInstance from "@/app/utils/axiosInstance";
import { useEffect } from "react";
import Link from "next/link";
function HomeDesignPart() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get("/api/settings");
      if (response.data.success) {
        setheaderdata(response.data.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/pages/9");
      if (response.data.success) {
        setData(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await axiosInstance.get("/api/pages/10");
      if (response.data.success) {
        setData2(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData3 = async () => {
    try {
      const response = await axiosInstance.get("/api/pages/11");
      if (response.data.success) {
        setData3(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // Function to fetch data from APi
    fetchData();
    fetchData2();
    fetchData3();
    fetchData1();
    // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
  return (
    <>
      <div className="bg-customgray md:py-16 py-8 font-[karla]">
        {/* Header */}
        <div className="">
          <p className="text-cutombrown md:text-[18px] text-[15px] leading-[24px] font-[400] grid place-content-center">
            Design & construction.
          </p>
          <p className="text-customblue md:text-[36px] text-[26px] leading-[49px] md:font-[700] font-[700]  grid mb-4 md:mb-6 place-content-center">
            {headerdata.design_section_description}
          </p>
        </div>

        {/* Images */}
        <div className="mx-auto container grid md:grid-cols-3 md:px-0 px-4 gap-4">
          {/* for img part1 */}
          <Link href="/design/singlehome">
            <div className="image-container relative h-[350px]">
              <div className="bg-black w-full flex justify-center items-center relative">
                {/* Overlay to darken the image */}
                <div
                  className="w-full h-full absolute top-0 left-0 bg-black opacity-70"
                  style={{
                    backgroundColor: "#051721",
                    opacity: "0.7",
                    zIndex: "1",
                  }}
                ></div>
                <img
                  src={axiosInstance.defaults.baseURL + data.image}
                  alt="img1"
                  className="img-transition h-[350px]"
                  style={{ transition: "transform 0.3s ease", zIndex: "0" }}
                />
              </div>
              {/* Title with improved visibility */}
              <p className="absolute inset-0 flex items-center justify-center text-white text-[24px] leading-[32px] font-[600] z-10">
                {data.title}
              </p>
            </div>
          </Link>

          {/* for dual */}
          <Link href="/design/doublehome">
            <div className="image-container relative h-[350px]">
              <div className="bg-black w-full flex justify-center items-center relative">
                {/* Overlay to darken the image */}
                <div
                  className="w-full h-full absolute top-0 left-0 bg-black opacity-70"
                  style={{
                    backgroundColor: "#051721",
                    opacity: "0.7",
                    zIndex: "1",
                  }}
                ></div>
                <img
                  src={axiosInstance.defaults.baseURL + data2.image}
                  alt="img1"
                  className="img-transition h-[350px]"
                  style={{ transition: "transform 0.3s ease", zIndex: "0" }}
                />
              </div>
              {/* Title with improved visibility */}
              <p className="absolute inset-0 flex items-center justify-center text-white text-[24px] leading-[32px] font-[600] z-10">
                {data2.title}
              </p>
            </div>
          </Link>

          {/* for dual occupanc */}
          <Link href='/design/doubleoccupance'>
            <div className="image-container relative h-[350px]">
              <div className="bg-black w-full flex justify-center items-center relative">
                {/* Overlay to darken the image */}
                <div
                  className="w-full h-full absolute top-0 left-0 bg-black opacity-70"
                  style={{
                    backgroundColor: "#051721",
                    opacity: "0.7",
                    zIndex: "1",
                  }}
                ></div>
                <img
                  src={axiosInstance.defaults.baseURL + data3.image}
                  alt="img1"
                  className="img-transition h-[350px] "
                  style={{ transition: "transform 0.3s ease", zIndex: "0" }}
                />
              </div>
              {/* Title with improved visibility */}
              <p className="absolute inset-0 flex items-center justify-center text-white text-[24px] leading-[32px] font-[600] z-10">
                {data3.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeDesignPart;
