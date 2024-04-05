"use client";
import axiosInstance from "@/app/utils/axiosInstance";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

const CreateHomePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    homeTitle: "",
    homeDescription: "",
    homeButton: "",
    designSectionDescription: "",
    clientTitle: "",
    clientDescription: "",
    buildingTitle: "",
    buildingSectionTitle: "",
    testimonialTitle: "",
    testimonialSectionTitle: "",
    faqTitle: "",
    faqSectionTitle: "",
    dreamProject: "",
    dreamProjectButton: "",
    webpageSlogan: "",
    aboutTitle: "",
    servicesTitle: "",
    singleDesignTitle: "",
    doubleDesignTitle: "",
    dualDesignTitle: "",
    galleryTitle: "",
    privacyTitle: "",
    contactusTitle: "",
    contactusSectionTitle: "",
    contactusDescription: "",
    siteMap: "",
    sitePhone: "",
    siteLocation: "",
    siteMail: "",
    siteFacebook: "",
    siteInstagram: "",
    siteYoutube: "",
    siteLinkedin: "",
    siteWhatsapp: "",
  });

  const [errors, setErrors] = useState({});

  // formatted the label key to display the label without underscores
  const formatLabel = (key) => {
    const formattedKey = key.replace(/_/g, " ");

    // Capitalize the first letter of each word
    return formattedKey.replace(/\b\w/g, (char) => char.toUpperCase());
  };

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
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field when user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for each input field
    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      if (!value) {
        newErrors[name] = `Please enter a valid ${formatLabel(name)}`;
      }
    });

    // Update the errors state
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all fields with valid data");
      return;
    }

    try {
      const response = await axiosInstance.put(`/api/settings/u/${formData.homeTitle}`, formData);
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

  return (
    <div className="px-5 rounded-md w-full">
      <ToastContainer />
      <div>
        <p className="text-2xl font-bold mb-4">Home</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {formData &&
              Object.keys(formData).map((key, index) => (
                <div key={index} className="mb-4">
                  <label htmlFor={key} className="block text-medium mb-2">
                    {formatLabel(key)}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={formatLabel(key)}
                    className={`block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                      errors[key] ? "border-red-500" : "border-gray-200 focus:border-blue-500"
                    }`}
                  />
                  {errors[key] && <p className="text-red-500 text-sm">* {errors[key]} *</p>}
                </div>
              ))}
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHomePage;
