"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';

function Aboutus() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/aboutus');
        if (response.data.success) {
          setData(response.data.data[0]); // Update state with fetched data
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <>
     <section  className='container mx-auto font-[Montserrat] '>
          <div className='grid md:grid-cols-2 place-content-between my-0 md:my-12  gap-x-8 md:px-0 px-4 '>
            {/* for text part */}
            <div className='grid place-content-center'>
              <p className='my-4 text-customblue font-[700] text-[36px] leading-[49px] flex justify-center items-center'>{data.title}</p>
              {/* Render HTML content safely */}
              <div className='font-[Montserrat] font-[400] leading-[24px] text-[16px] text-justify' dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
            {/* for img part */}
            <div className='relative flex justify-center items-center overflow-hidden mb-4'>
              {/* Fetch and render the first image */}

                <img
                  src={axiosInstance.defaults.baseURL + data.image_one} // Concatenate base URL with image path
                  className='md:w-[391px] md:h-[347px] w-[200px] h-[150px] rounded-md ring-4 ring-white md:mt-36 mt-28 absolute top-0 left-0'
    
                />
  
              {/* Fetch and render the second image */}

                <img
                  src={axiosInstance.defaults.baseURL + data.image_two} // Concatenate base URL with image path
                  className='md:w-[484px] md:h-[430px] w-[280px] h-[250px] rounded-md ring-4 ring-white md:mb-6 mb-4' // Added margin-top here
   
                />
            </div>
          </div>
        </section>
    </>
  );
}

export default Aboutus;