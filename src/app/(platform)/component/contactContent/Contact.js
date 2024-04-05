"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { IoLocationOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [bannerdara, setbannerData] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/inquiry", formData);
      if (response.data.success) {
        toast("Form submitted sucesfully ");
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

      {/* for cantact detailas */}
      <div className="mb-24 md:flex container mx-auto  my-8">
        {/* for text part */}

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
            <MdContactPhone className="text-customblue font-[500] mx-2" />{" "}
            {headerdata.site_phone}
          </div>
          <div className="font-[karla] my-1 font-[400] text-[18px] leading-[24px] flex">
            <MdEmail className="mx-2 text-customblue font-[500]" />{" "}
            {headerdata.site_mail}
          </div>
        </div>

        {/* for form */}
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 p-4 font-[Montserrat]">
              {/* for name */}
              <div className="">
                <label className="text-slate-600  font-[400]">
                  Enter your name
                </label>
                <input
                  type="text"
                  name="name"
                  className=" outline-none w-full mt-2 rounded border-gray-300 "
                ></input>
              </div>
              <div className="">
                <label className="text-slate-600 font-[400]">
                  Enter your Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  className="border-b outline-none w-full  mt-2 rounded  border-gray-300"
                ></input>
              </div>

              <div className="">
                <label className="text-slate-600 font-[400]">
                  Enter your Phone No
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-b outline-none w-full  mt-2 rounded  border-gray-300"
                ></input>
              </div>

              <div className="">
                <label className="text-slate-600 font-[400]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
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
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="outline-none  w-full  mt-2  h-24 rounded align-top  border-gray-300"
              />
            </div>
            <div className="mb-12 md:pl-6 pl-4 md:flex gap-x-8">
              <button className="border-customblue px-8 py-2 rounded border-2 text-customblue hover:bg-customblue hover:text-white">
                Submit{" "}
              </button>
              <div className="font-[Montserrat]">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-customblue  border-gray-300"
                  />
                  <span className="ml-2 my-1">
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
