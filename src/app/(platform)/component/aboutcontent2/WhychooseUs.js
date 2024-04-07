"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import { FaCircleCheck } from "react-icons/fa6";

function WhychooseUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/whyus');
        if (response.data.success) {
          setData(response.data.data[0]); // Accessing the first item directly
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderDescription = (description) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(description, 'text/html');
    const listItems = htmlDoc.querySelectorAll('ul li, ol li');
    
    if (listItems.length > 0) {
      return (
        <div className='flex flex-col justify-between mt-4'>
          {Array.from(listItems).map((item, index) => (
            <div key={index} className='flex my-2 items-start text-justify leading-[24px] text-[16px] font-[400] tracking-wide text-[#37454D]'>
              <div className='flex items-center mr-4'>
                <FaCircleCheck className='text-customyellow mt-1' />
              </div>
              <div className='flex-1'>
                <div className='flex gap-x-2 '>{item.innerHTML}</div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div dangerouslySetInnerHTML={{ __html: description }} />
      );
    }
  };

  return (
    <>
      {data && (
        <section className='bg-white mb-28 '>
          <div className='bg-white grid md:grid-cols-2 grid-cols-1 place-content-between container mx-auto px-4 text-justify font-[Montserrat]'>
            <div className='flex items-center justify-center text-[16px] font-[400] text-[#37454D]'>
              <div className=' bg-white  gap-x-4'>
                <p className='font-[700] text-[34px]  leading-[32px] font-montserrat text-customblue my-4'>{data.title}</p>
                {renderDescription(data.description)}
              </div>
            </div>
            <div className=' flex items-center gap-x-4 justify-center  '>
              <img src={axiosInstance.defaults.baseURL + data.image} alt='' className=' rounded-md object-cover aspect-square ' />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default WhychooseUs;