"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

// dynamic import of quill editor to avoid running into document not defined error when in build
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Create() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [map, setMap] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [status, setStatus] = useState("");
  //   const [imageOne, setImageOne] = useState(null);
  const [frontage, setFrontage] = useState("");
  const [size, setSize] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [cars, setCars] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [price_start, setPrice_start] = useState("");
  const [price_end, setPrice_end] = useState("");
  const [floorPlan, setFloorPlan] = useState("");
  const [area, setArea] = useState("");
  //   const [imagePreview, setImagePreview] = useState(null);
  //   const [storeyType, setStoreyType] = useState("single");

  const [nameError, setNameError] = useState(false);
  //   const [orderError, setOrderError] = useState(false);
  //   const [imageError, setImageError] = useState(false);
  const [frontageError, setFrontageError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [bedroomError, setBedroomError] = useState(false);
  const [bathroomError, setBathroomError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  //   const [floorPlanError, setFloorPlanError] = useState(false);
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
    const isNameInvalid = !name.trim();
    // const isOrderInvalid = !order.trim() || isNaN(order.trim());
    // const isImageInvalid = !imageOne;
    const isSizeInvalid = !size.trim() || isNaN(size.trim());
    const isPriceInvalid = !price_start.trim();
    const isPriceEndInvalid = !price_end.trim();
    const isBedroomInvalid = !bedrooms.trim() || isNaN(bedrooms.trim());
    const isBathroomInvalid = !bathrooms.trim() || isNaN(bathrooms.trim());
    // const isFloorPlanInvalid = !floorPlan.trim() || isNaN(floorPlan.trim());
    const isFrontageInvalid = !frontage.trim() || isNaN(frontage.trim());
    const isCarsInvalid = !cars.trim() || isNaN(cars.trim());

    if (isNameInvalid) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    // if (isImageInvalid) {
    //   setImageError(true);
    // } else {
    //   setImageError(false);
    // }

    // if (isOrderInvalid) {
    //   setOrderError(true);
    // } else {
    //   setOrderError(false);
    // }

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
    if (isPriceEndInvalid) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }

    // if (isFloorPlanInvalid) {
    //   setFloorPlanError(true);
    // } else {
    //   setFloorPlanError(false);
    // }

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
      isNameInvalid ||
      //   isOrderInvalid ||
      //   isImageInvalid ||
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
    formData.append("name", name);
    formData.append("location", location);
    formData.append("map", map);
    formData.append("description", editorValue);
    // formData.append("order", order);
    // formData.append("image", imageOne);
    formData.append("frontage", frontage);
    formData.append("size", size);

    formData.append("bedrooms", bedrooms);
    formData.append("cars", cars);
    formData.append("bathrooms", bathrooms);
    formData.append("price_start", price_start);
    formData.append("price_end", price_end);
    // formData.append("floor_plan", floorPlan);
    formData.append("package_type", "LAND");
    formData.append("status", status);
    formData.append("area", area);

    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/packages", formData);

      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/land");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error(error.response.data.error);
    }
  };

  // onclick for the dropdown
  const onClick = ({ key }) => {
    if (key === "1") {
      setStatus("For sale");
    } else if (key === "2") {
      setStatus("Sold");
    }
  };
  // status menu items
  const items = [
    {
      label: "For Sale",
      key: "1",
    },
    {
      label: "Sold",
      key: "2",
    },
  ];

  return (
    <div className="my-12   rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleFormSubmit} className="p-6 bg-white">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Create Land Packages</h1>
          {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
          <Link href="/dashboard/land">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"> Back</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* <div className=" my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                orderError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="order"
              value={formData.order || ""}
              
            />
            {orderError && <p className="text-red-500 text-sm">* Please enter a valid order *</p>}
          </div> */}
          <div className=" my-4 uppercase">
            <label className="block text-sm font-medium  text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                nameError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="text-red-500 text-sm">* Please enter a valid name *</p>}
          </div>
          <div className=" my-4 uppercase">
            <label className="block text-sm font-medium  text-gray-700" htmlFor="name">
              Area :
            </label>
            <input
              id="area"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none  "focus:border-blue-500"
              }`}
              type="text"
              name="area"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div className=" my-4 uppercase">
            <label className="block text-sm font-medium  text-gray-700" htmlFor="name">
              Location:
            </label>
            <input
              id="location"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className=" my-4 uppercase">
            <label className="block text-sm font-medium  text-gray-700" htmlFor="name">
              Map:
            </label>
            <textarea
              id="map"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="map"
              onChange={(e) => setMap(e.target.value)}
            />
          </div>

          {/* for frontage */}
          <div className="uppercase my-4">
            <label className="block text-sm    font-medium text-gray-700" htmlFor="name">
              frontage:
            </label>
            <input
              id="frontage"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                frontageError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="frontage"
              onChange={(e) => setFrontage(e.target.value)}
            />
            {frontageError && <p className="text-red-500 text-sm">* Please enter a valid frontage *</p>}
          </div>
          {/* for size */}
          <div className="uppercase my-4">
            <label className="block text-sm   font-medium text-gray-700" htmlFor="name">
              size:
            </label>
            <input
              id="size"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                sizeError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="size"
              onChange={(e) => setSize(e.target.value)}
            />
            {sizeError && <p className="text-red-500 text-sm">* Please enter a valid size *</p>}
          </div>
          {/* for bedroom */}
          <div className="uppercase my-4">
            <label className="block text-sm   font-medium text-gray-700" htmlFor="name">
              bedroom:
            </label>
            <input
              id="bedrooms"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                bedroomError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="bedrooms"
              onChange={(e) => setBedrooms(e.target.value)}
            />
            {bedroomError && <p className="text-red-500 text-sm">* Please enter a valid bedroom count *</p>}
          </div>
          {/* for cars */}
          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              cars:
            </label>
            <input
              id="cars"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                carsError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="cars"
              onChange={(e) => setCars(e.target.value)}
            />
            {carsError && <p className="text-red-500 text-sm">* Please enter a valid cars *</p>}
          </div>

          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              bathrooms:
            </label>
            <input
              id="bathrooms"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                bathroomError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="bathrooms"
              onChange={(e) => setBathrooms(e.target.value)}
            />
            {bathroomError && <p className="text-red-500 text-sm">* Please enter a valid bathroom count *</p>}
          </div>

          <div className="uppercase">
            <label className="block text-sm   font-medium text-gray-700" htmlFor="name">
              Starting Price:
            </label>
            <input
              id="price_start"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                priceError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="price_start"
              onChange={(e) => setPrice_start(e.target.value)}
            />
            {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
          </div>
          <div className="uppercase">
            <label className="block text-sm   font-medium text-gray-700" htmlFor="name">
              Closing Price:
            </label>
            <input
              id="price_end"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                priceError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="price_end"
              onChange={(e) => setPrice_end(e.target.value)}
            />
            {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
          </div>

          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <Link href={"#"} onClick={(e) => e.preventDefault()}>
              <Space className="border px-4 py-2 rounded-sm">
                Status
                <DownOutlined />
              </Space>
            </Link>
          </Dropdown>
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

        {/* <div className=" my-4 uppercase">
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
        </div> */}

        <div className="flex gap-2 mt-20">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
