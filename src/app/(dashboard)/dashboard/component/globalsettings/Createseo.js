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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
      title: "About Us SEO",
      fields: [
        { name: "aboutUsSeoTitle", label: "About Us SEO Title", type: "text", placeholder: "Enter SEO title for about us", required: true },
        {
          name: "aboutUsSeoKeywords",
          label: "About Us SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for about us",
          required: true,
        },
        {
          name: "aboutUsSeoDescription",
          label: "About Us SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for about us",
          required: true,
        },
      ],
    },
    {
      title: "Gallery SEO",
      fields: [
        { name: "gallerySeoTitle", label: "Gallery SEO Title", type: "text", placeholder: "Enter SEO title for gallery", required: true },
        { name: "gallerySeoKeywords", label: "Gallery SEO Keywords", type: "text", placeholder: "Enter SEO keywords for gallery", required: true },
        {
          name: "gallerySeoDescription",
          label: "Gallery SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for gallery",
          required: true,
        },
      ],
    },
    {
      title: "Design SEO",
      fields: [
        { name: "designSeoTitle", label: "Design SEO Title", type: "text", placeholder: "Enter SEO title for design", required: true },
        { name: "designSeoKeywords", label: "Design SEO Keywords", type: "text", placeholder: "Enter SEO keywords for design", required: true },
        {
          name: "designSeoDescription",
          label: "Design SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for design",
          required: true,
        },
      ],
    },
    {
      title: "Contact Us SEO",
      fields: [
        { name: "contactUsSeoTitle", label: "Contact Us SEO Title", type: "text", placeholder: "Enter SEO title for contact us", required: true },
        {
          name: "contactUsSeoKeywords",
          label: "Contact SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for contact Us",
          required: true,
        },
        {
          name: "contactUsSeoDescription",
          label: "Contact Us SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for contact Us",
          required: true,
        },
      ],
    },
    {
      title: "Privacy & Policy SEO",
      fields: [
        { name: "privacy_policySeoTitle", label: "Privacy & Policy SEO Title", type: "text", placeholder: "Enter SEO title for Privacy & Policy", required: true },
        {
          name: "privacy_policySeoKeywords",
          label: "Privacy & Policy SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for Privacy & Policy",
          required: true,
        },
        {
          name: "privacy_policySeoDescription",
          label: "Privacy & Policy SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for Privacy & Policy",
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
