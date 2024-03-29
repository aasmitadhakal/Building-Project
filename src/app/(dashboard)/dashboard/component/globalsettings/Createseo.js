"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const CreateSeo = () => {
  const [formData, setFormData] = useState({
    countriesSeoTitle: "",
    countriesSeoKeywords: "",
    countriesSeoDescription: "",
    coursesSeoTitle: "",
    coursesSeoKeywords: "",
    coursesSeoDescription: "",
    servicesSeoTitle: "",
    servicesSeoKeywords: "",
    servicesSeoDescription: "",
    blogsSeoTitle: "",
    blogsSeoKeywords: "",
    blogsSeoDescription: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    // Add validation logic here if needed
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Handle form submission
        const response = await axios.post("/api/create", formData);
      } catch (error) {
        console.error("Error creating item:", error);
      }
    }
  };

  // Define an array of sections with their input fields
  const formSections = [
    {
      title: "Countries SEO",
      fields: [
        { name: "countriesSeoTitle", label: "Countries SEO Title", type: "text", placeholder: "Enter SEO title for countries", required: true },
        {
          name: "countriesSeoKeywords",
          label: "Countries SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for countries",
          required: true,
        },
        {
          name: "countriesSeoDescription",
          label: "Countries SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for countries",
          required: true,
        },
      ],
    },
    {
      title: "Courses SEO",
      fields: [
        { name: "coursesSeoTitle", label: "Courses SEO Title", type: "text", placeholder: "Enter SEO title for courses", required: true },
        { name: "coursesSeoKeywords", label: "Courses SEO Keywords", type: "text", placeholder: "Enter SEO keywords for courses", required: true },
        {
          name: "coursesSeoDescription",
          label: "Courses SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for courses",
          required: true,
        },
      ],
    },
    {
      title: "Services SEO",
      fields: [
        { name: "servicesSeoTitle", label: "Services SEO Title", type: "text", placeholder: "Enter SEO title for services", required: true },
        { name: "servicesSeoKeywords", label: "Services SEO Keywords", type: "text", placeholder: "Enter SEO keywords for services", required: true },
        {
          name: "servicesSeoDescription",
          label: "Services SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for services",
          required: true,
        },
      ],
    },
    {
      title: "Blogs SEO",
      fields: [
        { name: "blogsSeoTitle", label: "Blogs SEO Title", type: "text", placeholder: "Enter SEO title for blogs", required: true },
        { name: "blogsSeoKeywords", label: "Blogs SEO Keywords", type: "text", placeholder: "Enter SEO keywords for blogs", required: true },
        {
          name: "blogsSeoDescription",
          label: "Blogs SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for blogs",
          required: true,
        },
      ],
    },
  ];

  return (
    <div className="rounded-md w-full ">
      <div>
        <p className="text-2xl font-bold mb-4">SEO Settings</p>
        <form onSubmit={handleSubmit}>
          {formSections.map((section, index) => (
            <fieldset key={index} className="mb-6 border p-4 rounded">
              <legend className="text-lg font-semibold">{section.title}</legend>
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex} className="mb-2">
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      rows={4}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </fieldset>
          ))}

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSeo;
