"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
function Create() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [rating, setRating] = useState("");
  const [order, setOrder] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", editorValue);
    formData.append("order", order);
    formData.append("image", image);
    formData.append("position", position);
    formData.append("rating", rating);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/testimonials", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/testimonials");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Testimonial </h1>

          <Link href="/dashboard/testimonials">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div className="uppercase my-4">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <div className="uppercase my-4">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="uppercase my-4">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="position">
            Position:
          </label>
          <input
            id="position"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="uppercase my-4">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="rating">
            Rating:
          </label>
          <input
            id="rating"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div className="mb-4  my-4">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="description">
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
            onChange={(value) => setEditorValue(value)}
          />
        </div>

        <div className=" mt-20 uppercase my-4">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="image">
            Image:
          </label>
          <input type="file" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
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
