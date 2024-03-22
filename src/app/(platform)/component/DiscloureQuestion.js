"use client";
import { useState } from 'react';
const data =[
  {
    "question": "What is Lorem Ipsum?",
    "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    "question": "Why do we use it?",
    "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    "question": "Why do we use it?",
    "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    "question": "Why do we use it?",
    "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
]
function DiscloureQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-gray py-20 md:px-0 px-4'>
    <div className='grid place-content-center mb-4 bg-g mt-12'>
            <p className='text-brown text-[18px] leading-[24px] font-[400] grid place-content-center'>know about frequently asked questions to us</p>
          <p className='text-blue text-[36px] leading-[49px] font-[700] my-1 grid place-content-center'>Frequently Asked Questions</p>
            </div>
    <div className=" mx-auto my-12 gap-4 container ">
    {data.map((item, index) => (
      <div key={index} className="mb-4 p-2 rounded-xl shadow-xl gap-4 bg-white">
        <button
          onClick={() => toggleAnswer(index)}
          className="flex justify-between w-full bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 font-[400] leading-[24px] text-[18px]"
        >
          <span className='font-[400] leading-[24px] text-[18px]'>{item.question}</span>
          <span>{openIndex === index ? '-' : '+'}</span>
        </button>
        {openIndex === index && (
          <div className="bg-gray-100 p-4 mt-2 rounded-md font-[400] leading-[24px] text-[18px] text-[#6C6C6C]">{item.answer}</div>
        )}
      </div>
    ))}
  </div>
  </div>
  )
}

export default DiscloureQuestion