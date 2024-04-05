"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';


function Page() {
  const [data, setData] = useState([]);
  const [bannerdata, setbannerData] = useState([]);
 
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/12');
      if (response.data.success) {
        setbannerData(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/privacy');
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
         {/* forbanner */}
    
        <div  className="relative mt-20  w-full h-96 font-[Karla]">
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
            <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">
              {bannerdata.title}
            </h1>
          </div>
        </div>
    
      {/* for detail */}
            {data.map((item, index) => (
                <div key={index} className=' text-slate-700 font-[400] font-[karla]  mb-40 mt-12  container mx-auto md:px-0 px-4 text-justify 'dangerouslySetInnerHTML={{ __html: item.description }}/>
                 
            ))}
        </>
    );
}

export default Page;