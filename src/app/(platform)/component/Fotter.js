"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { RiFacebookCircleFill, RiTwitterLine, RiWhatsappLine } from "react-icons/ri";
const img = "/assets/image/facebbok.png";
const img1 = "/assets/image/twiter.png";
const img3 = "/assets/image/instragram.png";
const img4 = "/assets/image/whatsapp.png";
const Footer = () => {
  const [headerdata, setheaderdata] = useState([]);
  const [headerdata1, setheaderdata1] = useState([]);
  const [headerdata2, setheaderdata2] = useState([]);
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
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/global');
      if (response.data.success) {
        setheaderdata1(response.data.data[0]); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData3 = async () => {
    try {
      const response = await axiosInstance.get('/api/social');
      if (response.data.success) {
        setheaderdata2(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData3();
    
  }, []);
  // const renderSocialIcon = (item) => {
  //   switch (item.platform) {
  //     case 'Facebook':
  //       return <img src={img} alt="Facebook" />;
  //     case 'instagram':
  //       return <img src="/path_to_instagram_icon.png" alt="Instagram" />;
  //     case 'twitter':
  //       return <img src="/path_to_twitter_icon.png" alt="Twitter" />;
  //     default:
  //       return null;
  //   }
  // };
  const renderSocialIcon = (item) => {
    switch (item.name.toLowerCase()) {
      case 'facebook':
        return <img src={img} alt="Facebook" className="h-6 w-6" />;
      case 'twitter':
        return<img src={img1} alt="twitter"  className="h-6 w-6" />;
        case 'instragram':
        return<img src={img3} alt="instragram"  className="h-6 w-6" />;
      case 'whatsapp':
        return <img src={img4} alt="whatsapp"  className="h-6 w-6" />;
      default:
        return null;
    }
  };
  return (
    <footer className="w-full  bg-customblue text-white   font-[Montserrat]">
         <div className="container mx-auto md:block hidden w-full h-[150px] relative -translate-y-1/2 bg-customyellow  text-white    items-center">
            <div className="text-white flex  justify-around items-center py-6">
            <div className="font-[700] text-[36px] leading-[50px]">{headerdata.dream_project}</div>
        <Link  href="/contactus"><button className="my-4 bg-white text-customblue px-4 w-44 py-2 rounded hover:bg-customblue hover:text-white ring-customblue ring-1 font-[600] text-[22px] leading-[29px] ">{headerdata.dream_project_button}</button></Link> 
            </div>
       
    </div>
     
      <div className="md:flex justify-between  pb-0 container mb-8 mx-auto md:px-0 px-4 md:py-0 py-5">
      {/* for descriptiion */}
      <div className="grid md:place-content-center">
     <div className="md:flex items-center my-2 justify-center"> 
     <img
    src={axiosInstance.defaults.baseURL + headerdata1.footer} 
     className="h-20 w-20"></img></div>
      <div className="flex md:items-center md:justify-center my-2 mb-4">{headerdata.webpage_slogan}</div>
      <div className="flex md:items-center md:justify-center font-[600] leading-[24px] text-[20px]">Social Media :</div>
      
      <div className="my-2 flex md:items-center md:justify-center gap-x-2">
  {headerdata2.map((item, index) => (
    <div key={index} className="text-[24px] rounded-full">
      
        {item.link && (
          <>

              <Link href={item.link}>
                <div className="bg-white p-1 rounded-full">
                {renderSocialIcon(item)}
                </div>
              </Link>
              </>
            )} 
    </div>
  ))}
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
    
      <div className="flex justify-center items-center border-t-1  border-white py-4">{headerdata1.copyright}</div> 
    </footer>
  );
};

export default Footer