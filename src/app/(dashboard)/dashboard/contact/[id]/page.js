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
    // order: "",
    title: "",
    map: "",
    description: "",
    short_description: "",
    email: "",
    contact: "",
    location: "",
    seo_title: "",
    seo_keyword: "",
    banner_image: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [seoTitleError, setSeoTitleError] = useState("");
  const [seoKeywordError, setSeoKeywordError] = useState("");

  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/contact/${params.id}`);
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

    if (!formData.title.trim() || !formData.title.match(/^\D+$/)) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!formData.seo_keyword.trim() || !formData.seo_keyword.match(/^\D+$/)) {
      setSeoKeywordError(true);
    } else {
      setSeoKeywordError(false);
    }

    if (!formData.seo_title.trim() || !formData.seo_title.match(/^\D+$/)) {
      setSeoTitleError(true);
    } else {
      setSeoTitleError(false);
    }

    if (!/^\d+$/.test(formData.contact)) {
      setContactError(true);
    } else {
      setContactError(false);
    }
    // Check if there are any validation errors
    if (
      !formData.title.trim() ||
      !formData.title.match(/^\D+$/) ||
      !/^\d+$/.test(formData.contact) ||
      !formData.seo_keyword.trim() ||
      !formData.seo_keyword.match(/^\D+$/) ||
      !formData.seo_title.trim() ||
      !formData.seo_title.match(/^\D+$/)
    ) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append("title", formData.title);
      updatedData.append("short_description", formData.short_description);
      updatedData.append("email", formData.email);
      updatedData.append("map", formData.map);
      updatedData.append("contact", formData.contact);
      updatedData.append("location", formData.location);
      updatedData.append("seo_title", formData.seo_title);
      updatedData.append("description", editorValue);
      updatedData.append("seo_keyword", formData.seo_keyword);

      await axiosInstance.put(`/api/contact/${params.id}`, updatedData);

      toast.success("Data edited successfully");
      router.push("/dashboard/contact");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

      <form onSubmit={handleSubmit} className="p-6">
        <div className=" flex justify-between my-2">
          <h1 className="font-[600] text-[24px]  text-gray-700">Update Contact</h1>

          <Link href="/dashboard/contact">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center ">
              <FaArrowLeftLong className="mx-2" /> Back
            </p>
          </Link>
        </div>

        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="title">
            title:
          </label>
          <input
            id="title"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              titleError ? "border-red-500" : ""
            }`}
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
          {titleError && <p className="text-red-500 text-sm">* Please enter a valid title *</p>}
        </div>

        <div className=" my-4 ">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-64 border-gray-200"
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
            onChange={handleEditorChange}
          />
        </div>

        <div className="mt-24 uppercase my-4">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="image">
            Image :
          </label>
          <input
            id="banner_image"
            type="file"
            name="banner_image"
            onChange={(e) => {
              handleChange(e);
              handleImagePreview(e.target.files[0], setImageOnePreview);
            }}
          />
          {imageOnePreview && (
            <img src={`${axiosInstance.defaults.baseURL}${formData.image}`} alt={formData.title} className="h-12 w-12 rounded-full" />
          )}
        </div>
        {/* for short_description */}
        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="name">
            Short Description:
          </label>
          <input
            id="short_description"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="short_description"
            value={formData.short_description || ""}
            onChange={handleChange}
          />
        </div>
        {/* for email */}
        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="name">
            Email:
          </label>
          <input
            id="email"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              emailError ? "border-red-500" : ""
            }`}
            type="text"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
          {emailError && <p className="text-red-500 text-sm">* {emailError} *</p>}
        </div>
        {/* for contact */}
        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="name">
            Contact:
          </label>
          <input
            id="contact"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              contactError ? "border-red-500" : ""
            }`}
            type="text"
            name="contact"
            value={formData.contact || ""}
            onChange={handleChange}
          />
          {contactError && <p className="text-red-500 text-sm">* Please enter a valid contact *</p>}
        </div>
        {/* for location */}
        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="name">
            Location:
          </label>
          <input
            id="location"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
          />
        </div>
        {/* for seo_title */}
        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="name">
            Seo Title:
          </label>
          <input
            id="seo_title"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              seoTitleError ? "border-red-500" : ""
            }`}
            type="text"
            name="seo_title"
            value={formData.seo_title || ""}
            onChange={handleChange}
          />
          {seoTitleError && <p className="text-red-500 text-sm">* Please enter a valid seo title *</p>}
        </div>
        {/* for seo_keyword */}
        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="name">
            Seo Keyword:
          </label>
          <input
            id="seo_keyword"
            className={`block border-gray-200 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              seoKeywordError ? "border-red-500" : ""
            }`}
            type="text"
            name="seo_keyword"
            value={formData.seo_keyword || ""}
            onChange={handleChange}
          />
          {seoKeywordError && <p className="text-red-500 text-sm">* Please enter a valid keyword *</p>}
        </div>
        {/* for map */}

        <div className=" my-4 uppercase">
          <label className="block text-sm my-2 font-medium text-gray-700" htmlFor="map">
            Map:
          </label>
          <input
            id="map"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="map"
            value={formData.map || ""}
            onChange={handleChange}
          />
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
