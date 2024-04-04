"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    order: "",
    title: "",
    icon: "",
    image: null,
    short_description: "",
    description: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const [orderError, setOrderError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [iconError, setIconError] = useState(false);
  const [shortDescriptionError, setShortDescriptionError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/whyus/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        setImagePreview(responseData.image ? responseData.image : null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      handleImagePreview(files[0]);
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleImagePreview = (file) => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(formData.order.trim()) || !formData.order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (!formData.title.trim() || !formData.title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!formData.icon.trim()) {
      setIconError(true);
    } else {
      setIconError(false);
    }

    if (!formData.short_description.trim()) {
      setShortDescriptionError(true);
    } else {
      setShortDescriptionError(false);
    }

    if (!formData.title.match(/^\D+$/) || isNaN(formData.order.trim()) || !formData.order.trim() || !formData.icon.trim()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
      updatedData.append("title", formData.title);
      updatedData.append("image", formData.image);
      updatedData.append("icon", formData.icon);
      updatedData.append("short_description", formData.short_description);
      updatedData.append("description", editorValue);

      await axiosInstance.put(`/api/whyus/${params.id}`, updatedData);

      toast("Data updated successfully");
      router.push("/dashboard/whychooseus");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-5">
      <ToastContainer />

      {/* <h1 className="text-2xl font-bold">Update Why choose us?</h1> */}
      <form onSubmit={handleSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Update Why Choose Us</h1>

          <Link href="/dashboard/whychooseus">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={formData.order}
            onChange={handleChange}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid order *</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="icon">
            Icon:
          </label>
          <input
            id="icon"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="icon"
            value={formData.icon}
            onChange={handleChange}
          />
          {iconError && <p className="text-red-500 text-sm ">* Please enter a valid icon *</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700" htmlFor="image">
            Image:
          </label>
          <input
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleChange}
          />
          {imagePreview && <img src={imagePreview} alt="Image Preview" className="mt-2 h-[200px]" />}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="shortDescription">
            Short Description:
          </label>
          <textarea
            id="short_description"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
          />
          {shortDescriptionError && <p className="text-red-500 text-sm">* Please enter a valid short description *</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-64"
            modules={{
              toolbar: [
                [{ font: [] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ align: [] }],
                ["clean"],
              ],
            }}
            value={editorValue}
            theme="snow"
            onChange={handleEditorChange}
          />
        </div>

        <div className="flex gap-2 mt-20">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
