"use client";
import React, { useState } from "react";
// import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/utils/axiosInstance";
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
    <div className="p-5 overflow-x-auto min-w-screen bg-white rounded-md mt-14">
      <ToastContainer />
      <h2 className="text-2xl font-bold">Create Post</h2>
      <form onSubmit={handleFormSubmit}>
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
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="question">
              Question:
            </label>
            <input
              id="question"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="question" // Assuming 'name' is the actual question field
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </div>
      
        <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="answer">
              answer:
            </label>
            <input
              id="answer"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="answer" // Assuming 'name' is the actual answer field
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="status">
              Status:
            </label>
            <input
              id="status"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="status" // Assuming 'name' is the actual status field
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
         

        <div className="flex gap-2 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          <Link href={"/dashboard/faq"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;
