"use client"
import React from 'react';
import { FaCar } from "react-icons/fa";
import { FaToilet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { useState,useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import Link from 'next/link';

function Singlestoreyhomes() {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/design/s/single');
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
   
    
    fetchData(); 
  }, []); 

  return (
    <>


{/* for cards */}
<section className="grid md:grid-cols-3 grid-cols-1 md:px-0 my-8 px-4 container mx-auto md:gap-8 md:gap-y-0 gap-y-12 md:mb-36 mt-12  font-[Montserrat]">
        {data.map((property, index) => (
          <Link href={`/design/singlehome/${property.id}`} key={index}>
            <div className="shadow-md p-4">

              <h3 className='text-customblue font-[600] text-[24px] leading-[35px] mx-2'>{property.title}</h3>
              <img src={axiosInstance.defaults.baseURL + property.image} alt={property.title} className='h-[241px] w-full mb-4' />

              <p className='text-black font-[400] text-[16px] leading-[22px] my-1 mx-2 flex'>Frontage Size: {property.frontage}</p>
              <p className='text-black font-[400] text-[16px] leading-[22px] my-1 flex'><FaBed className='text-customblue mx-2'/> {property.bedroom}<span className='mx-1'>Bedrooms</span></p>
              <p className='text-black font-[400] text-[16px] leading-[22px] my-1 flex'> <FaCar className='text-customblue mx-2'/> {property.cars}<span className='mx-1'>Cars</span></p>
              <p className='text-black font-[400] text-[16px] leading-[22px] my-1 flex '><FaToilet className='text-customblue mx-2' /> {property.bathrooms}<span className='mx-1'>Bathroom</span></p>
            </div>
          </Link>
        ))}
      </section>
    </>
   
  );
}

export default Singlestoreyhomes;