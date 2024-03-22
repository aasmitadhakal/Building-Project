import React from 'react';
import Link from 'next/link';
const data = [
  {
    "image": "https://s3-alpha-sig.figma.com/img/2543/dc0c/147aae5d1d374548dd2eac88859fe582?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYX51-YC~iNoWIX1uoruPSX-xs4Wofdv1RIiYvk5dAWnrffRKTC8wHt2nOdL80SDOMUTu62X-7HUF7cPvJDY7UughsZCKMadC5OufZ2xEn-zKx6NJOMYKnTJrmBBWF9~k8T3QB3bRwffe~7FxOXP9hX~y9G8U1U6NP-JxJeH1lD2c8jSi6IZUVAXwlb8~-DmjSxnYl7PtyFOVfXuQga~SJ2PMljcuSUzx-gKA-AoksLGs5rYAL6zySoIp1H1zvmmftgzzT0ce35eMQfsjTJwjmGXgfigvO7nNn8opB-7wBfq-YzuZ7gqmF6A5ZM4KMPczDhdaUHyaQg~OU0Vdx80eA__",
    "title": "A FULLY INTEGRATED",
    "introduction": "Build to Last: Your Trusted Construction Partner"
  }
];

function HomeBanner() {
  return (
    <>
      {data.map((card, index) => (
        <div key={index} className="relative w-full h-[700px] font-[Karla]">
          <img
            className="absolute inset-0 w-full h-[700px] object-cover"
            src={card.image}
            alt="Background"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="bg-black bg-opacity-75 p-8 md:w-1/2 md:mx-0 mx-4 rounded-lg text-white text-center">
              <h1 className=" mb-4 md:font-[500] md:text-[24px]  leading-[32px]">{card.title}</h1>
              <p className=" md:font-[800] font-[500] md:text-[40px] text-[35px] leading-[54px] ">{card.introduction}</p>
              <Link href='' className=''><button className='mt-4 md:font-[600] font-[400] md:text-[20px] text-[10px] bg-white px-8 py-2 rounded text-[#4581AC] ring-[#4581AC] ring-2 leading-[22px]'>Contact Us</button></Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeBanner;