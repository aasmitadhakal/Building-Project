import Link from 'next/link';
import React from 'react'
const data = [
    {
      "image": "https://s3-alpha-sig.figma.com/img/7e9c/80fe/cf463cf32d4cdc3b9ea163edbcd4d784?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbwZFY90eCqQoYN0WBhzEjEQBmpOvYhEWjxIDHeIWr1UOZ9Pl7rtJ-srdR6q66pT4jjS3fPjnT3eTktwjcw2udItXw4UFvczORhrBRKtl2r3EAgc2izhxOPVEhDoMbKyvm1klOABlUHDkiES7B4nVkBXyDe17OPSHhuqY6NuHizEs8K9PZFuDFFBMppmhcn5abmLM71M7qX9oCHrS26qHbmZqSP3hz4LQQg4OQoBDG682JI7J69zz5WrPcE2xAUpa18nEbpGljzZIF0T1Yi~RDllVpJREHeD~Wut2dzvgPKhuDHnnPk1B6LZcFJXM1qodvuVd~JRtaKu~sLa~YdiXg__",
      "title": "About Us",
      "introduction": "Build to Last: Your Trusted Construction Partner"
    }
  ];
function AboutBanner() {
  return (
    <>
      
        {data.map((card, index) => (
        <div key={index} className="relative w-full h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{card.title}</h1>
            
           
          </div>
        </div>
      ))}
    </>
  )
}

export default AboutBanner