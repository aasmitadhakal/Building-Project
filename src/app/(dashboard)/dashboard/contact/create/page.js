"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

// dynamic import of quill editor to avoid running into document not defined error when in build
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Create() {
  const [title, setTitle] = useState("");
  const [map, setMap] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [seo_title, setSeoTitle] = useState("");
  const [seo_keyword, setSeoKeyword] = useState("");

  const [titleError, setTitleError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [seoTitleError, setSeoTitleError] = useState("");
  const [seoKeywordError, setSeoKeywordError] = useState("");

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;

    if (!/^[a-zA-Z\s]+$/.test(title)) {
      setTitleError("Please enter a valid string value for Title");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!/^\d+$/.test(contact)) {
      setContactError("Please enter a valid numeric value for Contact");
      isValid = false;
    } else {
      setContactError("");
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (/^\d+$/.test(seo_title)) {
      setSeoTitleError("Seo Title should not contain numeric values");
      isValid = false;
    } else {
      setSeoTitleError("");
    }

    if (/^\d+$/.test(seo_keyword)) {
      setSeoKeywordError("Seo Keyword should not contain numeric values");
      isValid = false;
    } else {
      setSeoKeywordError("");
    }

    if (!isValid) {
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("map", map);
    formData.append("description", editorValue);
    formData.append("short_description", short_description);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("location", location);
    formData.append("seo_title", seo_title);
    formData.append("seo_keyword", seo_keyword);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/contact", formData);

      if (response.status === 200) {
        toast.success("Post created successfully");
        router.push("/dashboard/contact");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="my-12 bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className="flex justify-between my-2">
          <h1 className="font-[600] text-[24px] text-gray-700">Contact Us</h1>

          <Link href="/dashboard/contact">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              titleError ? "border-red-500" : ""
            }`}
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-sm">* {titleError} *</p>}
        </div>
        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              emailError ? "border-red-500" : ""
            }`}
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm">* {emailError} *</p>}
        </div>

        <div className="mb-12 my-4">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 border-gray-200 h-64"
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

        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="short_description">
            Short Description:
          </label>
          <textarea
            id="short_description"
            className={`block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 `}
            type="text"
            name="short_description"
            value={short_description}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </div>

        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="contact">
            Contact:
          </label>
          <input
            id="contact"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              contactError ? "border-red-500" : ""
            }`}
            type="text"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {contactError && <p className="text-red-500 text-sm">* {contactError} *</p>}
        </div>
        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="location">
            Location:
          </label>
          <input
            id="location"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 
            }`}
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="map">
            Map:
          </label>
          <textarea
            id="map"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 `}
            type="text"
            name="map"
            value={map}
            onChange={(e) => setMap(e.target.value)}
          />
        </div>
        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="seo_keyword">
            Seo Keyword:
          </label>
          <input
            id="seo_keyword"
            className={`block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              seoKeywordError ? "border-red-500" : ""
            }`}
            type="text"
            name="seo_keyword"
            value={seo_keyword}
            onChange={(e) => setSeoKeyword(e.target.value)}
          />
          {seoKeywordError && <p className="text-red-500 text-sm">* {seoKeywordError} *</p>}
        </div>
        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="seo_title">
            Seo Title:
          </label>
          <input
            id="seo_title"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              seoTitleError ? "border-red-500" : ""
            }`}
            type="text"
            name="seo_title"
            value={seo_title}
            onChange={(e) => setSeoTitle(e.target.value)}
          />
          {seoTitleError && <p className="text-red-500 text-sm">* {seoTitleError} *</p>}
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
