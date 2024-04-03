"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const CreateGlobalSettings = () => {
  const [formData, setFormData] = useState({
    imageFooter: "",
    imageMain: "",
    favIcon: "",
    siteInformation: "",
    siteCopyright: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post("/api/create", formData);
      console.log(formData.siteCopyright);
      // Handle success or show a message to the user
    } catch (error) {
      console.error("Error creating item:", error);
      // Handle error or show an error message to the user
    }
  };

  // Array of input fields
  const inputFields = [
    { name: "imageFooter", type: "file", placeholder: "Choose Site Footer Logo", label: "Site Footer Logo", required: true },
    { name: "imageMain", type: "file", placeholder: "Choose Site main Logo", label: "Site Main Logo", required: true },
    { name: "favIcon", type: "file", placeholder: "Choose Fav Icon", label: "Fav Icon", required: true },
    { name: "siteInformation", type: "textarea", placeholder: "Site information", label: "Site information", required: true },
    { name: "siteCopyright", type: "textarea", placeholder: "Site Copyright", label: "Site Copyright", required: true },
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
                    {field.label}
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
