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
  const [imageOnePreview, setImageOnePreview] = useState(null);
 
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/building/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        console.log(formData);
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
      updatedData.append("order_number", formData.order_number);
      updatedData.append("name", formData.name);
      updatedData.append("short_description", formData.short_description);
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
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>

       
          <div  className=" my-4 uppercase">
            <label className="block text-sm font-medium text-gray-700" htmlFor="order_number">
              Order Number:
            </label>
            <input
              id="order_number"
              className="block my-2  w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order_number"
              value={formData.order_number || ""}
              onChange={handleChange}
            />
          </div>
         
          <div  className=" my-4 uppercase">
            <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </div>
       
       
       
          <div  className=" my-4 uppercase" >
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
            {imageOnePreview && <img src={`${axiosInstance.defaults.baseURL}${formData.image}`} alt={formData.title} className="h-12 w-12 rounded-full" />}
          </div>
         
          
           {/* for bedroom */}
           <div  className=" my-4 uppercase">
            <label className="block text-sm my-2  font-medium text-gray-700" htmlFor="short_description">
              Short Description:
            </label>
            <textarea
              id="short_description"
              className="block w-full h-36 px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              
              name="short_description"
              value={formData.short_description || ""}
              onChange={handleChange}
            />
          </div>
           {/* for cars */}
           <div  className=" my-4 uppercase">
            <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
              Seo Title:
            </label>
            <input
              id="seo_title"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_title"
              value={formData.seo_title || ""}
              onChange={handleChange}
            />
          </div>
           {/* for bathrooms */}
           <div  className=" my-4 uppercase">
            <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="name">
              Seo Description:
            </label>
            <input
              id="seo_description"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_description"
              value={formData.seo_description || ""}
              onChange={handleChange}
            />
          </div>
           {/* for seo_schema */}
           <div  className=" my-4 uppercase">
            <label className="block my-2  text-sm font-medium text-gray-700" htmlFor="seo_schema">
              Seo Schema:
            </label>
            <input
              id="seo_schema"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_schema"
              value={formData.seo_schema || ""}
              onChange={handleChange}
            />
          </div>
           {/* for seo_keywords */}
           <div  className=" my-4 uppercase">
            <label className="block text-sm font-medium  my-2  text-gray-700" htmlFor="seo_keywords">
              Seo Keywords:
            </label>
            <input
              id="seo_keywords"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_keywords"
              value={formData.seo_keywords || ""}
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
