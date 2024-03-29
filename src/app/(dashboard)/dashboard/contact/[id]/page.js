"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from "next/link";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = ({ params }) => {
  const [formData, setFormData] = useState({
    // order: "",
    title: "",
    map:"",
    description: "",
    short_description: "",
    email : "",
    contact: "",
    location: "",
    seo_title: "",
    seo_keyword: "",
    banner_image: "",
  });
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);
 
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
  }
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
     console.log(updatedData)
      await axiosInstance.put(`/api/contact/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/contact");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-8">
      <ToastContainer />

      <h1 className="text-2xl font-bold">Update Contact</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={formData.order || ""}
              onChange={handleChange}
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              title:
            </label>
            <input
              id="title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
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
            onChange={handleEditorChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image :
            </label>
            <input
              id="banner_image"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              name="banner_image"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e.target.files[0], setImageOnePreview);
              }}
            />
            {imageOnePreview && <img src={`${axiosInstance.defaults.baseURL}${formData.image}`} alt={formData.title} className="h-12 w-12 rounded-full" />}
          </div>
          {/* for short_description */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              short_description:
            </label>
            <input
              id="short_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="short_description"
              value={formData.short_description || ""}
              onChange={handleChange}
            />
          </div>
           {/* for email */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              email:
            </label>
            <input
              id="email"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
           {/* for contact */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              contact:
            </label>
            <input
              id="contact"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="contact"
              value={formData.contact || ""}
              onChange={handleChange}
            />
          </div>
           {/* for location */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              location:
            </label>
            <input
              id="location"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          </div>
           {/* for seo_title */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              seo_title:
            </label>
            <input
              id="seo_title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_title"
              value={formData.seo_title || ""}
              onChange={handleChange}
            />
          </div>
           {/* for seo_keyword */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              seo_keyword:
            </label>
            <input
              id="seo_keyword"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_keyword"
              value={formData.seo_keyword || ""}
              onChange={handleChange}
            />
          </div>
          {/* for map */}
          
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="map">
              map:
            </label>
            <input
              id="map"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="map"
              value={formData.map || ""}
              onChange={handleChange}
            />
          </div>
           
        </div>
        <div className="flex gap-2 pt-1 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href={"/dashboard/contact"}>
            <p
              className="w-full md:w-auto px-4 py-2 bg-red-500
 text-white rounded-md"
            >
              Cancel
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
