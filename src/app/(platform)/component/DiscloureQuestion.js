"use client";
import { useState ,useEffect} from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
// const data =[
//   {
//     "question": "What is Lorem Ipsum?",
//     "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//   },
//   {
//     "question": "Why do we use it?",
//     "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
//   },
//   {
//     "question": "Why do we use it?",
//     "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
//   },
//   {
//     "question": "Why do we use it?",
//     "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
//   },
// ]
function DiscloureQuestion() {
  
  const [openIndex, setOpenIndex] = useState(null);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/faq');
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
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-customgray py-20 md:px-0 px-4 font-[Montserrat]'>
      <div className='grid place-content-center mb-4 bg-g mt-12'>
        <p className='text-cutombrown text-[18px] leading-[24px] font-[400] grid place-content-center'>know about frequently asked questions to us</p>
        <p className='text-customblue text-[36px] leading-[49px] font-[700] my-1 grid place-content-center'>Frequently Asked Questions</p>
      </div>
      <div className="mx-auto my-12 gap-4 container ">
        {data.map((item, index) => (
          <div key={index} className="mb-4 p-2 rounded-xl shadow-xl gap-4 bg-white">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between w-full  text-black px-4 py-2 rounded-md  font-[400] leading-[24px] text-[18px]"
            >
              <span className='font-[400] leading-[24px] text-[18px]'>{`${index + 1}. ${item.question}`}</span>
              <span className='text-gray-700'>{openIndex === index ? <RxCross2/> : <GoPlus/>}</span>
            </button>
            {openIndex === index && (
              <div className="pl-4  mt-2 rounded-md font-[400] leading-[24px] text-[18px] text-[#6C6C6C]">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DiscloureQuestion;