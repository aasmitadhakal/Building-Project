"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from "next/link";


import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    question: "",
    answer:"",
    status : "",
    order: "",
    location: "",
    seo_question: "",
    seo_keyword: "",
    banner_image: "",
  });
 
 
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/faq/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
      
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // handleImagePreview(files[0], name === "image_one" ? setImageOnePreview : setImageTwoPreview);
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = new FormData();
      updatedData.append("question", formData.question);
      updatedData.append("order",formData.order)
      updatedData.append("status", formData.status);
      updatedData.append("answer", formData.answer);
    
     console.log(updatedData)
      await axiosInstance.put(`/api/faq/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/faq");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-8">
      <ToastContainer />

      <h1 className="text-2xl font-bold">Update FAQ</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
         {/* for order */}
         <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={formData.order || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="question">
              question:
            </label>
            <input
              id="question"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="question"
              value={formData.question || ""}
              onChange={handleChange}
            />
          </div>
           
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
      
         
          
        {/* for status */}
        <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              status:
            </label>
            <input
              id="status"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="status"
              value={formData.status || ""}
              onChange={handleChange}
            />
          </div>
          {/* for answer */}
          
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="answer">
              answer:
            </label>
            <input
              id="answer"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="answer"
              value={formData.answer || ""}
              onChange={handleChange}
            />
          </div>
           
        </div>
        <div className="flex gap-2 pt-1 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href={"/dashboard/design"}>
            <p
              className="w-full md:w-auto px-4 py-2 bg-red-500
 text-white rounded-md"
            >
              Cancel
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;