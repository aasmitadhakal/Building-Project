"use client";
import React from 'react';
import { useState ,useEffect} from 'react';
import axiosInstance from '@/app/utils/axiosInstance';

function ClientJourney() {
    const [data, setData] = useState([]);
    const [headerdata, setheaderdata] = useState([]);
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
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/journey');
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

    fetchData(); // Call the fetchData function when the component mounts
  }, []); 

  return (
    <>
        <section>
            <div className='grid md:grid-cols-3 font-[Montserrat] my-24 container mx-auto md:px-0 px-4 '>
            {/* for title headding */}
            <div className='grid place-content-center'>
                <div className='text-customblue font-[700] text-[36px] leading-[49px] flex justify-center item-center'> {headerdata.client_description} </div>
                <div className='flex justify-center item-center'>
                <button className='my-4 text-customblue hover:text-white hover:bg-customblue px-4 w-44 py-2 rounded ring-customblue ring-1 font-[600] text-[22px] leading-[29px]  '>Learn More</button>
                </div>
              
            </div>
            {/* for dyanmic part */}
            <div className='md:col-span-2 '>
                <div className='grid md:grid-cols-2 gap-x-16 gap-y-6  '>
            {data.map((datas) => (
                <>
                <div key={datas.id} className='shadow rounded p-4'>
                    <img  src={axiosInstance.defaults.baseURL + datas.image} alt='img' className='h-[45px] w-[45px] bg-customyellow rounded px-1 py-1'></img>
                    <p className='my-2 text-black font-[600] text-[24px] mb-1 leading-[32px]'>{datas.title}</p>
                    <p className='text-black font-[400] text-[16px] leading-[25px] ' dangerouslySetInnerHTML={{ __html: datas.short_description }}/>
                </div>
                </>
            ))}
            </div>
                
            </div>
            </div>
        </section>
    </>
  )
}

export default ClientJourney