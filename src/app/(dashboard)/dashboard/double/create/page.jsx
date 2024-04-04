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
  const [imageTwo, setImageTwo] = useState(null);
  const [frontage, setFrontage] = useState("");
  const [size, setSize] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [cars, setCars] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [price, setPrice] = useState("");
  const [floorPlan, setFloorPlan] = useState("");
  const [storeyType, setStoreyType] = useState("double");

  const router = useRouter();

  const [orderError, setOrderError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [frontageError, setFrontageError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [bedroomError, setBedroomError] = useState(false);
  const [bathroomError, setBathroomError] = useState(false);
  const [floorplanError, setFloorPlanError] = useState(false);
  const [carsError, setCarsError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageTwoError, setImageTwoError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (isNaN(order.trim()) || !order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (!imageOne) {
      setImageError(true);
    } else {
      setImageError(false);
    }
    if (!imageTwo) {
      setImageTwoError(true);
    } else {
      setImageTwoError(false);
    }

    if (isNaN(frontage.trim()) || !frontage.trim()) {
      setFrontageError(true);
    } else {
      setFrontageError(false);
    }
    if (isNaN(size.trim()) || !size.trim()) {
      setSizeError(true);
    } else {
      setSizeError(false);
    }
    if (isNaN(price.trim()) || !price.trim()) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
    if (isNaN(floorPlan.trim()) || !floorPlan.trim()) {
      setFloorPlanError(true);
    } else {
      setFloorPlanError(false);
    }
    if (isNaN(bathrooms.trim()) || !bathrooms.trim()) {
      setBathroomError(true);
    } else {
      setBathroomError(false);
    }
    if (isNaN(bedroom.trim()) || !bedroom.trim()) {
      setBedroomError(true);
    } else {
      setBedroomError(false);
    }
    if (isNaN(cars.trim()) || !cars.trim()) {
      setCarsError(true);
    } else {
      setCarsError(false);
    }

    if (
      !title.match(/^\D+$/) ||
      !title.trim() ||
      !imageOne ||
      !imageTwo ||
      isNaN(order.trim()) ||
      !order.trim() ||
      isNaN(bedroom.trim()) ||
      !bedroom.trim() ||
      isNaN(size.trim()) ||
      !size.trim() ||
      isNaN(frontage.trim()) ||
      !frontage.trim() ||
      isNaN(floorPlan.trim()) ||
      !floorPlan.trim() ||
      isNaN(bathrooms.trim()) ||
      !bathrooms.trim() ||
      isNaN(bedroom.trim()) ||
      !bedroom.trim() ||
      isNaN(price.trim()) ||
      !price.trim() ||
      isNaN(price.trim()) ||
      !price.trim()
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", editorValue);
    formData.append("order", order);
    formData.append("image", imageOne); // Append image file correctly
    formData.append("other_image", imageTwo);

    formData.append("frontage", frontage);
    formData.append("size", size);
    formData.append("bedroom", bedroom);
    formData.append("cars", cars);
    formData.append("bathrooms", bathrooms);

    formData.append("price", price);
    formData.append("floor_plan", floorPlan);
    formData.append("storey_type", storeyType);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/design", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/double");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="my-12  bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Double Design</h1>
          {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
          <Link href="/dashboard/double">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              titleError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>

        <div className="mb-4">
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
            value={editorValue}
            theme="snow"
            onChange={(value) => setEditorValue(value)}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="frontage">
            Frontage:
          </label>
          <input
            id="frontage"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              frontageError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="frontage"
            value={frontage}
            onChange={(e) => setFrontage(e.target.value)}
          />
          {frontageError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        {/* for floor_plan */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            Floor Plan:
          </label>
          <input
            id="floor_plan"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              floorplanError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="floor_plan"
            value={floorPlan}
            onChange={(e) => setFloorPlan(e.target.value)}
          />
          {floorplanError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="size">
            Size:
          </label>
          <input
            id="size"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              sizeError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          {sizeError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="bedroom">
            Bedroom:
          </label>
          <input
            id="bedroom"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              bedroomError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="bedroom"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          />
          {bedroomError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="cars">
            Cars:
          </label>
          <input
            id="cars"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              carsError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="cars"
            value={cars}
            onChange={(e) => setCars(e.target.value)}
          />
          {carsError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="bathrooms">
            Bathrooms:
          </label>
          <input
            id="bathrooms"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              bathroomError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
          {bathroomError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="storeyType">
            Storey Type:
          </label>
          <input
            id="storeyType"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="storeyType"
            value={storeyType}
          />
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="price">
            Price:
          </label>
          <input
            id="price"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              priceError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {priceError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>

        <div className="grid grid-cols-2">
          <div className=" my-4 uppercase">
            <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="image">
              Image:
            </label>
            <input
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => {
                setImageOne(e.target.files[0]);
                setImageError(false);
              }} 
            />
            {imageError && <p className="text-red-500 text-sm ">* Please enter a image *</p>}
          </div>
          <div className=" my-4 uppercase">
            <label className="block my-2 text-sm font-medium text-gray-700" htmlFor="other_image">
              Image Two:
            </label>
            <input
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="other_image"
              accept="other_image/*"
              onChange={(e) => {
                setImageTwo(e.target.files[0]);
                setImageTwoError(false);
              }} 
            />
            {imageTwoError && <p className="text-red-500 text-sm ">* Please enter a image *</p>}
          </div>
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
