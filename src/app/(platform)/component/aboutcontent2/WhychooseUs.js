import React from 'react'
const data = [
    {
      "image": "https://s3-alpha-sig.figma.com/img/7e9c/80fe/cf463cf32d4cdc3b9ea163edbcd4d784?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbwZFY90eCqQoYN0WBhzEjEQBmpOvYhEWjxIDHeIWr1UOZ9Pl7rtJ-srdR6q66pT4jjS3fPjnT3eTktwjcw2udItXw4UFvczORhrBRKtl2r3EAgc2izhxOPVEhDoMbKyvm1klOABlUHDkiES7B4nVkBXyDe17OPSHhuqY6NuHizEs8K9PZFuDFFBMppmhcn5abmLM71M7qX9oCHrS26qHbmZqSP3hz4LQQg4OQoBDG682JI7J69zz5WrPcE2xAUpa18nEbpGljzZIF0T1Yi~RDllVpJREHeD~Wut2dzvgPKhuDHnnPk1B6LZcFJXM1qodvuVd~JRtaKu~sLa~YdiXg__",
     "title":"Our Mission and Vision ",
      "description": "To build enduring structures and lasting relationships, delivering excellence in construction while exceeding client expectations. To be the preferred construction partner, recognized for innovation, integrity, and  quality, shaping the skylines and communities of tomorrow."
    }
  ];
function WhychooseUs() {
  return (
    <>
    {data.map((item, index) => (
       <div className='bg-gray'>
     <div key={index} className=' bg-gray grid md:grid-cols-2 grid-cols-1  my-12 container mx-auto px-4 text-justify  font-[karla]'>
        {/* for img part */}
        <div  className=' my-12 flex items-center justify-center'>
         <img src={item.image} alt='' className='2xl:w-screen  rounded object-cover' />
       </div>
       {/* for text part */}
       <div  className='  flex items-center justify-center    text-[16px] font-[400] text-[#37454D] ' >
         <div className='h-[205px]w-[781px] bg-white p-6 shaadow-2xl'>
         <p className=' font-[700] text-[32px] font-[Roboto] leading-10 font-montserrat text-gray-700 my-4'>{item.title}</p>
         <div className='flex items-center text-justify justify-center mt-4 leading-[24px] text-[16px] font-[400] tracking-wide text-[#37454D]'>{item.description}</div>
         </div>
        
         
       </div>
      
     </div>
     </div>
))}
  </>
  )
}

export default WhychooseUs