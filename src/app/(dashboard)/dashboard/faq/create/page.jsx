"use client";
import React, { useState } from "react";
// import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/utils/axiosInstance";
import { FaArrowLeftLong } from "react-icons/fa6";
function Create() {
  const [question, setQuestion] = useState("");
  const [order, setOrder] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    
    formData.append("answer", answer);
    formData.append("order", order);
    formData.append("question", question);
    formData.append("status", status);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/faq", formData);
  
      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/faq");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md  shadow-xl">
      <ToastContainer />
      
      <form onSubmit={handleFormSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Create Faq</h1>
        
             <Link href="/dashboard/faq">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>

      
          <div className=" my-4 ">
            <label className="block my-2   uppercase  text-sm font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2  uppercase  text-sm font-medium text-gray-700" htmlFor="question">
              Question:
            </label>
            <input
              id="question"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="question" // Assuming 'name' is the actual question field
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
       
      
        <div className=" my-4 ">
            <label className="block my-2  uppercase  text-sm font-medium text-gray-700" htmlFor="answer">
              answer:
            </label>
            <input
              id="answer"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="answer" // Assuming 'name' is the actual answer field
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2  uppercase  text-sm font-medium text-gray-700" htmlFor="status">
              Status:
            </label>
            <input
              id="status"
              className="block   w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="status" 
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
         

        <div className="flex gap-2 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
         
        </div>
      </form>
    </div>
  );
}

export default Create;
