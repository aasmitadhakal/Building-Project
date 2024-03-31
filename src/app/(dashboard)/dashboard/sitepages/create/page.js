"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";


function Create() {
 
  const [order, setOrder] = useState("");
   const [imageOne, setImageOne] = useState(null);
  //  const[link,setLink]=useState();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [editorValue, setEditorValue] = useState("");
  // const [meta_keywords, setmeta_keywords] = useState("");
 // const [shortdescription, setShort_description] = useState("");
  // const [seotitle, setSeo_title] = useState("");
 // const [meta_description, setmeta_description] = useState("");
  const router = useRouter();

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
      toast("Error creating post");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold">Create Page</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Existing form fields */}
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
              name:
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2   rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              title:
            </label>
            <input
              id="title"
              className="block w-full px-4 py-2   rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
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
          
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        </div>
       
        <div className="flex gap-2 mt-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          <Link href={"/dashboard/design"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;