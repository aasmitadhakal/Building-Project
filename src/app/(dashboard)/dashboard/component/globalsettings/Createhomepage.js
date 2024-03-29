"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";

const CreateHomePage = () => {
  const [formData, setFormData] = useState({
    courseTitle: "",
    countrySectionTitle: "",
    testimonialsSectionTitle: "",
    teamSectionTitle: "",
    faqSectionTitle: "",
    faqSectionDescription: "",
    homepageSeoTitle: "",
    homepageSeoKeywords: "",
    homepageSeoDescription: "",
  });

  const [errors, setErrors] = useState({});

  // Fetch data from server and populate the form fields
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/home/2`);
        const data = response.data.data; // Assuming response.data contains the form data
        console.log(data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/api/home/2`, formData);
      if (response.status === 200) {
        // Update form data with the response data
        setFormData(response.data.data);
        toast("Data saved successfully");
      } else {
        toast("Error updating data");
      }
    } catch (error) {
      console.error("Error updating item:", error);
      toast("Error updating data");
    }
  };

  // Array of input fields
  const inputFields = [
    { name: "clientJourneyTitle", type: "text", placeholder: "Client Journey Title", required: true, label: "Client Journey Title" },
    { name: "clientJourneySubtitle", type: "text", placeholder: "Client Journey Subtitle", required: true, label: "Client Journey Subtitle" },
    { name: "buildingProcessTitle", type: "text", placeholder: "Building Process Title", required: true, label: "Building Process Title" },
    { name: "buildingProcessSubtitle", type: "text", placeholder: "Building Process Subtitle", required: true, label: "Building Process Subtitle" },
    { name: "testimonialsTitle", type: "text", placeholder: "Testimonials Section Title", required: true, label: "Testimonials Section Title" },
    {
      name: "testimonialsSectionSubtitle",
      type: "text",
      placeholder: "Testimonials Section Subtitle",
      required: true,
      label: "Testimonials Section Subtitle",
    },
    { name: "homepageBannerTitle", type: "text", placeholder: "Homepage banner Title", required: true, label: "Homepage banner Title" },
    { name: "faqSectionTitle", type: "text", placeholder: "FAQ Section Title", required: true, label: "FAQ Section Title" },
    { name: "faqSectionSubtitle", type: "text", placeholder: "FAQ Section Subtitle", required: true, label: "FAQ Section Subtitle" },
    { name: "homepageSeoTitle", type: "text", placeholder: "Homepage SEO Title", required: true, label: "Homepage SEO Title" },
    { name: "homepageSeoKeywords", type: "text", placeholder: "Homepage SEO Keywords", required: true, label: "Homepage SEO Keywords" },
  ];

  return (
    <div className=" px-5 rounded-md w-full ">
      <ToastContainer />
      <div>
        <p className="text-2xl font-bold mb-4">Home</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {inputFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.name} className="block text-medium mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}
          <div className="mb-4 col-span-2">
            <label htmlFor="faqSectionDescription" className="block text-medium mb-2">
              FAQ Section Description
            </label>
            <textarea
              name="faqSectionDescription"
              value={formData["faqSectionDescription"]}
              onChange={handleChange}
              placeholder="FAQ Section Description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={6}
            />
            {errors["faqSectionDescription"] && <p className="text-red-500 text-sm">{errors["faqSectionDescription"]}</p>}
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="homepageSeoDescription" className="block text-medium mb-2">
              Homepage SEO Description
            </label>
            <textarea
              name="homepageSeoDescription"
              value={formData["homepageSeoDescription"]}
              onChange={handleChange}
              placeholder="Homepage SEO Description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={6}
            />
            {errors["homepageSeoDescription"] && <p className="text-red-500 text-sm">{errors["homepageSeoDescription"]}</p>}
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHomePage;
