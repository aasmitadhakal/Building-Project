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
  
  const [order, setOrder] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState("");
  const [shortdescription, setShort_description] = useState("");
  const [seotitle, setSeo_title] = useState("");
  const [seodescription, setSeodescription] = useState("");
  const [seoschema, setSeoschema] = useState("");
  const [description, setDescription] = useState("");
  const [seokeywords, setSeokeywords] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    

    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("order", order);
    formData.append("image", imageOne); // Append image file correctly
    // Append additional fields
    formData.append("slug", slug);
    formData.append("status", "done");
    
    formData.append("description", editorValue);
    formData.append("short_description", shortdescription); // Use validated integer value
    formData.append("seo_title", seotitle);
    formData.append("seo_description", seodescription); // Use validated integer value
    formData.append("seo_schema", seoschema);
    formData.append("seo_keywords", seokeywords);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/service", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/services");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12  bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />
      
      <form onSubmit={handleFormSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Create Service</h1>
        {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
        <Link href="/dashboard/services">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
            </Link>
      </div>
          <div className=" my-4 uppercase">
            <label
              className="block text-sm  my-2 font-medium text-gray-700"
              htmlFor="order"
            >
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <div className=" my-4 uppercase">
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="name"
            >
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
        
        <div className="mb-4 my-4 ">
          <label
            className="block my-2 text-sm font-medium text-gray-700 "
            htmlFor="description"
          >
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-64 border-gray-200"
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
       
          <div className=" my-4 uppercase mt-20" >
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="slug"
            >
              Slug:
            </label>
            <input
              id="slug"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className=" my-4 uppercase">
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="status"
            >
              Status:
            </label>
            <input
              id="status"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
       
 
          <div className=" my-4 uppercase">
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="short_description"
            >
              Short Description:
            </label>
            <input
              id="short_description"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="short_description"
              value={shortdescription}
              onChange={(e) => setShort_description(e.target.value)}
            />
          </div>
          <div className=" my-4 uppercase">
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="seo_title"
            >
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
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="seo_description"
            >
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
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="seo_schema"
            >
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
         
      
      
          <div className=" my-4 uppercase">
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="seo_schema"
            >
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
            <label
              className="block my-2 text-sm font-medium text-gray-700"
              htmlFor="image"
            >
              Image:
            </label>
            <input
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageOne(e.target.files[0])} // Ensure that this sets the state correctly
            />
          </div>
         
      

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Create
          </button>
         
        </div>
      </form>
    </div>
  );
}

export default Create;
