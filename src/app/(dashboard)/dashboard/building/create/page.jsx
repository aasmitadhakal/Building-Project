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
  const [order_number, setorder_number] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [slug, setSlug] = useState("");
  const [banner, setBanner] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [seotitle, setSeo_title] = useState("");
  const [seodescription, setSeodescription] = useState("");
  const [seoschema, setSeoschema] = useState("");
  const [description, setDescription] = useState("");
  const [seokeywords, setSeokeywords] = useState("");

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("order_number", order_number);
    formData.append("image", imageOne); // Append image file correctl

    formData.append("short_description", editorValue);
    formData.append("seo_title", seotitle);
    formData.append("seo_description", seodescription); // Use validated integer value
    formData.append("seo_schema", seoschema);
    formData.append("seo_keywords", seokeywords);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/building", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/building");
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
      {/* <h2 className="text-2xl font-bold">Create Building</h2> */}
      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Building</h1>

          <Link href="/dashboard/building">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        {/* Existing form fields */}

        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="order_number">
            Order Number:
          </label>
          <input
            id="order_number"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order_number"
            value={order_number}
            onChange={(e) => setorder_number(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className=" my-4 ">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="short_description">
            Short Description:
          </label>
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
        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="seo_title">
            Seo Title:
          </label>
          <input
            id="seo_title"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="seo_title"
            value={seotitle}
            onChange={(e) => setSeo_title(e.target.value)}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="seo_description">
            Seo Description:
          </label>
          <input
            id="seo_description"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="seo_description"
            value={seodescription}
            onChange={(e) => setSeodescription(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="seo_schema">
            Seo Keywords:
          </label>
          <input
            id="seo_keywords"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="seo_keywords"
            value={seokeywords}
            onChange={(e) => setSeokeywords(e.target.value)}
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="3"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div> */}

        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="seo_schema">
            Seo Schema:
          </label>
          <input
            id="seo_schema"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="seo_schema"
            value={seoschema}
            onChange={(e) => setSeoschema(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImageOne(e.target.files[0])} // Ensure that this sets the state correctly
          />
        </div>

        <div className="flex gap-2 mt-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
