"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "@/app/utils/axiosInstance";
function MaintenanceForm() {
  const [errors, setErrors] = useState({});
  const [headerdata, setheaderdata] = useState([]);
  const [formData, setFormData] = useState({
    firstnam: "",
    lastname: "",
    phone: "",
    subject: "",
    address: "",
    issues: "",
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
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const fetchData1 = async () => {
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
  useEffect(() => {
    fetchData1();
  }, []);

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
            issues: "",
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
          {headerdata.maintenance_title}
        </p>
        <p className="text-[16px] font-[400] text-center py-2 leading-[24px]">
          {headerdata.maintenance_description}
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
                className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-4 ">
            <label className="">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your Adress"
              className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-4 ">
            <label className="">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter your subject"
              className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-4 ">
            <label className="">Issues</label>
            <textarea
              type="text"
              id="message"
              name="issues"
              value={formData.issues}
              onChange={handleInputChange}
              rows="4"
              placeholder="write us about your issues"
              className="block w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="my-6 flex items-center justify-center">
            <button className="ring-1 ring-customblue hover:bg-customblue hover:text-white px-8 rounded py-2 bg-white text-customblue">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </container>
  );
}

export default MaintenanceForm;
