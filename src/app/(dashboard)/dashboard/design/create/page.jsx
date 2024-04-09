"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

// dynamic import of quill editor to avoid running into document not defined error when in build
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
  const [floorPlan, setFloorPlan] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [storeyType, setStoreyType] = useState("single");

  const [titleError, setTitleError] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [frontageError, setFrontageError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [bedroomError, setBedroomError] = useState(false);
  const [bathroomError, setBathroomError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [floorPlanError, setFloorPlanError] = useState(false);
  const [carsError, setCarsError] = useState(false);

  const router = useRouter();
  const handleImagePreview = (file, setImagePreview) => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const isTitleInvalid = !title.trim();
    const isOrderInvalid = !order.trim() || isNaN(order.trim());
    const isImageInvalid = !imageOne;
    const isSizeInvalid = !size.trim() || isNaN(size.trim());
    const isPriceInvalid = !price.trim();
    const isBedroomInvalid = !bedroom.trim() || isNaN(bedroom.trim());
    const isBathroomInvalid = !bathrooms.trim() || isNaN(bathrooms.trim());
    const isFloorPlanInvalid = !floorPlan.trim() || isNaN(floorPlan.trim());
    const isFrontageInvalid = !frontage.trim() || isNaN(frontage.trim());
    const isCarsInvalid = !cars.trim() || isNaN(cars.trim());

    if (isTitleInvalid) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (isImageInvalid) {
      setImageError(true);
    } else {
      setImageError(false);
    }

    if (isOrderInvalid) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (isSizeInvalid) {
      setSizeError(true);
    } else {
      setSizeError(false);
    }

    if (isBedroomInvalid) {
      setBedroomError(true);
    } else {
      setBedroomError(false);
    }

    if (isBathroomInvalid) {
      setBathroomError(true);
    } else {
      setBathroomError(false);
    }

    if (isPriceInvalid) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }

    if (isFloorPlanInvalid) {
      setFloorPlanError(true);
    } else {
      setFloorPlanError(false);
    }

    if (isFrontageInvalid) {
      setFrontageError(true);
    } else {
      setFrontageError(false);
    }

    if (isCarsInvalid) {
      setCarsError(true);
    } else {
      setCarsError(false);
    }

    if (
      isTitleInvalid ||
      isOrderInvalid ||
      isImageInvalid ||
      isSizeInvalid ||
      isBedroomInvalid ||
      isBathroomInvalid ||
      isPriceInvalid ||
      isFrontageInvalid ||
      isCarsInvalid
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", editorValue);
    formData.append("order", order);
    formData.append("image", imageOne);
    formData.append("frontage", frontage);
    formData.append("size", size);

    formData.append("bedroom", bedroom);
    formData.append("cars", cars);
    formData.append("bathrooms", bathrooms);
    formData.append("price", price);
    formData.append("floor_plan", floorPlan);
    formData.append("storey_type", "single");

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
      toast.error(error.response.data.error);
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
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              orderError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          {orderError && <p className="text-red-500 text-sm">* Please enter a valid order *</p>}
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
          {titleError && <p className="text-red-500 text-sm">* Please enter a valid title *</p>}
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
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              frontageError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="frontage"
            value={frontage}
            onChange={(e) => setFrontage(e.target.value)}
          />
          {frontageError && <p className="text-red-500 text-sm">* Please enter a valid frontage *</p>}
        </div>
        {/* for floor_plan */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            Floor Plan:
          </label>
          <input
            id="floor_plan"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              floorPlanError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="floor_plan"
            value={floorPlan}
            onChange={(e) => setFloorPlan(e.target.value)}
          />
          {floorPlanError && <p className="text-red-500 text-sm">* Please enter a valid floor plan *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="size">
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
          {sizeError && <p className="text-red-500 text-sm">* Please enter a valid size *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="bedroom">
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
          {bedroomError && <p className="text-red-500 text-sm">* Please enter a valid bedroom count *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="cars">
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
          {carsError && <p className="text-red-500 text-sm">* Please enter a valid cars *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="bathrooms">
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
          {bathroomError && <p className="text-red-500 text-sm">* Please enter a valid bathroom count *</p>}
        </div>
        {/* <div className=" my-4 uppercase">
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
          {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
        </div> */}

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="price">
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
          {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700 my-2" htmlFor="image">
            Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              setImageOne(e.target.files[0]);
              handleImagePreview(e.target.files[0], setImagePreview);
            }}
          />
          {imagePreview && <img src={imagePreview} alt="Image Preview" className="mt-2 h-40 rounded" />}
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
