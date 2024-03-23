import React from 'react';
import { FaCar } from "react-icons/fa";
import { FaToilet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
const data = [
    {
      "title": "ANCHOR283",
      "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
      "frontage_size": "2000 sqft",
      "bedroom": 4,
      "cars": 2,
      "bathroom": 3
    },
    {
      "title": "ANCHOR283",
      "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
      "frontage_size": "3500 sqft",
      "bedroom": 5,
      "cars": 3,
      "bathroom": 4
    },
    {
      "title": "ANCHOR283",
      "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
      "frontage_size": "1800 sqft",
      "bedroom": 3,
      "cars": 1,
      "bathroom": 2
    }
];
const banneerdata = [
  {
    "image": "https://s3-alpha-sig.figma.com/img/2543/dc0c/147aae5d1d374548dd2eac88859fe582?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYX51-YC~iNoWIX1uoruPSX-xs4Wofdv1RIiYvk5dAWnrffRKTC8wHt2nOdL80SDOMUTu62X-7HUF7cPvJDY7UughsZCKMadC5OufZ2xEn-zKx6NJOMYKnTJrmBBWF9~k8T3QB3bRwffe~7FxOXP9hX~y9G8U1U6NP-JxJeH1lD2c8jSi6IZUVAXwlb8~-DmjSxnYl7PtyFOVfXuQga~SJ2PMljcuSUzx-gKA-AoksLGs5rYAL6zySoIp1H1zvmmftgzzT0ce35eMQfsjTJwjmGXgfigvO7nNn8opB-7wBfq-YzuZ7gqmF6A5ZM4KMPczDhdaUHyaQg~OU0Vdx80eA__",
    "title": "Single Storey Homes",
    "introduction": "Build to Last: Your Trusted Construction Partner"
  }
];
function Singlestoreyhomes() {
  return (
    <>
{/* forbanner */}
{banneerdata.map((card, index) => (
        <div key={index} className="relative w-full h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 md:font-[500] md:text-[44px] text-white leading-[32px]">{card.title}</h1>
            
           
          </div>
        </div>
      ))}
{/* for cards */}
     <div className="grid md:grid-cols-3 grid-cols-1 md:px-0 px-4 container mx-auto md:gap-8 mb-36 mt-24">
      {data.map((property, index) => (
        <div key={index} className=" shadow-xl p-4 ">
             <h3 className='text-blues font-[Monstserrat] font-[600] text-[24px] leading-[35px] mx-2'>{property.title}</h3>
          <img src={property.img} alt={property.title} className='h-[241px] w-full mb-4' />
         
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 mx-2 flex'>Frontage Size: {property.frontage_size}</p>
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 flex'><FaBed  className='text-blues mx-2'/> {property.bedroom}Bedrooms</p>
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 flex'> <FaCar className='text-blues mx-2'/> {property.cars}Cars</p>
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 flex'><FaToilet className='text-blues mx-2' /> {property.bathroom}Bathrooms</p>
        </div>
      ))}
    </div>
    </>
   
  );
}

export default Singlestoreyhomes;