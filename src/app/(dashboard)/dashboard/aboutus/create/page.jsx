"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Container } from "postcss";

function Create() {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", editorValue);
    formData.append("order", order);
    formData.append("image_one", imageOne);
    formData.append("image_two", imageTwo);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/aboutus", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/aboutus");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className=" my-12  bg-white rounded-md font-[karla] shadow-xl ">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6 ">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Post</h1>
          {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
          <Link href="/dashboard/aboutus">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"> Back</p>
          </Link>
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className="block w-full  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="h-64  my-4 ">
          <label className="block text-sm font-medium my-2 text-gray-700 " htmlFor="description">
            Description:
          </label>{" "}
          {/* Set the height as per your requirement */}
          <ReactQuill
            className="bg-white text-black z-0 h-full"
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

        <div className="grid grid-cols-2 mt-20">
          <div className=" my-4 uppercase   ">
            <label className="block text-sm font-medium my-2 " htmlFor="image_one">
              Image One:
            </label>
            <input type="file" id="image_one" accept="image/*" onChange={(e) => setImageOne(e.target.files[0])} />
          </div>
          <div className="  uppercase my-2">
            <label className="block text-sm font-medium my-2 " htmlFor="image_two">
              Image Two:
            </label>
            <input type="file" id="image_two" accept="image/*" onChange={(e) => setImageTwo(e.target.files[0])} />
          </div>
        </div>

        <div className="flex  my-4 uppercase gap-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 my-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          {/* <Link href={"/dashboard/aboutus"}>
            <p className="w-full md:w-auto px-4 py-2 my-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link> */}
        </div>
      </form>
    </div>
  );
}

export default Create;
