"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    order: "",
    name: "",
    link: "",
    icon: "",
  });
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/social/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/api/social/${params.id}`, formData);

      toast("Data updated successfully");
      router.push("/dashboard/socialmedia");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md  shadow-xl">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Update Social Media </h1>
        
             <Link href="/dashboard/socialmedia">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>

          <div className=" my-4 ">
            <label className="block  text-sm my-2 uppercase font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block  border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={formData.order}
              onChange={handleChange}
            />
          </div>
          <div className=" my-4 ">
            <label className="block text-sm my-2 uppercase font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className="block  border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2 uppercase text-sm font-medium text-gray-700" htmlFor="icon">
              Icon:
            </label>
            <input
              id="icon"
              className="block  border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2 uppercase text-sm font-medium text-gray-700" htmlFor="link">
              Link:
            </label>
            <input
              id="link"
              className="block w-full px-4 py-2  border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </div>
        
        <div className="flex gap-2 mt-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
         
        </div>
      </form>
    </div>
  );
};

export default Update;
