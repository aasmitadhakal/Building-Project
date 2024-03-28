"use client";
import React, { useState } from "react";
// import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";

function Create() {
  const [title, setTitle] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", editorValue);
    formData.append("order", 3);
    formData.append("image", imageOne);
    formData.append("imageTwo", imageTwo);

    try {
      // Debugging: Log Form Data values
      console.log("Title:", title);
      console.log("Editor Value:", editorValue);
      console.log("Image One:", imageOne);
      console.log("Image Two:", imageTwo);

      //  send data to the server you can use axiosinstance if you feel comfortable with it
      const response = await fetch("http://localhost:3000/api/country", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Post created successfully");
        // Redirect or do something else on successful creation
      } else {
        console.error("Error creating post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="p-5 overflow-x-auto min-w-screen bg-white rounded-md mt-14">
      <h2 className="text-2xl font-bold">Create Post</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            className="block w-full  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="imageOne">
              Image One:
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageOne(e.target.files[0])}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="imageTwo">
              Image Two:
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="imageTwo"
              accept="image/*"
              onChange={(e) => setImageTwo(e.target.files[0])}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          <Link href={"/dashboard/aboutus"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;