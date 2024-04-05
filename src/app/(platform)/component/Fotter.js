"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";


const img = "/assets/image/logo.jpg";
const sections = [
  {
    title: " Quick Links",
    items: [<Link href="/">Home</Link>,<Link href="/about">About Us</Link>, <Link href="/service">Service</Link>, <Link href="/gallery">Gallery</Link>, <Link href="/contactus">Contact</Link>],
  },
  {
    title: "Company",
    items: ["Privacy Policy"],
  },

  {
    title: "Details",
    items: [
      <Link href="/contact">Our Story</Link>,
       "Address: "  ,
      "Millennium City, PH17",
      "Phone: 023 456 7890",
      "Email: travel@gmail.com",
      "Maps: Millennium City, Accra"
    ]
  },
];



const Footer = () => {
  const [headerdata, setheaderdata] = useState([]);
  const fetchData = async () => {
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
    
  }, []);
  return (
    <footer className="w-full  bg-customblue text-white   font-[Montserrat]">
         <div className="container mx-auto md:block hidden w-full h-[150px] relative -translate-y-1/2 bg-customyellow  text-white    items-center">
            <div className="text-white flex  justify-around items-center py-6">
            <div className="font-[700] text-[36px] leading-[50px]">{headerdata.dream_project}</div>
        <div><button className="my-4 bg-white text-customblue px-4 w-44 py-2 rounded hover:bg-customblue hover:text-white ring-customblue ring-1 font-[600] text-[22px] leading-[29px] ">{headerdata.dream_project_button}</button></div> 
            </div>
       
    </div>
     
      {/* <div className="flex justify-center items-center border-t-2 border-white py-2">© Copyright 2024 by @paradisegroup</div>  */}
      <div className="md:flex justify-between pb-8 container mx-auto ">
      {/* for descriptiion */}
      <div className="grid place-content-center">
     <div className="md:flex items-center my-2 justify-center"> <img src={img} className="h-20 w-20"></img></div>
      <div className="md:flex items-center justify-center my-2">"We're partners in creating exceptional spaces."</div>
      <div className="md:flex items-center justify-center ">Social Media</div>
      <div className="my-2 md:flex items-center justify-center gap-x-2">
      <div className="bg-white p-2 rounded-full"> <FaFacebookSquare className="text-blue-400 text-[16px]" /></div>
      <div><FaInstagram /></div>
      <div><FiTwitter /></div>  
      </div>
      </div>
      {/* for 1 colum  */}
      <div className="">
      <div className="my-2 font-[600] text-[24px] leading-[32px]">Quick Links </div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/'>Home</Link></div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/about'>About Us</Link></div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/services'>Service</Link></div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/gallery'>Gallery</Link></div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/contactus'>Contact</Link></div>
       <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/design/singlehome'>Desing</Link></div>
      </div>
       {/* for 2 colum  */}
       <div>
       <div  className=" my-2 font-[600] text-[24px] leading-[32px]" >Company </div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/privacy'>Privacy Policy</Link></div>
      </div>
         {/* for 2 colum  */}
        <div>
        <div className=" my-2 font-[600] text-[24px] leading-[32px]">Details</div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/'>Phone: {headerdata.site_phone}</Link></div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/'>Location:{headerdata.site_location}</Link></div>
      <div className="my-4 font-[400] text-[16px] leading-[25px]"><Link href='/'>Email:{headerdata.site_mail}</Link></div>
     
        </div>

    </div>
    </footer>
  );
};

export default Footer