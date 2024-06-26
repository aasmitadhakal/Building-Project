"use client";
import React, { useState, useEffect } from "react";
import { FaCar, FaToilet, FaBed } from "react-icons/fa";
import axiosInstance from "@/app/utils/axiosInstance";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

function DoubleStore() {

  const [data, setData] = useState([]);
  const [bannerdata, setBannerData] = useState([]);

  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/10');
      if (response.data.success) {
        setBannerData(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch banner data');
      }
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/design/s/double');
      if (response.data.success) {
        setData(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData();
  }, []);

  return (
    <>
      {/* Banner */}
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
          src={axiosInstance.defaults.baseURL + bannerdata.image}
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
          <h1 className="mb-4 font-[500] text-[44px] text-white leading-[32px]">
            {bannerdata.title}
          </h1>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className='md:px-0 px-4 bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] leading-[25px]'>
        <div className='container mx-auto flex items-center gap-x-2'>
          <Link href='/'>Home</Link>
          <IoIosArrowForward />
          <p>Design</p>
          <IoIosArrowForward />
          <p>Double Storey Houses</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid place-content-center grid-cols-1 md:px-0 px-4 container mx-auto md:gap-y-12 gap-y-12 md:gap-8 md:mb-36 mb-12 mt-24 font-[Montserrat]">
        {data.map((property, index) => (
          <Link href={`/design/doublehome/${property.id}`} key={index} className="shadow-md p-4">
            <h3 className="text-customblue font-[600] text-[24px] leading-[35px] mx-2 my-2">
              {property.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <img
                  src={axiosInstance.defaults.baseURL + property.image}
                  alt={property.title}
                  className="h-[177px] w-[418px] mb-4 aspect-square"
                />
                <p className="text-cutombrown md:text-[18px] pl-4 text-[10px] leading-[24px] font-[400]">Ground Floor</p>
              </div>
              <div>
                <img
                  src={axiosInstance.defaults.baseURL + property.other_image}
                  alt={property.title}
                  className="h-[177px] w-[418px] mb-4 aspect-square"
                />
                <p className="text-cutombrown md:text-[18px] pl-4 text-[10px] leading-[24px] font-[400]">First Floor</p>
              </div>
              <div className="my-6 font-[Montserrat]">
                <div className="text-black font-[400] text-[16px] leading-[22px] my-2 mx-2 flex">
                  Frontage Size: {property.frontage_size}
                </div>
                <div className="text-black font-[400] text-[16px] leading-[22px] my-2 mx-2 flex">
                  <FaBed className="text-customblue mx-2" /> {property.bedroom}
                  <span className="mx-1">Bedrooms</span>
                </div>
                <div className="text-black font-[400] text-[16px] leading-[22px] my-2 mx-2 flex">
                  <FaCar className="text-customblue mx-2" /> {property.cars}
                  <span className="mx-1">Cars</span>
                </div>
                <div className="text-black font-[400] text-[16px] leading-[22px] my-2 mx-2 flex">
                  <FaToilet className="text-customblue mx-2" /> {property.bathrooms}
                  <span className="mx-1">Bathroom</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default DoubleStore;