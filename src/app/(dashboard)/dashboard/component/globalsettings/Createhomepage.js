"use client";
import React, { useState } from "react";
import axios from "axios";

const CreateHomePage = () => {
  const [formData, setFormData] = useState({
    courseTitle: "",
    countrySectionTitle: "",
    blog: "",

    testimonialsSectionTitle: "",
    teamSectionTitle: "",
    faqSectionTitle: "",
    faqSectionDescription: "",
    homepageSeoTitle: "",
    homepageSeoKeywords: "",
    homepageSeoDescription: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.courseTitle) {
      errors.courseTitle = "Course Title is required";
    }
    // Add validation for other fields if needed

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/api/create", formData);
        // Handle success or show a message to the user
      } catch (error) {
        console.error("Error creating item:", error);
        // Handle error or show an error message to the user
      }
    }
  };

  // Array of input fields
  const inputFields = [
    { name: "courseTitle", type: "text", placeholder: "Course Section Title", required: true, label: "Course Section Title" },
    { name: "countrySectionTitle", type: "text", placeholder: "Country Section Title", required: true, label: "Country Section Title" },
    { name: "blog", type: "text", placeholder: "Blog Section Title", required: true, label: "Blog Section Title" },

    {
      name: "testimonialsSectionTitle",
      type: "text",
      placeholder: "Testimonials Section Title",
      required: true,
      label: "Testimonials Section Title",
    },
    { name: "teamSectionTitle", type: "text", placeholder: "Team Section Title", required: true, label: "Team Section Title" },
    { name: "faqSectionTitle", type: "text", placeholder: "FAQ Section Title", required: true, label: "FAQ Section Title" },
    { name: "homepageSeoTitle", type: "text", placeholder: "Homepage SEO Title", required: true, label: "Homepage SEO Title" },
    { name: "homepageSeoKeywords", type: "text", placeholder: "Homepage SEO Keywords", required: true, label: "Homepage SEO Keywords" },
  ];

  return (
    <div className=" px-5 rounded-md w-full ">
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
