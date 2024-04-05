"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong } from "react-icons/fa6";
const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    order: "",
    title: "",
    // date: "",
    image: "",
  });
  
  const [imageOnePreview, setImagePreview] = useState(null);

   const [orderError, setOrderError] = useState(false);
   const [titleError, setTitleError] = useState(false);
   const [imageError, setImageError] = useState(false);


  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/gallery/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        // setEditorValue(responseData.date || "");
        setImagePreview(responseData.image || null);
      }
    } catch (error) {
      toast.error(error.response.data.error );
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // handleImagePreview(files[0], name === "image_one" ? setImageOnePreview : setImageTwoPreview);
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

  // const handleEditorChange = (value) => {
  //   setEditorValue(value);
  // };

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

    if (!formData.title.trim() || !formData.title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (isNaN(formData.order.trim()) || !formData.order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }
    if (!formData.image) {
      setImageError(true);
    } else {
      setImageError(false);
    }

    if (!formData.title.match(/^\D+$/) || !formData.title.trim() || !formData.image || isNaN(formData.order.trim()) || !formData.order.trim()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
      updatedData.append("title", formData.title);

      //   updatedData.append("date", date);
      if (formData.image) {
        updatedData.append("image", formData.image);
      }

      await axiosInstance.put(`/api/gallery/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/gallery");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Update Gallery</h1>

          <Link href="/dashboard/gallery">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order"
            value={formData.order || ""}
            onChange={handleChange}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="name">
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
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="image">
            Image :
          </label>
          <input
            id="image"
            className="block w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            name="image"
            onChange={(e) => {
              handleChange(e);
              handleImagePreview(e.target.files[0], setImagePreview);
            }}
          />
          {imageOnePreview && <img src={imageOnePreview} alt="Image One Preview" className="mt-2 h-52" />}
          {imageError && <p className="text-red-500 text-sm">* Please upload a Image *</p>}
        </div>

        <div className="flex gap-2 pt-1">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
