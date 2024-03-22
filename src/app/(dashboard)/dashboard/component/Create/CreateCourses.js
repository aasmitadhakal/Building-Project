"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Link from "next/link";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    order: "",
    shortDescription: "",
    image: "",
  });
  const [editorValue, setEditorValue] = useState("");
  // text editor toolbars and modules
  var toolbarOptions = [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  // toolbar and modules end

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    set;
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
          description: editorValue, // Append editorValue to the formData
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
    { name: "name", type: "text", placeholder: "Name", required: true },
    { name: "order", type: "text", placeholder: "Order", required: true },
    { name: "shortDescription", type: "textarea", placeholder: "Short Description", required: true },
    { name: "image", type: "file", placeholder: "Image URL", required: true },
  ];

  return (
    <div className="shadow-lg p-5 rounded-md w-full mt-20  bg-white">
      <div>
        <p className="text-2xl font-bold mb-4">Create Course</p>
        <form onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <div key={index} className="mb-4">
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              )}
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}
          <ReactQuill
            className="bg-white text-black z-0"
            modules={module}
            value={editorValue}
            theme="snow"
            onChange={(editorValue) => setEditorValue(editorValue)}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
            Create
          </button>
          <Link href="/dashboard/courses" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
