"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import Link from 'next/link';

import '../component/servicecontent/index.css'

function HomeBanner() {
  const [data, setData] = useState([]);
  const [buttondata, buttonData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/sliders');
      if (response.data.success) {
        setData(response.data.data[0]); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/settings');
      if (response.data.success) {
        buttonData(response.data.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Function to fetch data from API
    fetchData1();
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <>
      {/* {data.map((card, index) => ( */}
      <div className="relative w-full h-screen overflow-hidden font-[Montserrat]">
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src={axiosInstance.defaults.baseURL + data.image}
    alt="Background"
  />
  <div className="absolute inset-0 flex items-center justify-center  ">
    <div className="bg-black bg-opacity-75 p-8 md:w-1/2 md:mx-0 mx-4 text-white text-center   corner-border ">
      <div className='bottom-corner'>
      <h1 className="mb-4 md:font-[500] md:text-[24px] leading-[32px]">{data.name}</h1>
      <p className="md:font-[800] font-[500] md:text-[40px] text-[35px] leading-[54px]" dangerouslySetInnerHTML={{ __html: data.description }} />
      <Link href=""><button className="mt-4 md:font-[600] font-[400] md:text-[20px] text-[10px] bg-white hover:bg-[#4581AC] px-8 py-4 rounded-lg text-[#4581AC] ring-[#4581AC] hover:bg-blues hover:text-white ring-2 leading-[22px]">{buttondata.home_button}</button></Link>
      </div>
      
    </div>
  </div>
</div>
<div>

</div>
     
    </>
  );
}

export default HomeBanner;