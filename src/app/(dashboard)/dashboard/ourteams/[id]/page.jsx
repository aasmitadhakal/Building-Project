"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Link from "next/link";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const Update = ({ params }) => {
  const [formData, setFormData] = useState({});
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);
  const [imageTwoPreview, setImageTwoPreview] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/country/${params.id}`);
      if (response && response.data && response.data.data && response.data.data.length > 0) {
        const responseData = response.data.data[0];
        setFormData(responseData);
        setEditorValue(responseData.description); // Description value
        setImageOnePreview(responseData.image); // Preview of image one
        setImageTwoPreview(responseData.image); // Preview of image two
      }
    } catch (error) {
      console.error("Error fetching country:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleImagePreview = (e, setImagePreview) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else {
      setImagePreview(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // add logic to confirm before updateing the data

    try {
      // Prepare the updated data to be sent to the server
      const updatedData = {
        order: formData.order,
        name: formData.name,
        description: editorValue,
        image: formData.image,

        // Include other fields as needed
      };

      // Send a PUT request to update the data
      await axiosInstance.put(`/api/country/${params.id}`, updatedData);

      // Optionally, you may redirect the user after successful update
      toast("Data edited successfully");
      router.push("/dashboard/aboutus");
      // you can add other logics like showing toast
    } catch (error) {
      toast.error(error.response.data.error );
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-5">
      <ToastContainer />

      <h1 className="text-2xl font-bold">Update About Us</h1>
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
              value={formData.order || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="name" // Assuming 'name' is the actual title field
              value={formData.name || ""}
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="image_one">
              Image One:
            </label>
            <input
              id="imageOne"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              name="image"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e, setImageOnePreview);
              }}
            />
            {imageOnePreview && <img src={imageOnePreview} alt="Image One Preview" className="mt-2 w-full" />}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image_two">
              Image Two:
            </label>
            <input
              id="imageTwo"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              name="image_two"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e, setImageTwoPreview);
              }}
            />
            {imageTwoPreview && <img src={imageTwoPreview} alt="Image Two Preview" className="mt-2 w-full" key={file?.name} />}
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href={"/dashboard/aboutus"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Update;
