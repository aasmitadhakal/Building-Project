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
    description: "",
  
  });
  const [editorValue, setEditorValue] = useState("");

  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/privacy/${params.id}`);
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
    try {
      const updatedData = new FormData();
      updatedData.append("order", formData.order);
     

      updatedData.append("description", editorValue);
     
      await axiosInstance.put(`/api/privacy/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/privacy");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="my-12   bg-white rounded-md font-[karla] shadow-xl">
      <ToastContainer />

     
      <form onSubmit={handleSubmit} className="p-6">
      <div className=" flex justify-between my-2">
        <h1 className="font-[600] text-[24px]  text-gray-700">Update Privacy </h1>
        
             <Link href="/dashboard/privacy">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
             </Link>
      </div>
        
          <div className="uppercase my-4">
            <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={formData.order || ""}
              onChange={handleChange}
            />
          </div>
          
        
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <ReactQuill
            className="bg-white text-black z-0 h-64"
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
        
        <div className="flex gap-2 pt-1 mt-20">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
         
        </div>
      </form>
    </div>
  );
};

export default Update;
