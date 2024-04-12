"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import dynamic from "next/dynamic";
import Link from "next/link";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MyDropzone } from "../../component/DragDrop";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
// dynamic import of quill editor to avoid running into document not defined error when in build
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    id: params.id,
    name: "",
    status: "",
    zoning: "",
    area: "",
    map: "",
    topography: "",
    description: "",
    location: "",
    map: "",
    image: "",
    frontage: "",
    size: "",
    bedrooms: "",
    cars: "",
    bathrooms: "",
    price_start: "",
    price_end: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

  const [nameError, setNameError] = useState(false);
  const [frontageError, setFrontageError] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const [bedroomError, setBedroomError] = useState(false);
  const [bathroomError, setBathroomError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [carsError, setCarsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/packages/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        setImagePreview(`${axiosInstance.defaults.baseURL}${responseData.image}` || "");
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
  // onclick for the dropdown
  const onClick = ({ key }) => {
    if (key === "1") {
      formData.status = "For sale";
    } else if (key === "2") {
      formData.status = "Sold";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameInvalid = !formData.name.trim();
    const isSizeInvalid = !formData.size.trim() || isNaN(formData.size.trim());
    const isBedroomInvalid = !formData.bedrooms.trim() || isNaN(formData.bedrooms.trim());
    const isBathroomInvalid = !formData.bathrooms.trim() || isNaN(formData.bathrooms.trim());
    const isPriceInvalid = !formData.price_start.trim();
    const isPriceEndInvalid = !formData.price_end.trim();
    const isFrontageInvalid = !formData.frontage.trim() || isNaN(formData.frontage.trim());
    const isCarsInvalid = !formData.cars.trim() || isNaN(formData.cars.trim());

    setNameError(isNameInvalid);
    setSizeError(isSizeInvalid);
    setBedroomError(isBedroomInvalid);
    setBathroomError(isBathroomInvalid);
    setPriceError(isPriceInvalid || isPriceEndInvalid);
    setFrontageError(isFrontageInvalid);
    setCarsError(isCarsInvalid);

    if (
      isNameInvalid ||
      isSizeInvalid ||
      isBedroomInvalid ||
      isBathroomInvalid ||
      isPriceInvalid ||
      isPriceEndInvalid ||
      isFrontageInvalid ||
      isCarsInvalid
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("name", formData.name);
      updatedData.append("frontage", formData.frontage);
      updatedData.append("size", formData.size);
      updatedData.append("bedrooms", formData.bedrooms);
      updatedData.append("area", formData.area);
      updatedData.append("map", formData.map);
      updatedData.append("bathrooms", formData.bathrooms);
      updatedData.append("description", editorValue);
      updatedData.append("price_start", formData.price_start);
      updatedData.append("price_end", formData.price_end);
      updatedData.append("location", formData.location);
      updatedData.append("status", formData.status);

      await axiosInstance.put(`/api/packages/u/${params.id}`, updatedData);

      toast.success("Data edited successfully");
      // Redirect to the desired page after successful update
      router.push("/dashboard/landHouse");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="my-12 bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex justify-between my-2">
          <h1 className="font-[600] text-[24px] text-gray-700">Update Land & House package</h1>
          <Link href="/dashboard/landHouse">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                nameError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
            {nameError && <p className="text-red-500 text-sm">* Please enter a valid name *</p>}
          </div>
          <div className="my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Location:
            </label>
            <input
              id="location"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          </div>
          <div className="my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Map:
            </label>
            <textarea
              id="map"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="map"
              value={formData.map || ""}
              onChange={handleChange}
            />
          </div>
          <div className="my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Area:
            </label>
            <input
              id="area"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="area"
              value={formData.area || ""}
              onChange={handleChange}
            />
          </div>
          <div className="my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Topography:
            </label>
            <input
              id="topography"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="topography"
              value={formData.topography || ""}
              onChange={handleChange}
            />
          </div>
          <div className="my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Zoning:
            </label>
            <input
              id="zoning"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${"focus:border-blue-500"}`}
              type="text"
              name="zoning"
              value={formData.zoning || ""}
              onChange={handleChange}
            />
          </div>
          <div className="uppercase my-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Frontage:
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
            {frontageError && <p className="text-red-500 text-sm">* Please enter a valid frontage *</p>}
          </div>
          <div className="uppercase my-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Size:
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
            {sizeError && <p className="text-red-500 text-sm">* Please enter a valid size *</p>}
          </div>
          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Bedrooms:
            </label>
            <input
              id="bedrooms"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                bedroomError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="bedrooms"
              value={formData.bedrooms || ""}
              onChange={handleChange}
            />
            {bedroomError && <p className="text-red-500 text-sm">* Please enter a valid bedroom count *</p>}
          </div>
          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Cars:
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
            {carsError && <p className="text-red-500 text-sm">* Please enter a valid cars *</p>}
          </div>
          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Bathrooms:
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
            {bathroomError && <p className="text-red-500 text-sm">* Please enter a valid bathroom count *</p>}
          </div>
          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Starting Price:
            </label>
            <input
              id="price_start"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                priceError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="price_start"
              value={formData.price_start || ""}
              onChange={handleChange}
            />
            {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
          </div>
          <div className="uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Closing Price:
            </label>
            <input
              id="price_end"
              className={`block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none ${
                priceError ? "border-red-500" : "focus:border-blue-500"
              }`}
              type="text"
              name="price_end"
              value={formData.price_end || ""}
              onChange={handleChange}
            />
            {priceError && <p className="text-red-500 text-sm">* Please enter a valid price *</p>}
          </div>

          <div className="my-4">
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
        </div>
        <div className="my-4">
          <label className="block text-sm font-medium my-2 text-gray-700" htmlFor="description">
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
        <div className="flex gap-2 pt-1 mt-14">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </div>
      </form>
      <div className="bg-white shadow-md rounded-md container mx-auto p-5">
        <MyDropzone id={formData.id} />
      </div>
    </div>
  );
};

export default Update;
