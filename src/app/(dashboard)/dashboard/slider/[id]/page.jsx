// Import necessary libraries and components
"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
    <div className="p-5 overflow-x-auto min-w-screen bg-white rounded-md mt-14">
      <ToastContainer />
      <h2 className="text-2xl font-bold">Update Slider</h2>
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
              value={sliderData.order}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={sliderData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image:
            </label>
            <input
              id="image"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="link">
              Link:
            </label>
            <input
              id="link"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="link"
              value={sliderData.link}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
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
              value={sliderData.description}
              theme="snow"
              onChange={(value) => setSliderData((prevData) => ({ ...prevData, description: value }))}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href="/dashboard/slider">
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateSlider;
