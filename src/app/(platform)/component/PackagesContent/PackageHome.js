"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import { FaLocationDot, FaCar, FaToilet, FaBed } from "react-icons/fa";
import Link from 'next/link';
function PackageHome() {
  const [landPackages, setLandPackages] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/packages')
      .then(response => {
        const filteredData = response.data.data.filter(item => item.package_type === 'HOME');
        setLandPackages(filteredData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <container >
          <div className='container md:px-0 px-4 mx-auto mt-10 text-customblue font-[600] text-[26px] leading-[35px]'>Home & Land Packages for Sale</div>
      <div className="grid md:grid-cols-3 md:px-0 px-4 container mx-auto gap-8 md:mb-8 mb-8 mt-4">
        {landPackages.map(landPackage => (
           <Link href={`/packages/${landPackage.id}`} key={landPackage.location}>
          <div className="shadow-md p-4" key={landPackage.id}>
          {landPackage.packages_images.length > 0 && (
              <img src={axiosInstance.defaults.baseURL + landPackage.packages_images[0].images} alt={landPackage.packages_images[0].name} />
            )}
             <button className='bg-[#FBF2D6] text-black px-4  rounded-lg -translate-y-4 mx-4 font-[400]  text-[16px] leading-[25px]'>For Sale</button>
             {/* <div className='flex items-center   font-[Montserrat] font-[400] text-[#656565] text-[14px] leading-[25px]'>< i class="ri-map-pin-line"></i><FaLocationDot className='text-[#7B493E] mr-2' /><div className=''>{landPackage.location}</div> </div> */}
            <h2>{landPackage.name}</h2>
            <p><strong>Location:</strong> {landPackage.location}</p>
            <p><strong>Price Range:</strong> ${landPackage.price_start} - ${landPackage.price_end}</p>
            <p>{landPackage.description}</p>
            
           
          </div>
          </Link>
        ))}
       
      </div>
    </container>
  );
}

export default PackageHome;