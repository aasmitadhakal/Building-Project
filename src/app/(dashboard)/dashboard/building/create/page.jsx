"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

// dynamic import of quill editor to avoid running into document not defined error when in buil
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


function Create() {
  const [name, setName] = useState("");
  const [order_number, setorder_number] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [slug, setSlug] = useState("");
  const [banner, setBanner] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [seotitle, setSeo_title] = useState("");
  const [seodescription, setSeodescription] = useState("");
  const [seoschema, setSeoschema] = useState("");
  const [description, setDescription] = useState("");
  const [seokeywords, setSeokeywords] = useState("");

  const router = useRouter();

  const [orderError, setOrderError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [seoTitleError, setSeoTitleError] = useState(false);
  const [seoKeywordError, setSeoKeywordError] = useState(false);
  const [seoSchemaError, setSeoSchemaError] = useState(false);
  const [seoDescriptionError, setSeoDescriptionError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImagePreview = (file, setImagePreview) => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !name.match(/^\D+$/)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!seotitle.match(/^\D+$/)) {
      setSeoTitleError(true);
    } else {
      setSeoTitleError(false);
    }
    if (!seokeywords.match(/^\D+$/)) {
      setSeoKeywordError(true);
    } else {
      setSeoKeywordError(false);
    }
    if (!seodescription.match(/^\D+$/)) {
      setSeoDescriptionError(true);
    } else {
      setSeoDescriptionError(false);
    }
    if (!seoschema.match(/^\D+$/)) {
      setSeoSchemaError(true);
    } else {
      setSeoSchemaError(false);
    }
    if (isNaN(order_number.trim()) || !order_number.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }
    if (!imageOne) {
      setImageError(true);
    } else {
      setImageError(false);
    }
    if (
      !name.trim() ||
      !name.match(/^\D+$/) ||
      !imageOne ||
      !seotitle.match(/^\D+$/) ||
      !seokeywords.match(/^\D+$/) ||
      !seodescription.match(/^\D+$/) ||
      !seoschema.match(/^\D+$/) ||
      isNaN(order_number.trim()) ||
      !order_number.trim()
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("order_number", order_number);
    formData.append("image", imageOne);

    formData.append("short_description", editorValue);
    formData.append("seo_title", seotitle);
    formData.append("seo_description", seodescription);
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
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order_number"
            value={order_number}
            onChange={(e) => setorder_number(e.target.value)}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              nameError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
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
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${seoTitleError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="seo_title"
            value={seotitle}
            onChange={(e) => setSeo_title(e.target.value)}
          />
          {seoTitleError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="seo_description">
            Seo Description:
          </label>
          <textarea
            rows={5}
            id="seo_description"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${
              seoDescriptionError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="seo_description"
            value={seodescription}
            onChange={(e) => setSeodescription(e.target.value)}
          />
          {seoDescriptionError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block  my-2  text-sm font-medium text-gray-700" htmlFor="seo_schema">
            Seo Keywords:
          </label>
          <input
            id="seo_keywords"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${seoKeywordError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="seo_keywords"
            value={seokeywords}
            onChange={(e) => setSeokeywords(e.target.value)}
          />
          {seoKeywordError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
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
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${seoSchemaError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="seo_schema"
            value={seoschema}
            onChange={(e) => setSeoschema(e.target.value)}
          />
          {seoSchemaError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              setImageOne(e.target.files[0]);
              setImageError(false);
              handleImagePreview(e.target.files[0], setImagePreview);
            }}
          />
          {imagePreview && <img src={imagePreview} alt="Image One Preview" className="mt-2 h-40 rounded" />}
          {imageError && <p className="text-red-500 text-sm">* Please upload a Image *</p>}
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
