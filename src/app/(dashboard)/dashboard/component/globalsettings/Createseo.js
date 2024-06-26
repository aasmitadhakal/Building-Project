"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const CreateSeo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    seo_aboutus_title: "",
    seo_aboutus_keywords: "",
    seo_aboutus_description: "",
    seo_gallery_title: "",
    seo_gallery_keywords: "",
    seo_gallery_description: "",
    seo_design_title: "",
    seo_design_keywords: "",
    seo_design_description: "",
    seo_contactus_title: "",
    seo_contactus_keywords: "",
    seo_contactus_description: "",
    seo_privacy_title: "",
    seo_privacy_keywords: "",
    seo_privacy_description: "",
  });
  const [errorFields, setErrorFields] = useState({}); // State to keep track of error fields

  // Fetch data from server and populate the form fields
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/settings`);
      const responseData = response.data.data.data; // Extracting data from response
      setFormData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If input passes validations, update the form data
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field when user starts typing again
    setErrorFields({ ...errorFields, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for each input field
    const isFormValid = Object.entries(formData).every(([name, value]) => {
      const isValid = value && isNaN(value);
      if (!isValid) {
        setErrorFields((prevErrors) => ({ ...prevErrors, [name]: true }));
      }
      return isValid;
    });

    if (!isFormValid) {
      toast.error("Please fill all fields with valid data");
      return;
    }

    try {
      const response = await axiosInstance.put(`/api/settings/u/${formData}`, formData);
      if (response.status === 200) {
        toast.success("Data saved successfully");
      } else {
        toast.error("Error updating data");
      }
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Error updating data");
    }
  };

  // Apply red border style if error field is true
  const getInputClassName = (name) => {
    return `block w-full px-4 py-2 border rounded-md focus:outline-none ${
      errorFields[name] ? "border-red-500" : "border-gray-200 focus:border-blue-500"
    }`;
  };

  // Define an array of sections with their input fields
  const formSections = [
    {
      title: "About Us SEO",
      fields: [
        { name: "seo_aboutus_title", label: "About Us SEO Title", type: "text", placeholder: "Enter SEO title for about us", required: true },
        {
          name: "seo_aboutus_keywords",
          label: "About Us SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for about us",
          required: true,
        },
        {
          name: "seo_aboutus_description",
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
        { name: "seo_gallery_title", label: "Gallery SEO Title", type: "text", placeholder: "Enter SEO title for gallery", required: true },
        { name: "seo_gallery_keywords", label: "Gallery SEO Keywords", type: "text", placeholder: "Enter SEO keywords for gallery", required: true },
        {
          name: "seo_gallery_description",
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
        { name: "seo_design_title", label: "Design SEO Title", type: "text", placeholder: "Enter SEO title for design", required: true },
        { name: "seo_design_keywords", label: "Design SEO Keywords", type: "text", placeholder: "Enter SEO keywords for design", required: true },
        {
          name: "seo_design_description",
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
        { name: "seo_contactus_title", label: "Contact Us SEO Title", type: "text", placeholder: "Enter SEO title for contact us", required: true },
        {
          name: "seo_contactus_keywords",
          label: "Contact SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for contact Us",
          required: true,
        },
        {
          name: "seo_contactus_description",
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
        {
          name: "seo_privacy_title",
          label: "Privacy & Policy SEO Title",
          type: "text",
          placeholder: "Enter SEO title for Privacy & Policy",
          required: true,
        },
        {
          name: "seo_privacy_keywords",
          label: "Privacy & Policy SEO Keywords",
          type: "text",
          placeholder: "Enter SEO keywords for Privacy & Policy",
          required: true,
        },
        {
          name: "seo_privacy_description",
          label: "Privacy & Policy SEO Description",
          type: "textarea",
          placeholder: "Enter SEO description for Privacy & Policy",
          required: true,
        },
      ],
    },
  ];

  return (
    <>
      <ToastContainer />
      <div className="rounded-md w-full ">
        <div>
          <form onSubmit={handleSubmit}>
            {formSections.map((section, index) => (
              <fieldset key={index} className="mb-6 border p-4 rounded">
                <legend className="text-lg font-semibold">{section.title}</legend>
                {section.fields.map((field) => (
                  <div key={field.name} className="mb-2">
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 my-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`block w-full my-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                          errorFields[field.name] ? "border-red-500" : "border-gray-200 focus:border-blue-500"
                        }`}
                        rows={4}
                        required={field.required}
                      />
                    ) : (
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={getInputClassName(field.name)} // Apply dynamic class based on error field
                          required={field.required}
                        />
                        {errorFields[field.name] && <p className="text-sm text-red-500">* Please enter a valid {field.label.toLowerCase()} *</p>}
                      </div>
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
    </>
  );
};

export default CreateSeo;
