"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
const img = "/assets/image/logo.jpg";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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
          <img src={img} className="h-[78px]" alt="Logo" />
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
          <Link href="/gallery">
            <div className="hover:text-customblue">Gallery</div>
          </Link>
          <div
            className="relative"
            // onMouseEnter={handleDropdown}
            // onMouseLeave={handleDropdown}
          >
            <div onClick={handleDropdown} className="hover:text-customblue cursor-pointer flex items-center justify-items-center ">Design <IoIosArrowDown  onClick={handleDropdown} className="ml-1"/></div>
            {dropdownOpen && (
              <div className="absolute top-full w-52 left-0  bg-customblue mt-8 text-white p-4 shadow-2xl rounded ">
                <div className="hover:text-blues">
                  <Link href="/design/singlehome">Single Home</Link>
                </div>
                <div className="hover:text-blues">
                  <Link href="/design/doublehome">Double</Link>
                </div>
                <div className="hover:text-blues">
                  <Link href="/design/doubleoccupance">doubleoccupance</Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/contactus">
            <div className="hover:text-customblue">Contact Us</div>
          </Link>
          <Link href="/privacy">
            <div className="hover:text-customblue">  Privacy & Policy</div>
          </Link>
        </div>
     
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
                <Link href="/about">About</Link>
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
                  <div className="absolute top-full w-52 left-0 bg-customblue text-white p-4 shadow-2xl rounded ">
                    <div className="hover:bg-customblue hover:text-white">
                      <Link href="/design/singlehome" >Single Home</Link>
                    </div>
                    <div>
                      <Link href="/design/doublehome">Double</Link>
                    </div>
                    <div>
                      <Link href="/design/doubleoccupance">
                        doubleoccupance
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="hover:text-customblue">
                <Link href="/contactus">Contact Us</Link>
              </div>
              <div className="hover:text-customblue">
              <Link href="/privacy">
         Privacy & Policy
          </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
