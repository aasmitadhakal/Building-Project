import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

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
    items: [<Link href="/contact">Our Story</Link>,"Address: Pe.Holandia ", "Millennium City,  PH17", "Phone: 023 456 7890", "Email: travel@gmail.com", "Maps: Millennium City, Accra"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <footer className="w-full  bg-blues text-white   font-[Montserrat]">
         <div className="container mx-auto md:block hidden w-full h-[150px] relative -translate-y-1/2 bg-yellow  text-white    items-center">
            <div className="text-white flex  justify-around items-center py-6">
            <div className="font-[700] text-[36px] leading-[50px]">Get your dream project started today!</div>
        <div><button className="my-4 bg-white text-blues px-4 w-44 py-2 rounded hover:bg-blues hover:text-white ring-blues ring-1 font-[600] text-[22px] leading-[29px] ">Contact Us</button></div> 
            </div>
       
    </div>
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-6 gap-4 px-4 py-8">
        

        <div className=" pt-8 my-10  md:pt-2 col-span-2 ">
            <div className=" font-[600] text-[28px] grid place-content-center">
            <img src={img} className='h-20 w-30 ' alt="Logo" />
            </div>
          <p className="grid place-content-center my-2">"We're partners in creating exceptional spaces."</p>
          <div className="grid place-content-center mx-4 sm:w-[300px] gap-x-2 pt-2 text-2xl ">Social Media</div>
          <div className="flex justify-center items-center mx-4 sm:w-[300px] gap-x-2 pt-2 text-2xl">
            {/* <div>Social Media</div> */}
          {items.map((x, index) => {
            return <x.icon key={index} className="" />;
          })}
        </div>
          
        </div>

        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-[Montserrat] text-gray-700 font-[600] leading-[32px] text-[24px] pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1   font-[Montserrat]  font-[400] text-[16px] leading-[25px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center border-t-2 border-white py-2">© Copyright 2024 by @paradisegroup</div>
    </footer>
  );
};

export default Footer