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
    description: "",
    image: "",
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

  const router = useRouter();

  const [titleError, setTitleError] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const [frontageError, setFrontageError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [bedroomError, setBedroomError] = useState(false);
  const [bathroomError, setBathroomError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [floorPlanError, setFloorPlanError] = useState(false);
  const [carsError, setCarsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/design/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        
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
      // handleImagePreview(files[0], name === "image_one" ? setImageOnePreview : setImageTwoPreview);
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        description: editorValue,
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

    const isTitleInvalid = !formData.title.trim() || !formData.title.match(/^\D+$/);
    const isOrderInvalid = !formData.order.trim() || isNaN(formData.order.trim());
    const isSizeInvalid = !formData.size.trim() || isNaN(formData.size.trim());
    const isBedroomInvalid = !formData.bedroom.trim() || isNaN(formData.bedroom.trim());
    const isBathroomInvalid = !formData.bathrooms.trim() || isNaN(formData.bathrooms.trim());
    const isPriceInvalid = !formData.price.trim() || isNaN(formData.price.trim());
    const isFloorPlanInvalid = !formData.floor_plan.trim() || isNaN(formData.floor_plan.trim());
    const isFrontageInvalid = !formData.frontage.trim() || isNaN(formData.frontage.trim());
    const isCarsInvalid = !formData.cars.trim() || isNaN(formData.cars.trim());

    if (isTitleInvalid) {
      setTitleError(true);
    } else {
      setTitleError(false);
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

    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
      updatedData.append("title", formData.title);
      updatedData.append("frontage", formData.frontage);
      updatedData.append("size", formData.size);
      updatedData.append("bedroom", formData.bedroom);
      updatedData.append("cars", formData.cars);
      updatedData.append("bathrooms", formData.bathrooms);
      updatedData.append("description", editorValue);
      updatedData.append("price", formData.price);
      updatedData.append("floor_plan", formData.floor_plan);
      updatedData.append("storey_type", "single");
      updatedData.append("image", formData.image);

      await axiosInstance.put(`/api/design/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/design");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="my-12  bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Update Single Design</h1>
          {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
          <Link href="/dashboard/design">
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
            className=" border-gray-200 block   w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={formData.order || ""}
            onChange={handleChange}
          />
          {orderError && <p className="text-red-500 text-sm">* Please enter a valid order *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="name">
            Title:
          </label>
          <input
            id="title"
            className=" border-gray-200 block w-full   px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={(value) => handleEditorChange(value)}
          />
          {titleError && <p className="text-red-500 text-sm">* Please enter a valid title *</p>}
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
            onChange={(value) => setEditorValue(value)}
          />
        </div>

        <div className="mt-20 my-4 ">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="image">
            Image :
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
          {imageOnePreview && (
            <img src={`${axiosInstance.defaults.baseURL}${formData.image}`} alt={formData.title} className="h-12 w-12 rounded-full" />
          )}
        </div>
        {/* for frontage */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            frontage:
          </label>
          <input
            id="frontage"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="frontage"
            value={formData.frontage || ""}
            onChange={handleChange}
          />
          {frontageError && <p className="text-red-500 text-sm">* Please enter a valid frontage *</p>}
        </div>
        {/* for size */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            size:
          </label>
          <input
            id="size"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="size"
            value={formData.size || ""}
            onChange={handleChange}
          />
          {sizeError && <p className="text-red-500 text-sm">* Please enter a valid size *</p>}
        </div>
        {/* for bedroom */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            bedroom:
          </label>
          <input
            id="bedroom"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="bedroom"
            value={formData.bedroom || ""}
            onChange={handleChange}
          />
          {bedroomError && <p className="text-red-500 text-sm">* Please enter a valid bedroom count *</p>}
        </div>
        {/* for cars */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            cars:
          </label>
          <input
            id="cars"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="cars"
            value={formData.cars || ""}
            onChange={handleChange}
          />
          {carsError && <p className="text-red-500 text-sm">* Please enter a valid cars *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            bathrooms:
          </label>
          <input
            id="bathrooms"
            className="block w-full px-4  my-2 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="bathrooms"
            value={formData.bathrooms || ""}
            onChange={handleChange}
          />
          {bathroomError && <p className="text-red-500 text-sm">* Please enter a valid bathroom count *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            price:
          </label>
          <input
            id="price"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
          />
        </div>
        {/* for floor_plan */}
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            floor_plan:
          </label>
          <input
            id="floor_plan"
            className="block w-full px-4  py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="floor_plan"
            value={formData.floor_plan || ""}
            onChange={handleChange}
          />
          {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
        </div>
        {/* for storey_type */}
        {/* <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            storey_type:
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
