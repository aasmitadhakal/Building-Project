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
    order: "",
    title: "",
    description: "",
    image: "",
    slug:"",
    name: "",
    banner : "",
    short_description: "",
    seo_title: "",
    seo_description: "",
    seo_schema: "",
    seo_keywords: "",
    status : "",
    
    
  });
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);
 
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/service/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
         setEditorValue(responseData.description || "");
        // setEditorValue(responseData.title || "");
        // setEditorValue(responseData.frontage || "");
        // setEditorValue(responseData.size || "");
        // setEditorValue(responseData.bedroom || "");
        // setEditorValue(responseData.price || "");
        // setEditorValue(responseData.storey_type || "");
        // setImageOnePreview(responseData.image || null);
      
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
    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
      updatedData.append("name", formData.name);
      updatedData.append("slug", formData.slug);
      updatedData.append("banner", formData.banner);
      updatedData.append("short_description", formData.short_description);
      updatedData.append("seo_title", formData.seo_title);
      updatedData.append("seo_description", formData.seo_description);
      updatedData.append("seo_schema", formData.seo_schema);
      updatedData.append("seo_keywords", formData.seo_keywords);
      updatedData.append("status", formData.status);
      updatedData.append("description", editorValue);
      // updatedData.append("description", editorValue);
      // if (formData.image) {
      //   updatedData.append("image", formData.image);
      // }
     
      await axiosInstance.put(`/api/service/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/services");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-8">
      <ToastContainer />

      <h1 className="text-2xl font-bold">Update services </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
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
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Title:
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
              id="image"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              name="image"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e.target.files[0], setImageOnePreview);
              }}
            />
            {imageOnePreview && <img src={`${axiosInstance.defaults.baseURL}${formData.image}`} alt={formData.title} className="h-12 w-12 rounded-full" />}
          </div>
          {/* for frontage */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              frontage:
            </label>
            <input
              id="frontage"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="frontage"
              value={formData.frontage || ""}
              onChange={handleChange}
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="slug">
              Slug:
            </label>
            <input
              id="slug"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="slug"
              value={formData.slug || ""}
              onChange={handleChange}
            />
          </div>
           {/* for size */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="banner">
              banner:
            </label>
            <input
              id="banner"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="banner"
              value={formData.banner || ""}
              onChange={handleChange}
            />
          </div>
           {/* for bedroom */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="short_description">
              Short_description:
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
           {/* for cars */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Seo_title:
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
           {/* for bathrooms */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Seo_description:
            </label>
            <input
              id="seo_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_description"
              value={formData.seo_description || ""}
              onChange={handleChange}
            />
          </div>
           {/* for seo_schema */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_schema">
              Seo_schema:
            </label>
            <input
              id="seo_schema"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_schema"
              value={formData.seo_schema || ""}
              onChange={handleChange}
            />
          </div>
           {/* for seo_keywords */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_keywords">
              Seo_keywords:
            </label>
            <input
              id="seo_keywords"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_keywords"
              value={formData.seo_keywords || ""}
              onChange={handleChange}
            />
          </div>
           {/* for status */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="status">
              Status:
            </label>
            <input
              id="status"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="status"
              value={formData.status || ""}
              onChange={handleChange}
            />
          </div>
          
           
        </div>
        <div className="flex gap-2 pt-1 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href={"/dashboard/services"}>
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
