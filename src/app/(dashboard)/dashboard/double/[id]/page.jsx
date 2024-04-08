"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from "next/link";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong } from "react-icons/fa6";
const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    order: "",
    title: "",
    // description: "",
    image: "",
    other_image: "",
    frontage: "",
    size: "",
    bedroom: "",
    cars: "",
    bathrooms: "",
    price: "",
    floor_plan: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);
  const [imageTwoPreview, setImageTwoPreview] = useState(null);
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

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/design/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        setImageOnePreview(`${axiosInstance.defaults.baseURL}${responseData.image}` || null);
        setImageTwoPreview(`${axiosInstance.defaults.baseURL}${responseData.other_image}` || null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      handleImagePreview(files[0], name === "image" ? setImageOnePreview : setImageTwoPreview);
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

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleImagePreview = (file, setImagePreview) => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (isNaN(formData.order.trim()) || !formData.order.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (isNaN(formData.frontage.trim()) || !formData.frontage.trim()) {
      setFrontageError(true);
    } else {
      setFrontageError(false);
    }
    if (isNaN(formData.size.trim()) || !formData.size.trim()) {
      setSizeError(true);
    } else {
      setSizeError(false);
    }
    if (!formData.price.trim()) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
    if (!formData.floor_plan.trim()) {
      setFloorPlanError(true);
    } else {
      setFloorPlanError(false);
    }
    if (isNaN(formData.bathrooms.trim()) || !formData.bathrooms.trim()) {
      setBathroomError(true);
    } else {
      setBathroomError(false);
    }
    if (isNaN(formData.bedroom.trim()) || !formData.bedroom.trim()) {
      setBedroomError(true);
    } else {
      setBedroomError(false);
    }
    if (isNaN(formData.cars.trim()) || !formData.cars.trim()) {
      setCarsError(true);
    } else {
      setCarsError(false);
    }

    if (
      !formData.title.trim() ||
      isNaN(formData.order.trim()) ||
      !formData.order.trim() ||
      isNaN(formData.bedroom.trim()) ||
      !formData.bedroom.trim() ||
      isNaN(formData.size.trim()) ||
      !formData.size.trim() ||
      isNaN(formData.frontage.trim()) ||
      !formData.frontage.trim() ||
      isNaN(formData.floor_plan.trim()) ||
      isNaN(formData.bathrooms.trim() || !formData.bathrooms.trim()) ||
      !formData.bedroom.trim() ||
      !formData.price.trim()
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }
    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
      updatedData.append("title", formData.title);
      updatedData.append("frontage", formData.frontage);
      updatedData.append("size", formData.size);
      updatedData.append("bedroom", formData.bedroom);
      updatedData.append("cars", formData.cars);
      updatedData.append("bathrooms", formData.bathrooms);
      updatedData.append("price", formData.price);
      updatedData.append("floor_plan", formData.floor_plan);
      updatedData.append("storey_type", "double");
      updatedData.append("description", editorValue);
      if (formData.image) {
        updatedData.append("image", formData.image);
      }

      if (formData.other_image) {
        updatedData.append("other_image", formData.other_image);
      }

      await axiosInstance.put(`/api/design/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/double");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="my-12  bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Update Double Design</h1>
          {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
          <Link href="/dashboard/double">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order"
            value={formData.order || ""}
            onChange={handleChange}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Title:
          </label>
          <input
            id="title"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              titleError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
          {titleError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>

        <div className=" my-4 ">
          <label className="block text-sm font-medium  my-2 text-gray-700" htmlFor="description">
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
            onChange={(value) => handleEditorChange(value)}
          />
        </div>

        {/* for frontage */}
        <div className="mt-14 my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            frontage:
          </label>
          <input
            id="frontage"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              frontageError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="frontage"
            value={formData.frontage || ""}
            onChange={handleChange}
          />
          {frontageError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        {/* for size */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            size:
          </label>
          <input
            id="size"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              sizeError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="size"
            value={formData.size || ""}
            onChange={handleChange}
          />
          {sizeError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        {/* for bedroom */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            bedroom:
          </label>
          <input
            id="bedroom"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              bedroomError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="bedroom"
            value={formData.bedroom || ""}
            onChange={handleChange}
          />
          {bedroomError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        {/* for cars */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            cars:
          </label>
          <input
            id="cars"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              carsError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="cars"
            value={formData.cars || ""}
            onChange={handleChange}
          />
          {carsError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>

        <div className=" my-4 uppercase">
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
            value={formData.bathrooms || ""}
            onChange={handleChange}
          />
          {bathroomError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            price:
          </label>
          <input
            id="price"
            className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
              priceError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
          />
          {priceError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
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
            value={formData.floor_plan || ""}
            onChange={handleChange}
          />
          {floorplanError && <p className="text-red-500 text-sm">* Please enter a valid number *</p>}
        </div>
        {/* for storey_type */}
        {/* <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            Storey Type:
          </label>
          <input
            id="storey_type"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="storey_type"
            value={formData.storey_type || ""}
            onChange={handleChange}
          />
        </div> */}
        <div className="grid grid-cols-2">
          <div className=" my-4 uppercase">
            <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="image">
              Ground Floor :
            </label>
            <input
              id="image"
              type="file"
              name="image"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e.target.files[0], setImageOnePreview);
              }}
            />
            {imageOnePreview && <img src={imageOnePreview} alt={formData.title} className="h-40 rounded" />}
          </div>
          <div className=" my-4 uppercase">
            <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="other_image">
              First Floor :
            </label>
            <input
              id="other_image"
              type="file"
              name="other_image" // Changed from image_two to other_image
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e.target.files[0], setImageTwoPreview);
              }}
            />
            {imageTwoPreview && <img src={imageTwoPreview} alt={formData.title} className="h-40 rounded" />}
          </div>
        </div>

        <div className="flex gap-2 pt-1 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
