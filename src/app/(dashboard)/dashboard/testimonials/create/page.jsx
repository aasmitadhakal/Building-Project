"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
    <div className="p-5 overflow-x-auto min-w-screen bg-white rounded-md mt-14">
      <ToastContainer />
      <h2 className="text-2xl font-bold">New Testimonial</h2>
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="position">
              Position:
            </label>
            <input
              id="position"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="rating">
              Rating:
            </label>
            <input
              id="rating"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image:
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
          <Link href={"/dashboard/testimonials"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;
