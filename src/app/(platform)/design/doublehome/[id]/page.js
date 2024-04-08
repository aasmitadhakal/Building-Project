"use client";
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Singlestoreyhomes from "@/app/(platform)/component/designcontent/Singlestoreyhomes";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
function Page({ params }) {
  const [data, setData] = useState([]);
  const [bannerdara, setbannerData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/design/${params.id}`);
      if (response.data.success) {
        setData(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
 
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/6');
      if (response.data.success) {
        setbannerData(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  }, [params.id]);

  return (
    <>
      {/* forbanner */}
    
        <section  className="relative w-full mt-20 h-96 font-[karla]">
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
            src={axiosInstance.defaults.baseURL + bannerdara.image}
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
            <h1 className=" mb-4 md:font-[500] text-[44px] text-white leading-[32px]">
              {data.title}
            </h1>
          </div>
        </section>
        <div className=' md:px-0 px-4 bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] leading-[25px]'>
          <div className='container mx-auto flex items-center gap-x-2'>
          <Link href='/'>Home</Link>
         <IoIosArrowForward />
         <p>Design</p>
         <IoIosArrowForward />
         <p>{data.title}</p>
          </div>
        
        </div>
      {/* for dynamic content */}

      <div className="container mx-auto md:px-0 px-4 mt-22 my-4 md:mb-44 mb-12 mt-8 font-[Montserrat]">
        {/* for box */}
        <div className="grid md:grid-cols-3 gap-4">
          {data && (
            <div className="shadow rounded p-4">
              <div className="flex justify-between mx-2 py-4 border-b border-customblue text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  Frontage:
                </p>
                {data.frontage}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  Size:
                </p>
                {data.size}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  bedroom:
                </p>
                {data.bedroom}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  cars:
                </p>
                {data.frontage}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  Bathrooms:
                </p>
                {data.bathrooms}
              </div>
              {/* Render other fields as needed */}
            </div>
          )}
          {/* for img */}
          <div className="md:col-span-2">
            <img
              src={axiosInstance.defaults.baseURL + data.image}
              alt={data.title}
              className=" aspect-square w-[810px] h-[410px]"
            ></img>
          </div>
        </div>
        <div className=" bg-[#ECECEC] my-8 rounded p-4">
          <p className="border-l-1 border-gray-400 my-2 p-2">Description</p>
          <p className="font-[400] text-[15px] leading-[25px] my-1 text-justify" dangerouslySetInnerHTML={{ __html: data.description }}/>
            
        </div>
        {/* for price */}
        <div className=" bg-[#ECECEC] my-8 rounded p-4">
          <p className="border-l-1 border-gray-400 my-2 p-2">Price</p>
          <p className="font-[400] text-[15px] leading-[25px] my-1">
            {data.price}
          </p>
        </div>
        {/* for Floor plan */}
        <div className=" bg-[#ECECEC] my-8 rounded p-4">
          <p className="border-l-1 border-gray-400 my-2 p-2">Floor Plane</p>
          <p className="font-[400] text-[15px] leading-[25px] my-1">
            {data.floor_plan}
          </p>
        </div>
        <p className="font-[600] text-[24px] leading-[24px] text-customblue">
          You may like
        </p>
        <Singlestoreyhomes />
      </div>
    </>
  );
}

export default Page;
