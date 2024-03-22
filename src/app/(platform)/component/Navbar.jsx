"use client"
import React, { useState } from "react";
import Link from "next/link";
const img = "/assets/image/img.jpg";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white w-full fixed top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <img src={img} className="h-12" alt="Logo" />
        </Link>
        <div className="flex gap-x-8 items-center justify-center font-[400] text-[18px] leading-[24px] font-[karla]">
          <Link href="/"><div className="hover:text-blue-500">Home</div></Link>
          <Link href="/about"><div className="hover:text-blue-500">About</div></Link>
          <Link href="/services"><div className="hover:text-blue-500">Service</div></Link>
          <Link href="/gallery"><div className="hover:text-blue-500">Gallery</div></Link>
          <div className="relative" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
            <div className="hover:text-blue-500 cursor-pointer">Design</div>
            {dropdownOpen && (
              <div className="absolute top-full w-52 left-0 bg-white p-4 shadow-2xl rounded ">
                <div><Link href='/design/singlehome'>Single Home</Link></div>
                <div><Link href='/design/doublehome'>Double</Link></div>
                <div><Link href='/design/doubleoccupance'>doubleoccupance</Link></div>
                
              </div>
            )}
          </div>
          <Link href="/contact"><div className="hover:text-blue-500">Contact Us</div></Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;