"use client"
import { useState,useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';

function SingleStoreBanner() {
  const [bannerdara, setbannerData] = useState([]);
 
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
   
    fetchData1(); // Call the fetchData function when the component mounts
  }, []);
  return (
    <>
   
        <section  className="relative w-full h-96 font-[karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={axiosInstance.defaults.baseURL + bannerdara.image} 
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{bannerdara.title}</h1>
            
           
          </div>
        </section>
      

    </>
  )
}

export default SingleStoreBanner