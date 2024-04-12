"use client";
import React, { useState } from "react";
// import axiosInstance from "@/app/utils/axiosInstance";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/utils/axiosInstance";
import { FaArrowLeftLong } from "react-icons/fa6";


// dynamic import of quill editor to avoid running into document not defined error when in build
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


function Create() {
  const [question, setQuestion] = useState("");
  const [order, setOrder] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const [orderError, setOrderError] = useState(false);
  const [questionError, setQuestionError] = useState(false);
  const [answerError, setAnswerError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || !question.match(/^\D+$/)) {
      setQuestionError(true);
    } else {
      setQuestionError(false);
    }
    if (!answer.trim() || !answer.match(/^\D+$/)) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
    if (isNaN(order.trim()) || !order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }
    if (!question.match(/^\D+$/) || !question.trim() || isNaN(order.trim()) || !order.trim() || !answer.trim() || !answer.match(/^\D+$/)) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

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
      toast.error(error.response.data.error );
    }
  };

  return (
    <div className="my-12   bg-white rounded-md  shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Faq</h1>

          <Link href="/dashboard/faq">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div className=" my-4 ">
          <label className="block my-2   uppercase  text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order"
            onChange={(e) => setOrder(e.target.value)}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 ">
          <label className="block my-2  uppercase  text-sm font-medium text-gray-700" htmlFor="question">
            Question:
          </label>
          <input
            id="question"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${questionError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="question" // Assuming 'name' is the actual question field
            onChange={(e) => setQuestion(e.target.value)}
          />
          {questionError && <p className="text-red-500 text-sm ">* Please enter a string *</p>}
        </div>

        <div className=" my-4 ">
          <label className="block my-2  uppercase  text-sm font-medium text-gray-700" htmlFor="answer">
            Answer:
          </label>
          <input
            id="answer"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${answerError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="answer" // Assuming 'name' is the actual answer field
            onChange={(e) => setAnswer(e.target.value)}
          />
          {answerError && <p className="text-red-500 text-sm ">* Please enter a string *</p>}
        </div>
        <div className=" my-4 ">
          <label className=" text-sm uppercase font-medium text-gray-700 flex justify-between" htmlFor="name">
            <p>status:</p> <span className="text-red-500 text-xs">* Please enter draft or publish only *</span>
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
