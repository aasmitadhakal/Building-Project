"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import axiosInstance from "@/app/utils/axiosInstance";
import { IoIosArrowUp } from "react-icons/io";

function Navbar() {
  const [headerdata1, setheaderdata1] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  useEffect(() => {
    fetchData1();
  }, []);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white w-full fixed top-0 z-50 shadow-xl">
      <div className="container mx-auto md:px-0 px-4 flex justify-between items-center py-1">
        <Link href="/">
          <img   src={axiosInstance.defaults.baseURL + headerdata1.logo}  className="h-[78px]" alt="Logo" />
        </Link>
        <div className="hidden  md:flex gap-x-8 items-center justify-center font-[400] text-[18px] leading-[24px] font-[karla]">
          <Link href="/">
            <div className="hover:text-customblue">Home</div>
          </Link>
          <Link href="/about">
            <div className="hover:text-customblue">About</div>
          </Link>
          <Link href="/services">
            <div className="hover:text-customblue">Service</div>
          </Link>
          
          <div
            className="relative"
            onMouseEnter={handleDropdown}
            onMouseLeave={handleDropdown}
          >
            <div className="hover:text-customblue cursor-pointer flex items-center justify-items-center pb-1">Design  
            {/* <IoIosArrowDown  className="ml-1"/> */}
            {dropdownOpen ? (
            <IoIosArrowUp
              className=" cursor-pointer ml-1"
            ></IoIosArrowUp>
          ) : (
            <IoIosArrowDown
              
              className=" cursor-pointer ml-1"
            ></IoIosArrowDown>
          )}
            </div>
            {dropdownOpen && (
              <div className="absolute top-full w-52 left-0  bg-white  border rounded   py-1">
                <div className="  px-2 my-1 mx-1 rounded hover:text-customblue">
                  <Link href="/design/singlehome">Single Storey</Link>
                </div>
                <div className="  px-2 my-1 mx-1 rounded hover:text-customblue">
                  <Link href="/design/doublehome">Double Storey</Link>
                </div>
                <div className="  px-2 my-1 mx-1 rounded hover:text-customblue">
                  <Link href="/design/doubleoccupance">Dual Occupancy</Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/gallery">
            <div className="hover:text-customblue">Gallery</div>
          </Link>
          <Link href="/packages">
            <div className="hover:text-customblue">Packages</div>
          </Link>
          <Link href="/contactus">
            <div className="hover:text-customblue">Contact Us</div>
          </Link>
       
        </div>
        <Link href="/maintenance"><button className="md:block hidden ring-1 rounded text-customblue ring-customblue px-8 py-2 hover:bg-customblue hover:text-white">Maintenance</button></Link>
        {/* for mobile view */}
        <div className="md:hidden ">
          {showMenu ? (
            <MdClose
              onClick={toggleMenu}
              className="text-3xl cursor-pointer"
            ></MdClose>
          ) : (
            <MdMenu
              onClick={toggleMenu}
              className="text-3xl cursor-pointer"
            ></MdMenu>
          )}
        </div>

        
      </div>
     
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 container mx-auto left-0 w-full mt-4 bg-white py-4 px-2"
            style={{ zIndex: 1000 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="hover:text-customblue">
                {" "}
                <Link href="/">Home</Link>
              </div>
              <div className="hover:text-customblue">
                {" "}
                <Link href="/about">About </Link>
              </div>
              <div className="hover:text-customblue">
                {" "}
                <Link href="/services">Service</Link>
              </div>
              <div className="hover:text-customblue">
                {" "}
                <Link href="/gallery">Gallery</Link>
              </div>
              <div
                className="relative"
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
              >
                <div className="hover:text-customblue cursor-pointer flex items-center justify-center">Design <IoIosArrowDown  className="ml-1"/></div>
                {dropdownOpen && (
                  <div className="absolute top-full w-52 left-0 bg-white  p-4 shadow-2xl rounded ">
                     <div className="hover:text-customblue ">
                  <Link href="/design/singlehome">Single Storey</Link>
                </div>
                <div className="hover:text-customblue">
                  <Link href="/design/doublehome">Double Storey</Link>
                </div>
                <div className="hover:text-customblue">
                  <Link href="/design/doubleoccupance">Dual Occupancy</Link>
                </div>
                  </div>
                )}
              </div>
              <Link href="/packages">
            <div className="hover:text-customblue">Packages</div>
          </Link>
              <div className="hover:text-customblue">
                <Link href="/contactus">Contact Us</Link>
              </div>
              <div className="hover:text-customblue">
              <Link href="/maintenance"><button className=" ring-1 rounded text-customblue ring-customblue px-8 py-2 hover:bg-customblue hover:text-white">Maintenance</button></Link>
              </div>
             
              <div className="hover:text-customblue">
              {/* <Link href="/privacy">
         Privacy & Policy
          </Link> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
