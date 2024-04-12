"use client"
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import './index.css'
import { ToastContainer, toast } from "react-toastify";
import { IoPencil } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { HiExclamationCircle } from "react-icons/hi";
import { BiMessageAltEdit } from "react-icons/bi";
function Contact() {
  const [bannerdara, setbannerData] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/settings");
      if (response.data.success) {
        setheaderdata(response.data.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
    fetchData();
    fetchData1();
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone number should contain only digits";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length > 0) {
      // If there are errors, show them using Toastify
      Object.values(errors).forEach(error => {
        toast.error(error);
      });
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axiosInstance.post("/api/inquiry", formData);
        if (response.data.success) {
          toast.success("Form submitted successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } else {
          console.error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      <div className=' md:px-0 px-4 bg-gray-200 py-4 text-customblue text-[17px] font-[Karla] leading-[25px]'>
        <div className='container mx-auto flex items-center gap-x-1'>
          <Link href='/'>Home</Link>
          <IoIosArrowForward />
          <p>Contact Us</p>
        </div>
      </div>
      {/* for contact details */}
      <div className=" md:flex container mx-auto  my-8">
        <div className="px-6 grid place-content-center">
          <div className="my-1 font-[karla] font-[400] text-[18px] leading-[24px] ">
            {headerdata.contactus_title}
          </div>
          <div className="font-[karla] font-[700] text-[38px] leading-[44px] text-customblue my-1">
            {headerdata.contactus_section_title}
          </div>
          <div className="font-[karla] font-[400] my-4 text-[18px] leading-[24px]">
            {headerdata.contactus_description}
          </div>
          <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <IoLocationOutline className="text-customblue font-[500] mx-2" />{" "}
            {headerdata.site_location}
          </div>
          <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <MdOutlinePhone className="text-customblue font-[500] mx-2" />{" "}
            {headerdata.site_phone}
          </div>
          <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <MdEmail className="mx-2 text-customblue font-[500]" />{" "}
            {headerdata.site_mail}
          </div>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 p-4 font-[Montserrat]">
              {/* for name */}
              <div className="relative font-[400] my-2 text-[16px] leading-[25px] border-b border-gray-400">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:border-customblue focus:ring-0 focus:border-b w-full mr-8 pr-8 text-[#656565] leading-tight border-none py-2 pl-10"
                  placeholder="Enter your Name"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoPeopleOutline />
                </div>
              </div>
              {/* for email */}
              <div className="relative font-[400]  my-2 text-[16px] leading-[25px] border-b border-gray-400">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:ring-0 focus:shadow-outline focus:border-blue-300 focus:border-none bg-transparent w-full mr-8 pr-8 text-[#656565] leading-tight border-none py-2 pl-10"
                  placeholder="Enter your Email"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AiOutlineMail />
                </div>
              </div>
              {/* for phone */}
              <div className="relative  my-2 font-[400] text-[16px] leading-[25px] border-b border-gray-400">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:ring-0 focus:border-gray-100 focus:border-none bg-transparent w-full mr-8 pr-8 text-[#656565] leading-tight border-none py-2 pl-10"
                  placeholder="Enter your Phone No"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlinePhone />
                </div>
              </div>
              {/* for subject */}
              <div className="relative  my-2 font-[400] text-[16px] leading-[25px] border-b border-gray-400">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:ring-0 focus:border-gray-100 focus:border-none bg-transparent w-full mr-8 pr-8 text-[#656565] leading-tight border-none py-2 pl-10"
                  placeholder="Enter your Subject"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BiMessageAltEdit />
                </div>
              </div>
             
            </div>
             {/* for message */}
             <div className=" font-[400]  my-2 text-[16px] leading-[25px] border-b mb-8 mt-4 border-gray-400  mx-4">
              <div className="flex items-center text-[#656565] "> <IoPencil  className="mx-2"/><label>How can we help you? Feel free to get in touch!</label></div>  
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:border-gray-100 focus:border-none  bg-transparent w-full mr-8 pr-8 text-[#656565] leading-tight border-none py-2 pl-10"
          
                />
                
              </div>
            <div className="mb-12 md:pl-6 pl-4 md:flex gap-x-8">
              <button className="border-customblue px-8 py-2 rounded border-2 text-customblue hover:bg-customblue hover:text-white">
                Submit
              </button>
              <div className="font-[Montserrat]">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-customblue  border-gray-300"
                  />
                  <span className="ml-2 my-1 ">
                    I agree to your privacy policy
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sydney+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <ToastContainer />
    </>
  );
}

export default Contact;