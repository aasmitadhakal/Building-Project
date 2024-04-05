"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
function Create() {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [image, setImage] = useState(null);

  const [orderError, setOrderError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (isNaN(order.trim()) || !order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }
    if (!image) {
      setImageError(true);
    } else {
      setImageError(false);
    }

    if (!title.match(/^\D+$/) || !title.trim() || !image || isNaN(order.trim()) || !order.trim()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    // formData.append("date", date);
    formData.append("order", order);
    formData.append("image", image);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/gallery", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        console.log(formData);
        router.push("/dashboard/gallery");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response.data.error );
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Gallery</h1>

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
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              titleError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>
        {/* <div>
  <label className="block text-sm font-medium text-gray-700" htmlFor="date">
    Date:
  </label>
  <input
    id="date"
    className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    type="date"
    name="date" // Change name to "date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
</div> */}

        <div className="mb-4 relative uppercase my-4">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="image">
            Image :
          </label>
          <input
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setImageError(false);
            }}
          />
          {imageError && <p className="text-red-500 text-sm">* Please upload a Image *</p>}
        </div>

        <div className="flex gap-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
