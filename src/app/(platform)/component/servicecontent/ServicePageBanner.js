"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
function ServicePageBanner() {
  const [data, setData] = useState([]);
 
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/3');
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
    // Function to fetch data from APi
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
  return (
   <>
   
        <section  className="relative w-full mt-20 h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={axiosInstance.defaults.baseURL + data.image} 
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{data.title}</h1>
            
           
          </div>
        </section>
        <div className='  bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] md:px-0 px-4 leading-[25px]'>
          <div className='container mx-auto flex items-center md:px-0 px-4 gap-x-2'>
          <Link href='/'>Home</Link>
         <IoIosArrowForward />
         <p> Services</p>
        
          </div>
        
        </div>
    
   </>
  )
}

export default ServicePageBanner