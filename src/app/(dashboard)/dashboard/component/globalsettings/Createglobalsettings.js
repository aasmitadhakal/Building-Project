"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const CreateGlobalSettings = () => {
  const [formData, setFormData] = useState({
    name: "",
    order: "",
    shortDescription: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.order) {
      errors.order = "Order is required";
    } else if (isNaN(formData.order)) {
      errors.order = "Order must be a number";
    }

    if (!formData.shortDescription) {
      errors.shortDescription = "Short Description is required";
    }
    if (!formData.image) {
      errors.image = "Image is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formDataWithEditor = {
          ...formData,
        };

        const response = await axios.post("/api/create", formDataWithEditor);
        // console.log(formDataWithEditor);
        // Handle success or show a message to the user
      } catch (error) {
        console.error("Error creating item:", error);
        // Handle error or show an error message to the user
      }
    }
  };

  // Array of input fields
  const inputFields = [
    { name: "image", type: "file", placeholder: "Site Footer Logo", required: true },
    { name: "image", type: "file", placeholder: "Site main Logo", required: true },
    { name: "image", type: "file", placeholder: "Fav Icon", required: true },
    { name: "siteinformation", type: "textarea", placeholder: "Site information", required: true },
    { name: "sitecopyright", type: "textarea", placeholder: "Site Copyright", required: true },
  ];

  return (
    <div className="px-5 rounded-md w-full ">
      <div>
        <p className="text-2xl font-bold mb-4">Global Settings</p>
        <form onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <div key={index} className="mb-4">
              {field.type === "file" ? (
                <div className="">
                  <label htmlFor={field.name} className="block text-medium mb-2">
                    {field.placeholder}
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id={field.name}
                      name={field.name}
                      onChange={handleChange}
                      className="absolute inset-0 w-1/2 h-full opacity-0"
                    />
                    <label
                      htmlFor={field.name}
                      className=" w-full h-full px-4 py-2 border rounded-md flex items-center justify-center focus:outline-none focus:border-blue-500"
                    >
                      {field.placeholder}
                    </label>
                  </div>
                </div>
              ) : (
                <>
                  <label htmlFor={field.name} className="block text-medium mb-2">
                    {field.placeholder}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    rows="5"
                  />
                </>
              )}
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGlobalSettings;
