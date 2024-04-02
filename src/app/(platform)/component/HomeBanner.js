import React from 'react';
import Link from 'next/link';
const data = [
  {
    "image": "https://s3-alpha-sig.figma.com/img/2543/dc0c/147aae5d1d374548dd2eac88859fe582?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zoj3Ra-ZZzGlHhmJGYYv7daT8ncUJyDkcJ-D0oEtTGydu53PFXrckjEwYTpfwJ~zDKJMooHxXOJvsKj2eGVQSKmlDyiJ6gBFldGTu-Hu8m1Ji-V3bE6Rp-xtsGLfypBNlcecV5MfUuoIqBKz36d-WMjk3-E7RHHWF43Lhv8fId75Ix0wq7TrbKi5NiRPTM23IuNoHwvgzxSEzk77UOEwSB6as5Qb3MmspAU3CSXTmsHDWe5IWTKuK~50eGoX5lF7Nt~b9OMMLIDAPhi2F1h5CnfWIf7nOqoaedD-V39jb6GgDqaN6ucq5fpB1N5qET-wqY8bc2YshzBHcyvXgT5cEw__",
    "title": "A FULLY INTEGRATED",
    "introduction": "Build to Last: Your Trusted Construction Partner"
  }
];

function HomeBanner() {
  return (
    <>
      {data.map((card, index) => (
        <div key={index} className="relative w-full h-[700px] font-[Karla] mt-20">
          <img
            className="absolute inset-0 w-full h-[700px] object-cover"
            src={card.image}
            alt="Background"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="bg-black bg-opacity-75 p-8 md:w-1/2 md:mx-0 mx-4 rounded-lg text-white text-center">
              <h1 className=" mb-4 md:font-[500] md:text-[24px]  leading-[32px]">{card.title}</h1>
              <p className=" md:font-[800] font-[500] md:text-[40px] text-[35px] leading-[54px] ">{card.introduction}</p>
              <Link href='' className=''><button className='mt-4 md:font-[600] font-[400] md:text-[20px] text-[10px] bg-white hover:bg-[#4581AC] px-8 py-2 rounded text-[#4581AC] ring-[#4581AC] hover:bg-blues hover:text-white ring-2 leading-[22px]'>Contact Us</button></Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeBanner;