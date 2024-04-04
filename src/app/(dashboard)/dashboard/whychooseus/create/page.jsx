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
function Create() {
  const [order, setOrder] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [shortDescription, setShortDescription] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [icon, setIcon] = useState("");

  const [orderError, setOrderError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [iconError, setIconError] = useState(false);
  const [imageError, setImageError] = useState(null);
  const [shortDescriptionError, setShortDescriptionError] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!image) {
      setImageError(true);
    } else {
      setImageError(false);
    }

    if (isNaN(order.trim()) || !order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (!icon.trim()) {
      setIconError(true);
    } else {
      setIconError(false);
    }

    if (!shortDescription.trim()) {
      setShortDescriptionError(true);
    } else {
      setShortDescriptionError(false);
    }

    if (!title.match(/^\D+$/) || !title.trim() || !image || isNaN(order.trim()) || !order.trim() || !icon.trim()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    const formData = new FormData();
    formData.append("order", order);
    formData.append("title", title);
    formData.append("image", image);
    formData.append("icon", icon); // Append icon to formData
    formData.append("short_description", shortDescription);
    formData.append("description", editorValue);

    try {
      const response = await axiosInstance.post("/api/whyus", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/whychooseus");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12 bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Why choose us </h1>

          <Link href="/dashboard/whychooseus">
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
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid Order *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="icon">
            Icon:
          </label>
          <input
            id="icon"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="icon"
            onChange={(e) => setIcon(e.target.value)}
          />
          {iconError && <p className="text-red-500 text-sm ">* Please enter a valid icon *</p>}
        </div>
        <div className="mb-4 relative my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="image">
            Image:
          </label>
          <input
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {imageError && <p className="text-red-500 text-sm">* Please upload Image *</p>}
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="shortDescription">
            Short Description:
          </label>
          <textarea
            id="shortDescription"
            className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            name="shortDescription"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {shortDescriptionError && <p className="text-red-500 text-sm uppercase">* Please enter a valid short description *</p>}
        </div>

        <div className="mb-4">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white h-64 text-black z-0 border-gray-200 "
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

        <div className="flex gap-2 md:mt-20 mt-40">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
