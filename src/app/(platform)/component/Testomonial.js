"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from "react-icons/fa";
// import required modules
import { Pagination } from 'swiper/modules';

function Testonomial() {
  // Example JSON data
  const jsonData = [
    { title: "Asimsa Sharma", 
    img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "descriptioLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.e cillum dolore eu fugiat nulla pariatur. !"
    },
    { title: "Kiara sbbbs", 
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eu fugiat nulla pariatur. !"
    },
    { title: "Kiara sbbbs", 
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eu fugiat nulla pariatur. !"
    },
    { title: "Kiara sbbbs", 
    img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eu fugiat nulla pariatur. !"
    },
    { title: "Kiara sbbbs", 
    img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eu fugiat nulla pariatur. !"
    },
    { title: "Kiara sbbbs", 
    img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  eu fugiat nulla pariatur. !"
    },
   
    // Add more data as needed
  ];

  return (
    <>
    <section className='grid place-content-center mt-8 font-[Montserrat]'>
            <p className='text-cutombrown text-[18px] leading-[24px] font-[400] grid place-content-center'>Our clients review</p>
          <p className='text-customblue text-[36px] leading-[49px] font-[700] my-1 grid place-content-center'>Testimonials</p>
            </section>
      <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="container mx-auto"
      >
        
       {jsonData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=' text-black font-[Montserrat] my-20 shadow-2xl rounded p-8 '>
             <p className='grid place-content-center my-2'><FaQuoteLeft  className='text-[#EECB5D]'/></p>
              <div className='my-2 font-[Montserrat] font-[400] leading-[24px] text-[16px] text-[#6C6C6C] text-justify '>{item.description}</div>
              <div className='h-24 w-24 rounded-full overflow-hidden mx-auto '><img src={item.img} className='h-full w-full object-cover rounded-full ring-4 font-[Montserrat] ring-[#EECB5D]' alt={item.title} /></div>
              <div className=' text-black flex justify-center item-center font-[Montserrat] my-1'>{item.title}</div>
              <div className='flex text-yellow-300 justify-center items-center my-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Testonomial;