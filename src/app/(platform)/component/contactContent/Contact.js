"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { IoLocationOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

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
  const [bannerdara, setbannerData] = useState([]);

  const fetchData1 = async () => {
    try {
      const response = await axiosInstance.get("/api/pages/7");
      if (response.data.success) {
        setbannerData(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData1();
  }, []);
  return (
    <>
      {/* forbanner */}

      <div className="relative w-full h-96 font-[Karla]">
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
          src={axiosInstance.defaults.baseURL + bannerdara.image}
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
            {bannerdara.title}
          </h1>
        </div>
      </div>

      {/* for cantact detailas */}
      <div className="mb-2a4 md:flex container mx-auto  my-8">
        {/* for text part */}
        {data.map((card, index) => (
          <div key={index} className="px-6 grid place-content-center">
            <div className="my-1 font-[karla] font-[400] text-[18px] leading-[24px] ">
              {card.title}
            </div>
            <div className="font-[karla] font-[700] text-[38px] leading-[44px] text-customblue my-1">
              {card.introduction}
            </div>
            <div className="font-[karla] font-[400] my-4 text-[18px] leading-[24px]">
              {card.short_description}
            </div>
            <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
              <IoLocationOutline className="text-customblue font-[500] mx-2" />{" "}
              {card.location}
            </div>
            <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
              <MdContactPhone className="text-customblue font-[500] mx-2" />{" "}
              {card.phone}
            </div>
            <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
              <MdEmail className="mx-2 text-customblue font-[500]" />{" "}
              {card.email}
            </div>
          </div>
        ))}

        {/* for form */}
        <div>
          <form>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 p-4 font-[Montserrat]">
              {/* for name */}
              <div className="">
                <label className="text-slate-600  font-[400]">
                  Enter your name
                </label>
                <input
                  type="text"
                  className=" outline-none w-full mt-2 rounded border-gray-300 "
                ></input>
              </div>
              <div className="">
                <label className="text-slate-600 font-[400]">
                  Enter your Email
                </label>
                <input
                  type="email"
                  className="border-b outline-none w-full  mt-2 rounded  border-gray-300"
                ></input>
              </div>

              <div className="">
                <label className="text-slate-600 font-[400]">
                  Enter your Contact No
                </label>
                <input
                  type="text"
                  className="border-b outline-none w-full  mt-2 rounded  border-gray-300"
                ></input>
              </div>

              <div className="">
                <label className="text-slate-600 font-[400]">Subject</label>
                <input
                  type="text"
                  className="border-b outline-none w-full  mt-2 rounded  border-gray-300"
                ></input>
              </div>
            </div>
            <div className=" my-4 px-4 font-[Montserrat]">
              <label className="text-slate-600 font-[400]">
                How can we help you? Feel free to get in touch!
              </label>
              <input
                type="text"
                className="outline-none  w-full  mt-2  h-24 rounded align-top  border-gray-300"
              />
            </div>
            <div className="mb-12 md:pl-6 pl-4 md:flex gap-x-8">
              <button className="border-customblue px-8 py-2 rounded border-2 text-customblue hover:bg-customblue hover:text-white">
                Submit{" "}
              </button>
              <div className="font-[Montserrat]">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio text-customblue  border-gray-300" />
                  <span className="ml-2 my-1">
                    I agree to your privacy policy
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe width="100%" height="600"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sydney+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </>
  );
}

export default Contact;
