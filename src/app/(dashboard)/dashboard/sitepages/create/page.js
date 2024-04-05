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
  const [order, setOrder] = useState("");
  const [imageOne, setImageOne] = useState(null);
  //  const[link,setLink]=useState();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [editorValue, setEditorValue] = useState("");

  const [orderError, setOrderError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  // const [meta_keywords, setmeta_keywords] = useState("");
  // const [shortdescription, setShort_description] = useState("");
  // const [seotitle, setSeo_title] = useState("");
  // const [meta_description, setmeta_description] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isNaN(order.trim()) || !order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }
    if (!name.trim() || !name.match(/^\D+$/)) {
      setNameError(true);
    } else {
      setNameError(false);
    }

     if (!title.trim() || !title.match(/^\D+$/)) {
       setTitleError(true);
     } else {
       setTitleError(false);
     }

    if (!imageOne) {
      setImageError(true);
    } else {
      setImageError(false);
    }

    if (!name.match(/^\D+$/) || !name.trim() || isNaN(order.trim()) || !order.trim() || !imageOne || !title.trim() || !title.match(/^\D+$/)) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    const formData = new FormData();
    formData.append("image", imageOne);
    // formData.append("link", link);
    // formData.append("description", setDescription);
    formData.append("order", order);
    formData.append("description", editorValue);
    formData.append("name", name);
    formData.append("title", title);
    // formData.append("short_description",shortdescription); // Use validated integer value
    // formData.append("seo_title", seotitle);
    // formData.append("meta_description", meta_description); // Use validated integer value

    // formData.append("meta_keywords", setmeta_keywords);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/pages", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/sitepages");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response.data.error );
    }
  };

  return (
    <div className="my-12 bg-white rounded-md  shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Pages</h1>

          <Link href="/dashboard/sitepages">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div>
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />{" "}
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>
        <div>
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${nameError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-red-500 text-sm ">* Please enter a valid name *</p>}
        </div>
        <div>
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${titleError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid name *</p>}
        </div>
        <div>
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="image">
            Image: <span className="text-xs"> Image size should be less than 1 mb</span>
          </label>
          <input
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              setImageOne(e.target.files[0]);
              setImageError(false);
            }}
          />
          {imageError && <p className="text-red-500 text-sm">* Please upload Image *</p>}
        </div>

        <div className="mb-4">
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="description">
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

        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="short_description">
              Short_description:
            </label>
            <input
              id="short_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="short_description"
              value={shortdescription}
              onChange={(e) => setShort_description(e.target.value)}
            />
          </div> */}
        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_title">
              Seo_title:
            </label>
            <input
              id="seo_title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_title"
              value={seotitle}
              onChange={(e) => setSeo_title(e.target.value)}
            />
          </div> */}

        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="meta_description">
            meta_description
            </label>
            <input
              id="meta_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="meta_description"
              value={meta_description}
              onChange={(e) => setmeta_description(e.target.value)}
            />
          </div> */}
        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="link">
              link:
            </label>
            <input
              id="link"
              classlink="block w-full px-4 py-2   rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              link="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div> */}

        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="meta_keywords">
              meta_keywords:
            </label>
            <input
              id="meta_keywords"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="meta_keywords"
              value={meta_keywords}
              onChange={(e) => setmeta_keywords(e.target.value)}
            />
          </div> */}
        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image:
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageOne(e.target.files[0])} // Ensure that this sets the state correctly
            />
          </div> */}
        {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_schema">
              seo_keywords:
            </label>
            <input
              id="seo_keywords"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_keywords"
              value={}
              onChange={(e) => set(e.target.value)}
            />
          </div> */}

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
