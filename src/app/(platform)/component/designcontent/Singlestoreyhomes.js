"use client"
import React from 'react';
import { FaCar } from "react-icons/fa";
import { FaToilet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { useState,useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import Link from 'next/link';
// import SingleStoreBanner from './SingleStoreBanner';
// const data = [
//     {
//       "title": "ANCHOR283",
//       "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
//       "frontage_size": "2000 sqft",
//       "bedroom": 4,
//       "cars": 2,
//       "bathroom": 3
//     },
//     {
//       "title": "ANCHOR283",
//       "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
//       "frontage_size": "3500 sqft",
//       "bedroom": 5,
//       "cars": 3,
//       "bathroom": 4
//     },
//     {
//       "title": "ANCHOR283",
//       "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
//       "frontage_size": "1800 sqft",
//       "bedroom": 3,
//       "cars": 1,
//       "bathroom": 2
//     }
// ];


// const banneerdata = [
//   {
//     "image": "https://s3-alpha-sig.figma.com/img/ae47/d37b/600dc5f3c92919c0e90c6801d7c04d67?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgqVAmAKPKTHnAl7w1-R2m8RvcYjYUfhKJP7qoE169NCM41XGP46Wh0YTgcAfI1MIOpKBKXtqROgsBnHzx41tnZOPOr5LU5Zjn9QqOX2mB2ImE6WrweZuLbhaokF1IiYIr4aWubY6DIazdRBn06qMD15AisMZY8tK9tio8SU9qZ6H5-3zYZxNkbBFtPkVTco6e3ga3PiZVT9x8CUkm~jZo9~y~qRhMwBRTZBBvm-MM~kV6qofuM2AZNaXPXhzSwaD1IUmKZ1M26p2lgjvM75JP5k0FomYhSbu9Q7vCxMMGfDimYXU1fVqGEFy~SNvGgn8CURDfJMWfdkVqyB8jNa~Q__",
//     "title": "Single Storey Homes",
//     "introduction": "Build to Last: Your Trusted Construction Partner"
//   }
// ];
function Singlestoreyhomes() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/design/s/single');
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
   

    fetchData(); 
  }, []); 

  return (
    <>


{/* for cards */}
     <section className="grid md:grid-cols-3 grid-cols-1 md:px-0 px-4 container mx-auto md:gap-8 mb-36 mt-12 font-[Montserrat]">
      {data.map((property, index) => (
        <Link href={`/design/singlehome/${property.id}`} key={index} className=" shadow-xl p-4 ">

             <h3 className='text-customblue  font-[600] text-[24px] leading-[35px] mx-2'>{property.title}</h3>
          <img src={axiosInstance.defaults.baseURL + property.image} alt={property.title} className='h-[241px] w-full mb-4' />
         
          <p className='text-black  font-[400] text-[16px] leading-[22px] my-1 mx-2 flex'>Frontage Size: {property.frontage}</p>
          <p className='text-black  font-[400] text-[16px] leading-[22px] my-1 flex'><FaBed  className='text-customblue mx-2'/> {property.bedroom}<p className='mx-1'>Bedrooms</p></p>
          <p className='text-black  font-[400] text-[16px] leading-[22px] my-1 flex'> <FaCar className='text-customblue mx-2'/> {property.cars}<p className='mx-1'>Cars</p></p>
          <p className='text-black  font-[400] text-[16px] leading-[22px] my-1 flex '><FaToilet className='text-customblue mx-2' /> {property.bathrooms}<p className='mx-1'>Bathroom</p></p>
        </Link>
      ))}
    </section>
    </>
   
  );
}

export default Singlestoreyhomes;