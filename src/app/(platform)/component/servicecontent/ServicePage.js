"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import './index.css'
function ServicePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/service');
        if (response.data.success) {
          setData(response.data.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <style>
        {`
          .service-item {
            position: relative;
            overflow: hidden;
          }
          .service-item:hover img {
            background-color: white;
          }
          .service-item img {
            transition: background-color 0.3s ease-in-out;
          }
        `}
      </style> */}
      <section className='grid md:grid-cols-3 container mx-auto gap-6 my-12 mb-44  md:px-0 px-4 font-[Montserrat]'>
        {data.map((datas, index) => (
          <div
            key={index.id}
            className='service-item shadow-xl rounded p-4 hover:bg-customblue hover:text-white'
          >
            <img
              src={axiosInstance.defaults.baseURL + datas.image}
              alt='img'
              className='h-[35px] w-[35px] bg-customyellow text-white rounded px-1 py-1'
            />
            <p className='my-1 font-[600] text-[24px] leading-[32px]'>
              {datas.name}
            </p>
            <p
              className='text-blue font-[400] text-[16px] leading-[25px]'
              dangerouslySetInnerHTML={{ __html: datas.description }}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default ServicePage;