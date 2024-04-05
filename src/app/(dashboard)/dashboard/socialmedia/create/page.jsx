"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
function Create() {
  const [order, setOrder] = useState("");
  const [name, setName] = useState("");
  
  const [link, setLink] = useState("");
  const [icon, setIcon] = useState(""); 
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("order", order);
    formData.append("name", name);
    formData.append("link", link);
    formData.append("icon", icon); 
    
    try {
      const response = await axiosInstance.post("/api/social", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/socialmedia");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response.data.error );
    }
  };

  return (
    <div className="my-12   bg-white rounded-md  shadow-xl">
      <ToastContainer />
      
      <form onSubmit={handleFormSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Add new Social Media </h1>
        
             <Link href="/dashboard/socialmedia">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>

        
          <div className=" my-4 ">
            <label className="block my-2 uppercase text-sm font-medium text-gray-700" htmlFor="order">
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
          <div className=" my-4 ">
            <label className="block my-2 uppercase text-sm font-medium text-gray-700" htmlFor="title">
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
            <label className="block my-2 uppercase text-sm font-medium text-gray-700" htmlFor="icon">
              Icon:
            </label>
            <input
              id="icon"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="icon"
              onChange={(e) => setIcon(e.target.value)} 
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2 uppercase text-sm font-medium text-gray-700" htmlFor="icon">
              Link:
            </label>
            <input
              id="link"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="link"
              onChange={(e) => setLink(e.target.value)} 
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
