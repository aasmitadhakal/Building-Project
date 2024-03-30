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
  const [editorValue, setEditorValue] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("description", editorValue);
    formData.append("order", order);
    

    try {

      

      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/privacy", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/privacy");
      } else {
        toast("Error creating privacy");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />
     
      <form onSubmit={handleFormSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Create Privacy </h1>
        
             <Link href="/dashboard/privacy">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>
        
          <div className="my-4 uppercase">
            <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="order">
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
          
        
        <div className="my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-64  border-gray-200"
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
      
         
          
        <div className="flex gap-2 mt-20">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default Create;
