"use client"
import { useState,useEffect } from 'react';
import Fancybox from './Fancybox';
import axiosInstance from '@/app/utils/axiosInstance';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


 function Gallery() {
  const [data, setData] = useState([]);
  const [bannerdara, setbannerData] = useState([]);
 
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/5');
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
      const response = await axiosInstance.get('/api/gallery');
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
    fetchData1(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts
 
  return (
    <div className=''>
       
        <div  className="relative w-full  h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={axiosInstance.defaults.baseURL + bannerdara.image} 
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{bannerdara.title}</h1>
            
           
          </div>
        </div>
        <div className=' md:px-0 px-4 md: bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] leading-[25px]'>
          <div className='container mx-auto flex items-center gap-x-2'>
          <Link href='/'>Home</Link>
         <IoIosArrowForward />
         <p>Gallery</p>
        
          </div>
        
        </div>
      
     <Fancybox
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>
   
<div className='grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 md:px-0 px-4 container mb-28 mx-auto pt-12'>
          {data.map((item, index) => (
            <a key={index} data-fancybox="gallery" href={axiosInstance.defaults.baseURL + item.image} className='aspect-square'>
              <img src={axiosInstance.defaults.baseURL + item.image} className='aspect-square' alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%' }} />
            </a>
          ))}
        </div>
</Fancybox>
    </div>
  );
}
export default Gallery