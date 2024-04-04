"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import axiosInstance from '@/app/utils/axiosInstance';

function MissionPart() {
  const [data, setData] = useState([]);
 
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/8');
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
     {/* {data.map((item, index) => ( */}
        <section className='bg-customgray py-10 font-[Montserrat]'>
      <div  className=' bg-customgray grid md:grid-cols-2 grid-cols-1  my-12 container mx-auto px-4 text-justify  font-[karla]'>
         {/* for img part */}
         <div  className=' my-12 flex items-end justify-end'>
          <img 
         src={axiosInstance.defaults.baseURL + data.image} 
           alt='' className='2xl:w-screen  rounded object-cover  ' />
        </div>
        {/* for text part */}
        <div  className='  flex items-center justify-center   my-2 text-[16px] font-[400] text-[#37454D] ' >
          <div className='h-[205px]w-[781px] bg-white p-6 shaadow-2xl'>
          <p className=' font-[600] text-[30px]  leading-10 text-blues font-montserrat text-customblue my-4'>{data.title}</p>
          <div className='flex items-center text-justify justify-center mt-4 leading-[24px] text-[16px] font-[400] tracking-wide text-[#37454D]'dangerouslySetInnerHTML={{ __html: data.description }}/>
          </div>
         
          
        </div>
       
      </div>
      </section>
{/* ))} */}
   </>
  )
}

export default MissionPart