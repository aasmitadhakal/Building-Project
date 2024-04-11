"use client"
import React, { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import axiosInstance from '@/app/utils/axiosInstance';
function LandPackage() {
  const [data, setData] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const fetchData = () => {
    axiosInstance.get('/api/packages')
      .then(response => {
        const filteredData = response.data.data.filter(item => item.package_type === 'LAND');
        setData(filteredData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
 
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/settings');
      if (response.data.success) {
        setheaderdata(response.data.data.data); // Update state with fetched data
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
  }, []); 
  return (
    <container>
        <div className='container md:px-0 px-4 mx-auto mt-10 text-customblue font-[600] text-[26px] leading-[35px]'>{headerdata.land_sections_descriptions}</div>
    <div className='grid md:grid-cols-3 md:px-0 px-4 container mx-auto gap-8 md:mb-44 mb-16 mt-4 '>
      {data.map(property => (
          <Link href={`/landpackage/${property.id}`} key={property.location}>
        <div  className='shadow-md p-4'>
        {property.packages_images.length > 0 && (
        <img src={axiosInstance.defaults.baseURL + property.packages_images[0].images} alt={property.packages_images[0].name} className='h-[222px]  w-full' />
      )}
          <button className='bg-[#FBF2D6] text-black px-4  rounded-lg -translate-y-3 mx-4 font-[400]  text-[16px] leading-[25px]'>{property.status}</button>
          
          <div className='flex items-center   font-[Montserrat] font-[400] text-[#656565] text-[14px] leading-[25px]'><FaLocationDot className='text-[#7B493E] mr-2' /><p className=''>{property.location}</p> </div>
          <div className='flex justify-between'>
            <div>
          <div className='flex my-2'><p className=' pr-2 text-black font-[400]  text-[18px]  leading-[24px] mb-1'>Price Range:</p> <p className='font-[400] text-[#656565] text-[14px] leading-[25px]'>{property.price_start} to {property.price_end}</p></div>
          <div className='flex my-2'><p className=' pr-2 text-black font-[400]  text-[18px]  leading-[24px] mb-1'>Area:</p> <p className='font-[400] text-[#656565] text-[14px] leading-[25px]'>{property.area}</p></div>
          </div>
          <div className='flex justify-end items-end ' >
           <Link  href={`/landpackage/${property.id}`}>
           <button className='bg-customblue hover:bg-cutombrown p-2 rounded-full text-white font-[600] text-[20px]'><GoArrowUpRight /></button></Link>   
              </div>
          </div>
        
              
        
        </div>
        </Link>
      ))}
    </div>
    </container>
  );
}

export default LandPackage;