"use client"
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "@/app/utils/axiosInstance";
function MaintenanceForm() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstnam: "",
    lastname: "",
    phone: "",
    subject: "",
    address: "",
    issues:"",
  });
  const validateForm = () => {
    const errors = {};
    if (!formData.firstnam.trim()) {
      errors.firstnam = "Name is required";
    }
    if (!formData.lastname.trim()) {
      errors.lastname = "lastname is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "phone number should contain only digits";
    }
    if (!formData.subject.trim()) {
      errors.subject = "subject is required";
    }
    if (!formData.issues.trim()) {
      errors.issues = "issues is required";
    }
    if (!formData.address.trim()) {
      errors.address = "address is required";
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
        const response = await axiosInstance.post("/api/maintenance", formData);
        if (response.data.success) {
          toast.success("Form submitted successfully");
          setFormData({
            firstnam: "",
            lastname: "",
            phone: "",
            subject: "",
            address: "",
            issues:"",
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
    <container className="md:px-0 px-4">
      <div className="mt-20 md:mb-36 container mx-auto md:w-9/12  w-10/12 shadow-md rounded p-4 md:p-8">
        <p className="text-customblue font-[600] text-[24px] leading-[34px] flex items-center justify-center mb-2">
          Maintenance Form
        </p>
        <p className="text-[16px] font-[400] leading-[24px]">
          {" "}
          If you have any issues with maintenance-related matters, please fill
          out the form below. Our team will promptly address your request. Thank
          you for helping us keep our facilities in top condition!
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="grid md:grid-cols-2 gap-x-6">
            <div className="md:mt:0 mt-4 ">
                <label className="">Enter your name</label>
              <input
                type="text"
                id="name"
                name="firstnam"
                value={formData.firstnam}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="  outline-blue appearance-none mt-2 w-full py-2 px-3 text-gray-700 leading-tight border border-[#575757] rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
              />
            </div>
            <div className="mt-4 md:mt:0">
            <label className="">Enter your Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                placeholder="Enter your lastname"
                className=" outline-blue appearance-none mt-2 w-full py-2 px-3 text-gray-700 leading-tight border border-[#575757] rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
              />
            </div>
          </div>
          <div className="mt-4 ">
            <label className="">Enter your phone Number*</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone Number"
                className=" outline-blue appearance-none mt-2 w-full py-2 px-3 text-gray-700 leading-tight border border-[#575757] rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
              />
            </div>
          <div className="mt-4 ">
            <label className="">address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your Adress"
                className=" outline-blue appearance-none mt-2 w-full py-2 px-3 text-gray-700 leading-tight border border-[#575757] rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
              />
            </div>
          
            <div className="mt-4 ">
            <label className="">subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter your subject"
                className=" outline-blue appearance-none mt-2 w-full py-2 px-3 text-gray-700 leading-tight border border-[#575757] rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"
              />
            </div>
            <div className="mt-4 ">
            <label className="">issues</label>
              <input
                type="text"
                id="issues"
                name="issues"
                value={formData.issues}
                onChange={handleInputChange}
                placeholder="write us about your issues"
                className="h-28 outline-blue appearance-none mt-2 w-full py-2 px-3 text-gray-700 leading-tight border border-[#575757] rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none "
              />
            </div>
            <div className="my-6 flex items-center justify-center"><button className="ring-1 ring-customblue px-6 rounded py-1 bg-white text-customblue">Submit</button></div>

        </form>
      </div>
      <ToastContainer />
    </container>
  );
}

export default MaintenanceForm;
