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
    order_number: "",
    image: "",
    name: "",
    short_description: "",
    seo_title: "",
    seo_description: "",
    seo_schema: "",
    seo_keywords: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

  const [orderError, setOrderError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [seoTitleError, setSeoTitleError] = useState(false);
  const [seoKeywordError, setSeoKeywordError] = useState(false);
  const [seoSchemaError, setSeoSchemaError] = useState(false);
  const [seoDescriptionError, setSeoDescriptionError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/building/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setImagePreview(`${axiosInstance.defaults.baseURL}${responseData.image}` || null);
        setEditorValue(responseData.short_description || "");
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
      handleImagePreview(files[0], name === "image" && setImagePreview);
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

    if (!formData.name.trim() || !formData.name.match(/^\D+$/)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!formData.seo_title.match(/^\D+$/)) {
      setSeoTitleError(true);
    } else {
      setSeoTitleError(false);
    }
    if (!formData.seo_keywords.match(/^\D+$/)) {
      setSeoKeywordError(true);
    } else {
      setSeoKeywordError(false);
    }
    if (!formData.seo_description.match(/^\D+$/)) {
      setSeoDescriptionError(true);
    } else {
      setSeoDescriptionError(false);
    }
    if (!formData.seo_schema.match(/^\D+$/)) {
      setSeoSchemaError(true);
    } else {
      setSeoSchemaError(false);
    }
    if (isNaN(formData.order_number.trim()) || !formData.order_number.trim()) {
      setOrderError(true);
    } else {
      setOrderError(false);
    }

    if (
      !formData.name.trim() ||
      !formData.name.match(/^\D+$/) ||
      !formData.seo_title.match(/^\D+$/) ||
      !formData.seo_keywords.match(/^\D+$/) ||
      !formData.seo_description.match(/^\D+$/) ||
      !formData.seo_schema.match(/^\D+$/) ||
      isNaN(formData.order.trim()) ||
      !formData.order.trim()
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("order_number", formData.order_number);
      updatedData.append("name", formData.name);
      updatedData.append("short_description", editorValue);
      updatedData.append("seo_title", formData.seo_title);
      updatedData.append("seo_description", formData.seo_description);
      updatedData.append("seo_schema", formData.seo_schema);
      updatedData.append("seo_keywords", formData.seo_keywords);

      updatedData.append("description", editorValue);
      if (formData.image) {
        updatedData.append("image", formData.image);
      }

      await axiosInstance.put(`/api/building/${params.id}`, updatedData);

      toast("Data updated successfully");
      router.push("/dashboard/building");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      {/* <h1 className="text-2xl font-bold">Update Building </h1> */}
      <form onSubmit={handleSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Update Building</h1>

          <Link href="/dashboard/building">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="order_number">
            Order Number:
          </label>
          <input
            id="order_number"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${orderError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="order_number"
            value={formData.order_number || ""}
            onChange={handleChange}
          />
          {orderError && <p className="text-red-500 text-sm ">* Please enter a valid number *</p>}
        </div>

        <div className=" my-4 uppercase">
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
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
          {nameError && <p className="text-red-500 text-sm ">* Please enter a valid title *</p>}
        </div>

        {/* for bedroom */}
        <div className=" my-4 ">
          <label className="block text-sm my-2  font-medium text-gray-700" htmlFor="short_description">
            Short Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-full"
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
        {/* for cars */}
        <div className="mt-10 my-4 uppercase">
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
            Seo Title:
          </label>
          <input
            id="seo_title"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${seoTitleError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="seo_title"
            value={formData.seo_title || ""}
            onChange={handleChange}
          />
          {seoTitleError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>
        {/* for bathrooms */}
        <div className=" my-4 uppercase">
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
            Seo Description:
          </label>
          <input
            id="seo_description"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${
              seoDescriptionError ? "border-red-500" : "focus:border-blue-500"
            }`}
            type="text"
            name="seo_description"
            value={formData.seo_description || ""}
            onChange={handleChange}
          />
          {seoDescriptionError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>
        {/* for seo_schema */}
        <div className=" my-4 uppercase">
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="seo_schema">
            Seo Schema:
          </label>
          <input
            id="seo_schema"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${seoSchemaError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="seo_schema"
            value={formData.seo_schema || ""}
            onChange={handleChange}
          />
          {seoSchemaError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>
        {/* for seo_keywords */}
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium  my-2  text-gray-700" htmlFor="seo_keywords">
            Seo Keywords:
          </label>
          <input
            id="seo_keywords"
            className={`block w-full border-gray-200 rounded-md focus:outline-none ${seoKeywordError ? "border-red-500" : "focus:border-blue-500"}`}
            type="text"
            name="seo_keywords"
            value={formData.seo_keywords || ""}
            onChange={handleChange}
          />
          {seoKeywordError && <p className="text-red-500 text-sm ">* Please enter a string value *</p>}
        </div>
        <div className=" my-4 uppercase">
          <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="image">
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
          {imagePreview && <img src={`${axiosInstance.defaults.baseURL}${formData.image}`} alt={formData.title} className="h-40 rounded" />}
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
