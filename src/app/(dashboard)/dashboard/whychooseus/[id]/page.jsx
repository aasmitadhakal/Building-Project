'use client';
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
    name: "",
    position: "",
    rating: "",
    image: null, // Changed to a single 'image' field
  });
  const [editorValue, setEditorValue] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // Changed to a single 'imagePreview' state
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/testimonials/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        setImagePreview(responseData.image ? responseData.image : null);
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
      handleImagePreview(files[0]);
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

  const handleImagePreview = (file) => {
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
      updatedData.append("position", formData.position);
      updatedData.append("rating", formData.rating);
      updatedData.append("description", editorValue);
      if (formData.image) {
        updatedData.append("image", formData.image);
      }

      await axiosInstance.put(`/api/testimonials/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/testimonials");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-5">
      <ToastContainer />

      <h1 className="text-2xl font-bold">Update Testimonials</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="order">
              Order:
            </label>
            <input
              id="order"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="order"
              value={formData.order}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="position">
              Position:
            </label>
            <input
              id="position"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="rating">
              Rating:
            </label>
            <input
              id="rating"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="rating"
              value={formData.rating}
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
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="image">
            Image:
          </label>
          <input
            id="image"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            name="image"
            onChange={handleChange}
          />
          {imagePreview && <img src={imagePreview} alt="Image Preview" className="mt-2 h-[300px]" />}
        </div>
        <div className="flex gap-2 pt-1">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href={"/dashboard/testimonials"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
