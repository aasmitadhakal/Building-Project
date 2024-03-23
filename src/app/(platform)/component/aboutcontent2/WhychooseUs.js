import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
const data = [
  {
    "heading": "Why To Choose Us?",
    "items": [
      "With 10 years of experience, we bring unparalleled expertise to every project.",
      "Committed to on-time delivery without sacrificing quality.",
      "We offer competitive pricing to provide the best value for your investment.",
      "With 10 years of experience, we bring unparalleled expertise to every project.",
     
      "We offer competitive pricing to provide the best value for your investment.",
      
    ],
    "image": "https://s3-alpha-sig.figma.com/img/645c/eb24/8ee18d31f22f38a345fba88fa905fcbf?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBZZrOCeClEFFNkvG9YywxMonsdMWJP7bfZfojjIuQtJ1jvvLuMFbfgFta5le3YrEPIYMNV6~lMtg7ioXRJApBsQrLsV0gyG9ewsNKkQJmAnT~tSFyrqqJhTUyQsS6EGezTiAzrTaiS0ttx0vfbghefyLzVBYMFMdp7wDZdvdztaP6erXonIU2huq1suKIF2fi729lQmmsVltbj7TCCsofquukOfzXLGZp-LJbGcySP3fg2oRZQH~2wmPu5cGrD-DbCMfR9jFtL1cDJdF6AuOEdbekoOpP1qFKv8gndky8v17f9F85m~NMEsDKMIxMm7kykyt1Qj1id3qT8FA5c29Q__"
  },
];

function WhychooseUs() {
  return (
    <>
      {data.map((item, index) => (
        <div className='bg-white mb-36 ' key={index}>
          <div className='bg-white grid md:grid-cols-2 grid-cols-1 my-12 container mx-auto px-4 text-justify font-[karla]'>
           
            {/* for text part */}
            <div className='flex items-center justify-center text-[16px] font-[400] text-[#37454D]'>
              <div className='h-[205px]w-[781px] bg-white p-6 gap-x-4'>
                <p className='font-[700] text-[32px] font-[Roboto] leading-10 font-montserrat text-blues my-4'>{item.heading}</p>
                <div className='flex items-center text-justify justify-center mt-4 leading-[24px] text-[16px] font-[400] tracking-wide text-[#37454D]'>
                  <ul>
                    {item.items.map((listItem, i) => (
                      <li key={i} className='flex gap-x-2'><FaCircleCheck className='text-yellow ' />{listItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
             {/* for img part */}
             <div className='my-12 flex items-center gap-x-4 justify-center'>
              <img src={item.image} alt='' className=' rounded object-cover h-[279px] w-3/4' />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default WhychooseUs;