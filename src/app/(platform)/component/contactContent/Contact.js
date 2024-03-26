import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const banneerdata = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/2543/dc0c/147aae5d1d374548dd2eac88859fe582?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYX51-YC~iNoWIX1uoruPSX-xs4Wofdv1RIiYvk5dAWnrffRKTC8wHt2nOdL80SDOMUTu62X-7HUF7cPvJDY7UughsZCKMadC5OufZ2xEn-zKx6NJOMYKnTJrmBBWF9~k8T3QB3bRwffe~7FxOXP9hX~y9G8U1U6NP-JxJeH1lD2c8jSi6IZUVAXwlb8~-DmjSxnYl7PtyFOVfXuQga~SJ2PMljcuSUzx-gKA-AoksLGs5rYAL6zySoIp1H1zvmmftgzzT0ce35eMQfsjTJwjmGXgfigvO7nNn8opB-7wBfq-YzuZ7gqmF6A5ZM4KMPczDhdaUHyaQg~OU0Vdx80eA__",
    title: "Contact Us",
    introduction: "Build to Last: Your Trusted Construction Partner",
  },
];

const data = [
  {
    title: "Contact Us",
    introduction: "Have Questions? Get in Touch",
    short_description:
      "Get in touch with us for any questions, feedback, or support you may need.",
    location: "123 Main Street, Cityville, State, Zip",
    phone: "+1234567890",
    email: "contact@example.com",
  },
];

function Contact() {
  return (
    <>
      {/* forbanner */}
      {banneerdata.map((card, index) => (
        <div key={index} className="relative w-full h-96 font-[Karla]">
          <div
            className="w-full h-96"
            style={{
              position: "absolute",
              backgroundColor: "#051721",
              opacity: "0.7",
              zIndex: "1",
            }}
          ></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              width: "100%",
              zIndex: "2",
            }}
          >
            <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">
              {card.title}
            </h1>
          </div>
        </div>
      ))}

      {/* for cantact detailas */}
      <div className="mb-44 md:flex container mx-auto  my-8">
        {/* for text part */}
        {data.map((card, index) => (
          <div key={index} className="px-6 grid place-content-center">
            <div className="my-1 font-[karla] font-[400] text-[18px] leading-[24px] ">
              {card.title}
            </div>
            <div className="font-[karla] font-[700] text-[38px] leading-[44px] text-blues my-1">
              {card.introduction}
            </div>
            <div className="font-[karla] font-[400] my-4 text-[18px] leading-[24px]">
              {card.short_description}
            </div>
            <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <IoLocationOutline className="text-blues font-[500] mx-2"  /> {card.location}
            </div>
            <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <MdContactPhone className="text-blues font-[500] mx-2" /> {card.phone}
            </div>
            <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <MdEmail  className="mx-2 text-blues font-[500]"/> {card.email}
            </div>
          </div>
        ))}

        {/* for form */}
        <div>
          <form>
          
           <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 p-4 font-[Montserrat]">
              {/* for name */}
            <div className="">
                <label className="text-slate-600 font-[400]">Enter your name</label>
                <input type='text'
                
                className=" outline-none w-full rounded ">
                    
                </input>

            </div>
            <div className="">
            <label className="text-slate-600 font-[400]">Enter your Email</label>
                <input type='email'
               
                className="border-b outline-none w-full rounded">
                    
                </input>

            </div>

            <div className="">
            <label className="text-slate-600 font-[400]">Enter your Contact No</label>
                <input type='number'
                
                className="border-b outline-none w-full rounded">
                    
                </input>

            </div>

            <div className="">
            <label className="text-slate-600 font-[400]">Subject</label>
                <input type='text'
              
                className="border-b outline-none w-full rounded">
                    
                </input>

            </div>


           </div>
           <div className=" my-6 px-4 font-[Montserrat]">
           <label className="text-slate-600 font-[400]">How can we help you? Feel free to get in touch!</label>
  <input
    type="text"
    
    className="outline-none  w-full  h-44 rounded align-top "
  />
</div>
<div className="mb-12 md:pl-6 pl-4 md:flex gap-x-8">
    <button className="border-blues px-8 py-2 rounded border-2 text-blues">Submit </button>
    <div className="font-[Montserrat]">
  <label className="inline-flex items-center">
    <input type="radio" className="form-radio text-blues" />
    <span className="ml-2 my-1">I agree to your privacy policy</span>
  </label>
</div>
</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;