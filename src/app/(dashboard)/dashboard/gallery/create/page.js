"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Create() {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [image, setImage] = useState(null);
//   const [date, setDate] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
      toast("Error creating post");
    }
  };

  return (
    <div className="p-5 overflow-x-auto min-w-screen bg-white rounded-md mt-14">
      <ToastContainer />
      <h2 className="text-2xl font-bold">Create Gallery</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image :
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        
        </div>

        <div className="flex gap-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          <Link href={"/dashboard/gallery"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;
