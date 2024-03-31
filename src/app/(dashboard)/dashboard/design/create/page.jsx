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
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [frontage, setFrontage] = useState("");
  const [size, setSize] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [cars, setCars] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [price, setPrice] = useState("");
  const [floorPlan, setFloorPlan] = useState(null);
  const [storeyType, setStoreyType] = useState("single");

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const bedroomValue = parseInt(bedroom);
    const bedOderValue = parseInt(order);
    const carsValue = parseInt(cars);
    const priceValue = parseInt(price);
    if (isNaN(bedOderValue)) {
      toast("Please enter valid integer values for Ordervalue");
      return; // Stop form submission if validation fails
    }
    if (isNaN(bedroomValue)) {
      toast("Please enter valid integer values for Bedroom");
      return; // Stop form submission if validation fails
    }
    if (isNaN(carsValue)) {
      toast("Please enter valid integer values for Car");
      return; // Stop form submission if validation fails
    }
    if (isNaN(priceValue)) {
      toast("Please enter valid integer values for Price");
      return; // Stop form submission if validation fails
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", editorValue);
    formData.append("order", order);
    formData.append("image", imageOne); // Append image file correctly
    formData.append("frontage", frontage);
    formData.append("size", size);

    formData.append("bedroom", bedroomValue); // Use validated integer value
    formData.append("cars", carsValue); // Use validated integer value
    formData.append("bathrooms", bathrooms);
    formData.append("price", priceValue); // Use validated integer value
    formData.append("floor_plan", floorPlan);
    formData.append("storey_type", storeyType);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/design", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/design");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12   rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6 bg-white">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Single Design</h1>
          {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
          <Link href="/dashboard/design">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"> Back</p>
          </Link>
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className=" border-gray-200 block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className="block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4 my-4  h-64">
          <label className="block  text-sm font-medium text-gray-700 my-2" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 border-gray-200 h-64"
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

        <div className=" my-4 uppercase mt-24">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="frontage">
            Frontage:
          </label>
          <input
            id="frontage"
            className="block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="frontage"
            value={frontage}
            onChange={(e) => setFrontage(e.target.value)}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="size">
            Size:
          </label>
          <input
            id="size"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="bedroom">
            Bedroom:
          </label>
          <input
            id="bedroom"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="bedroom"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="cars">
            Cars:
          </label>
          <input
            id="cars"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="cars"
            value={cars}
            onChange={(e) => setCars(e.target.value)}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="bathrooms">
            Bathrooms:
          </label>
          <input
            id="bathrooms"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="storeyType">
            Storey Type:
          </label>
          <input
            id="storeyType"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="storeyType"
            value={storeyType}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="price">
            Price:
          </label>
          <input
            id="price"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImageOne(e.target.files[0])} // Ensure that this sets the state correctly
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
