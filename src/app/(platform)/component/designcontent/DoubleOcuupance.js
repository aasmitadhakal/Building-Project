"use client"
import { FaCar } from "react-icons/fa";
import { FaToilet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { useState,useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
// const data = [
//   {
//     title: "ANCHOR283",
//     img1: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
//     img2: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
//     title1:"First Floor",
//     title2:"Ground Floor",
//     frontage_size: "2000 sqft",
//     bedroom: 4,
//     cars: 2,
//     bathroom: 3,
//   },
//   {
//     title: "ANCHOR283",
//     img1: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
//     img2: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
//     title1:"First Floor",
//     title2:"Ground Floor",
//     frontage_size: "2000 sqft",
//     bedroom: 4,
//     cars: 2,
//     bathroom: 3,
//   },
// ];
function DoubleOcuupance() {
  const [data, setData] = useState([]);
  const [bannerdata, setbannerData] = useState([]);
 
  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get('/api/pages/11');
      if (response.data.success) {
        setbannerData(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/design/s/dual');
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
    fetchData(); 
  }, []); 

  return (
    <>
      {/* forbanner */}
      
        <div  className="relative w-full h-96 font-[Karla]">
          <div
            className="w-full h-96"
            style={{
              position: "absolute",
              backgroundColor: "#051721",
              opacity: "0.7",
              zIndex: "1",
            }}
          ></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={axiosInstance.defaults.baseURL + bannerdata.image}
            alt="Background"
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              width: "100%",
              zIndex: "2",
            }}
          >
            <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">
              {bannerdata.title}
            </h1>
          </div>
        </div>
        <div className=' md:px-0 px-4 bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] leading-[25px]'>
          <div className='container mx-auto flex items-center gap-x-2'>
          <Link href='/'>Home</Link>
         <IoIosArrowForward />
         <p>Design</p>
         <IoIosArrowForward />
         <p>Dual Occupancy Houses</p>
          </div>
        
        </div>
    
      {/* for cards */}
      <div className="grid place-content-center grid-cols-1 md:px-0 px-4 container mx-auto md:gap-8 mb-36 mt-24">
        {data.map((property, index) => (
          <div key={index} className=" shadow-xl p-4  ">
            <h3 className="text-customblue  font-[Monstserrat] font-[600] text-[24px] leading-[35px] mx-2">
              {property.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
            <div>
              <img
                src={axiosInstance.defaults.baseURL + property.image}
                alt={property.title}
                className="h-[177px] w-[418px] mb-4"
              />
              <p className="text-cutombrown md:text-[18px] pl-4 text-[10px]  leading-[24px] font-[400]">First Floor</p>
            </div>
            <div>
              <img
              src={axiosInstance.defaults.baseURL + property.other_image}
                alt={property.title}
                className="h-[177px] w-[418px] mb-4"
              />
               <p className="text-cutombrown md:text-[18px] pl-4 text-[10px]  leading-[24px] font-[400]">Ground Floor</p>
            </div>

            <div className="my-4 font-[Montserrat]">
              <p className="text-black font-[400] text-[16px] leading-[22px] my-2 mx-2 flex">
                Frontage Size: {property.frontage_size}
              </p>
              <p className="text-black font-[400] text-[16px] leading-[22px] my-2 flex">
                <FaBed className="text-customblue  mx-2" /> {property.bedroom}<p className="mx-1">Bedrooms</p>
              </p>
              <p className="text-black font-[400] text-[16px] leading-[22px] my-2 flex">
                {" "}
                <FaCar className="text-customblue  mx-2" /> {property.cars}<p className="mx-1">Cars</p>
              </p>
              <p className="text-black font-[400] text-[16px] leading-[22px] my-2 flex">
                <FaToilet className="text-customblue  mx-2" /> {property.bathrooms}
                <p className="mx-1">Bathroom</p>
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default DoubleOcuupance