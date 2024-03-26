"use client"
import { useState } from "react";

const data1 = [
  {
    "title": "single Storeu",
    "img": "https://s3-alpha-sig.figma.com/img/599e/6cd4/c434bf17bd06739bd22813d7f23784da?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qkm-FJqO5LvHHL8kR0g9jnYWBkwFVB017Rb4kyEyCztgrzdHL~6~frS6Ms95rFpmu~mlWXj9EzKrS~Oele7jkfY6OfjrU~PaVXHUvVxyuU5IvXSutVh3M5IsiBSpUdiUj7Y6Uh4SuS0vmIKUK1~R1950prgO7WAZTCbgT6jfeu2a6MkPyAgYne6QAMtbQCcU4eyP04u9AV19JYkCJOuz2NQcaLrG227ItxKdN23jUX6MF7WqZ7BIDG0HqQCRcCdSUOHwLE8VGpIKimoMXTR8zqm1LQDiX8FPpqPLe59wb0G26VPdIKDK2fjFFoFHENUKf7LPKDWChuufIad4yhaVEg__"
  }
];

const data2 = [
  {
    "title": "single Storeu",
    "img": "https://s3-alpha-sig.figma.com/img/54b2/8a71/0da3a5223ed0d7c0b287309dfa951585?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NcL0nUtwALCsnWtIJgIsH5jUw38O0WdcH6Rgsi6En6mYFQa5mPNVY9ekWEkneHVwPTTpCheJ57oSXUNOIQBJxwBMgITqbTjBpkXwXXpPFtOtZg31MPCUW5a1mybDT7IurHU7CL0Z2YyQTbM3D7OLZ9L6HP4XPU2625bsTGB-H33bseB5mBoZtlgyYm2eIK-kILgdylqpfPmoZkTLmizpI22rNOCq7RVoP2l1Fd3NTCMaWKzzUYPUIlqFMVKJZt2PiM6BUyuq8-PUvImZ3SICLJbf1MnqBPQwuvFzkUXM8e9qvwIJfrQSgyZ-5NiVhAFZqeZBYkg1utVbNk47B-2aPA__"
  }
];

const data3 = [
  {
    "title": "single Storeu",
    "img": "https://s3-alpha-sig.figma.com/img/3fae/3259/8d3c6d4b5a36bffd2220f6895b603139?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CAFjTohvqCelUYFdC3RqN7aL3ACmt-zS22Y0lXi1JRjh--h1jiGBTKgqT8zp6LrK6vTp6cfX7ng0Tq7ZJVs1R8j4KP8PMXPZB-YaX47QVRr7CqFufp7RHuWCF0VETslgwZQKU1dyL7JFiCziFkjnM-YXuvZ0oJTsj2b~zx35ghteOa8cKsKbGMxMdvzfbPZwP9JoHtwP7cFaw4y95QAO3QEUtRaZPVrPPjUMN5QjiMC0PDygunFOVINN~~HTBwtxtDNzNdMYE5pQ-mm9mtgOm0kgeedS7T8suz3BP0tGnFFC3iqwxdUe6T9-LdiIHdjVzowTMPKNxuFFjsaPUNusew__"
  }
];

function HomeDesignPart() {

  return (
    <>
      <div className='bg-gray py-16 font-[karla]'>
        {/* Header */}
        <div className='font-karla'>
          <p className='text-brown md:text-[18px] text-[15px] leading-[24px] font-[400] grid place-content-center'>Design & construction.</p>
          <p className='text-blue md:text-[36px] text-[26px] leading-[49px] md:font-[700] font-[700] my-1 grid place-content-center'>Visit Our Designs</p>
        </div>

        {/* Images */}
        <div className='mx-auto container grid md:grid-cols-3 md:px-0 px-4 gap-4'>
        {data1.map((datas, index) => (
      <div key={index} className="image-container relative">
    <div className="bg-black w-full h-[350px] flex justify-center items-center relative">
      {/* Overlay to darken the image */}
      <div className='w-full h-[350px] absolute inset-0' style={{ backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
      <img src={datas.img} alt='img1' className="object-cover w-full h-[350px]"></img>
    </div>
    {/* Title with improved visibility */}
    <p className="absolute inset-0 flex items-center justify-center text-white text-[24px] leading-[32px] font-[600] z-10">{datas.title}</p>
  </div>
))}
           {data2.map((datas, index) => (
      <div key={index} className="image-container relative">
    <div className="bg-black w-full h-[350px] flex justify-center items-center relative">
      {/* Overlay to darken the image */}
      <div className='w-full h-[350px] absolute inset-0' style={{ backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
      <img src={datas.img} alt='img1' className="object-cover w-full h-[350px]"></img>
    </div>
    {/* Title with improved visibility */}
    <p className="absolute inset-0 flex items-center justify-center text-white text-[24px] leading-[32px] font-[600] z-10">{datas.title}</p>
  </div>
))}
          {data3.map((datas, index) => (
      <div key={index} className="image-container relative">
    <div className="bg-black w-full h-[350px] flex justify-center items-center relative">
      {/* Overlay to darken the image */}
      <div className='w-full h-[350px] absolute inset-0' style={{ backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
      <img src={datas.img} alt='img1' className="object-cover w-full h-[350px]"></img>
    </div>
    {/* Title with improved visibility */}
    <p className="absolute inset-0 flex items-center justify-center text-white text-[24px] leading-[32px] font-[600] z-10">{datas.title}</p>
  </div>
))}
        </div>
      </div>
    </>
  );
}

export default HomeDesignPart;