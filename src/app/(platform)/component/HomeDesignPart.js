"use client"
import { useState } from "react";

const data1 = [
  {
    "title": "single Storeu",
    "img": "https://s3-alpha-sig.figma.com/img/599e/6cd4/c434bf17bd06739bd22813d7f23784da?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRwJpFP-oSHCiWyCyZ1TItFEY2hfmqvhT5E~r75DvyrwnUfLnLQDzxKyckQQtW93BOxLuQMc4RmQSQ1WfAP7XGv8DkzofmDxXgThpZBg0qwyCq64IkNvWGEsw8gKOEHO-b4xcrLnHNnZ4G78IGAi0W0A5kS06poJ4fxpdBZ-oxgKmBin4B4gulyROZO6voHxqewlfyK-UWzdhTOvAMRQ8OJKjEdDxZ4mUQK36fhD68kZLoAu5S2G0HxG5qGF8NNRHNaJsSwJ~iSwKvJpaLe5SOGhJ3zQ9r~cRNNspjGFD24rRbIxEuoUrmbUH3aAYCn29brV~mhmn0LDfwrLTnzwmw__"
  }
];

const data2 = [
  {
    "title": "single Storeu",
    "img": "https://s3-alpha-sig.figma.com/img/599e/6cd4/c434bf17bd06739bd22813d7f23784da?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRwJpFP-oSHCiWyCyZ1TItFEY2hfmqvhT5E~r75DvyrwnUfLnLQDzxKyckQQtW93BOxLuQMc4RmQSQ1WfAP7XGv8DkzofmDxXgThpZBg0qwyCq64IkNvWGEsw8gKOEHO-b4xcrLnHNnZ4G78IGAi0W0A5kS06poJ4fxpdBZ-oxgKmBin4B4gulyROZO6voHxqewlfyK-UWzdhTOvAMRQ8OJKjEdDxZ4mUQK36fhD68kZLoAu5S2G0HxG5qGF8NNRHNaJsSwJ~iSwKvJpaLe5SOGhJ3zQ9r~cRNNspjGFD24rRbIxEuoUrmbUH3aAYCn29brV~mhmn0LDfwrLTnzwmw__"
  }
];

const data3 = [
  {
    "title": "single Storeu",
    "img": "https://s3-alpha-sig.figma.com/img/599e/6cd4/c434bf17bd06739bd22813d7f23784da?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRwJpFP-oSHCiWyCyZ1TItFEY2hfmqvhT5E~r75DvyrwnUfLnLQDzxKyckQQtW93BOxLuQMc4RmQSQ1WfAP7XGv8DkzofmDxXgThpZBg0qwyCq64IkNvWGEsw8gKOEHO-b4xcrLnHNnZ4G78IGAi0W0A5kS06poJ4fxpdBZ-oxgKmBin4B4gulyROZO6voHxqewlfyK-UWzdhTOvAMRQ8OJKjEdDxZ4mUQK36fhD68kZLoAu5S2G0HxG5qGF8NNRHNaJsSwJ~iSwKvJpaLe5SOGhJ3zQ9r~cRNNspjGFD24rRbIxEuoUrmbUH3aAYCn29brV~mhmn0LDfwrLTnzwmw__"
  }
];

function HomeDesignPart() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <>
      <div className='bg-customgray py-16 font-[karla]'>
        {/* Header */}
        <div className='font-karla'>
          <p className='text-brown md:text-[18px] text-[15px] leading-[24px] font-[400] grid place-content-center'>Design & construction.</p>
          <p className='text-customblue md:text-[36px] text-[26px] leading-[49px] md:font-[700] font-[700] my-1 grid place-content-center'>Visit Our Designs</p>
        </div>

        {/* Images */}
        <div className='mx-auto container grid md:grid-cols-3 md:px-0 px-4 gap-4'>
        {data1.map((datas, index) => (
    <div key={index} 
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(-1)}
    className="image-container relative">
      <div className="bg-black w-full h-[350px] flex justify-center items-center relative">
        {/* Overlay to darken the image */}
        <div className='w-full h-[350px] absolute inset-0' style={{ backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
        <img 
          src={datas.img}
          style={{
            transform: hoveredIndex === index ? 'translateX(10px)' : 'translateX(0)',
            transition: 'transform 0.3s ease-in-out'
          }}
          alt='img1' 
          className="object-cover w-full h-[350px] hover:translate-x-2 transition-transform ease-in duration-300"
/>
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