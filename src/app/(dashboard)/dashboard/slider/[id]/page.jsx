// Import necessary libraries and components
"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
function UpdateSlider({ params }) {
  const [sliderData, setSliderData] = useState({
    order: "",
    name: "",
    image: null,
    link: "",
    description: "",
  });
  const router = useRouter();

  useEffect(() => {
    // Fetch slider data from the server
    const fetchSlider = async () => {
      try {
        const response = await axiosInstance.get(`/api/sliders/${params.id}`);

        if (response.status === 200) {
          const fetchedSliderData = response.data.data;

          // Set the state with the fetched slider data
          setSliderData(fetchedSliderData);
        } else {
          toast("Error fetching slider data");
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
        toast("Error fetching slider data");
      }
    };

    // Call the fetchSlider function when the component mounts
    fetchSlider();
  }, [params.id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("order", sliderData.order);
    formData.append("name", sliderData.name);
    formData.append("image", sliderData.image);
    formData.append("link", sliderData.link);
    formData.append("description", sliderData.description);

    try {
      const response = await axiosInstance.put(`/api/sliders/${params.id}`, formData);

      if (response.status === 200) {
        toast("Slider updated successfully");
        router.push("/dashboard/slider");
      } else {
        toast("Error updating slider");
      }
    } catch (error) {
      console.error("Error updating slider:", error);
      toast("Error updating slider");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSliderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setSliderData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  return (
    <div className="my-12   bg-white rounded-md  shadow-xl">
      <ToastContainer />
    
      <form onSubmit={handleFormSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Update Slider</h1>
        
             <Link href="/dashboard/slider">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>
       
          <div className=" my-4 ">
            <label className="block my-2 text-sm uppercase font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={sliderData.order}
              onChange={handleChange}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2 text-sm uppercasefont-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={sliderData.name}
              onChange={handleChange}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2 text-sm uppercasefont-medium text-gray-700" htmlFor="image">
              Image:
            </label>
            <input
              id="image"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className=" my-4 ">
            <label className="block my-2 text-sm uppercasefont-medium text-gray-700" htmlFor="link">
              Link:
            </label>
            <input
              id="link"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="link"
              value={sliderData.link}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block my-2 text-sm uppercasefont-medium text-gray-700" htmlFor="description">
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
              value={sliderData.description}
              theme="snow"
              onChange={(value) => setSliderData((prevData) => ({ ...prevData, description: value }))}
            />
          </div>
       
        <div className="flex gap-2 mt-40  md:mt-20">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
         
        </div>
      </form>
    </div>
  );
}

export default UpdateSlider;
