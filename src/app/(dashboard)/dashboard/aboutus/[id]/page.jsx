"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from "next/link";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    order: "",
    title: "",
    description: "",
    image_one: "",
    image_two: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);
  const [imageTwoPreview, setImageTwoPreview] = useState(null);
  const [orderError, setOrderError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/aboutus/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        setImageOnePreview(`${axiosInstance.defaults.baseURL}${responseData.image_one}` || null);
        setImageTwoPreview(`${axiosInstance.defaults.baseURL}${responseData.image_two}` || null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  },[params.id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      handleImagePreview(files[0], name === "image_one" ? setImageOnePreview : setImageTwoPreview);
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

  const handleImagePreview = (file, setImagePreview) => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate order field
    if (isNaN(formData.order)) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (!formData.title.trim() || !formData.title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    // Check if there are any validation errors
    if (isNaN(formData.order) || !formData.title.trim() || !formData.title.match(/^\D+$/)) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
      updatedData.append("title", formData.title);
      updatedData.append("description", editorValue);
      if (formData.image_one) {
        updatedData.append("image_one", formData.image_one);
      }
      if (formData.image_two) {
        updatedData.append("image_two", formData.image_two);
      }

      await axiosInstance.put(`/api/aboutus/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/aboutus");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="my-12 bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex justify-between my-2">
          <h1 className="font-[600] text-[24px] text-gray-700">Update About Us</h1>
          <Link href="/dashboard/aboutus">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"> Back</p>
          </Link>
        </div>
        <div className="my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              orderError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="order"
            value={formData.order || ""}
            onChange={handleChange}
          />
        </div>
        {orderError && <p className="text-red-500 text-sm -mt-3">* Please enter a valid number *</p>}
        <div className="my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              titleError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
        </div>
        {titleError && <p className="text-red-500 text-sm -mt-3">* Please enter a valid title *</p>}
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-64 border-gray-200"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
          <div>
            <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="image_one">
              Image One:
            </label>
            <input
              id="image_one"
              type="file"
              name="image_one"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e.target.files[0], setImageOnePreview);
              }}
            />
            {imageOnePreview && <img src={imageOnePreview} alt="Image One Preview" className="mt-2 h-40 rounded" />}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="image_two">
              Image Two:
            </label>
            <input
              id="image_two"
              type="file"
              name="image_two"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e.target.files[0], setImageTwoPreview);
              }}
            />
            {imageTwoPreview && <img src={imageTwoPreview} alt="Image Preview" className="mt-2 h-40 rounded" />}
          </div>
        </div>
        <div className="flex gap-2 pt-1 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
