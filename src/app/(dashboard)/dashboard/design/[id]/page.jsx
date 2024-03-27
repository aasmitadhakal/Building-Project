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
    frontage: "",
    size : "",
    bedroom: "",
    cars: "",
    bathrooms: "",
    price: "",
    floor_plan: "",
    storey_type: "",
    
    
  });
  const [editorValue, setEditorValue] = useState("");
  const [imageOnePreview, setImageOnePreview] = useState(null);
 
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/design/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        // setEditorValue(responseData.description || "");
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
      updatedData.append("title", formData.title);
      updatedData.append("frontage", formData.frontage);
      updatedData.append("size", formData.size);
      updatedData.append("bedroom", formData.bedroom);
      updatedData.append("cars", formData.cars);
      updatedData.append("bathrooms", formData.bathrooms);
      updatedData.append("description", formData.description);
      updatedData.append("price", formData.price);
      updatedData.append("floor_plan", formData.floor_plan);
      updatedData.append("storey_type", formData.storey_type);

      // updatedData.append("description", editorValue);
      // if (formData.image) {
      //   updatedData.append("image", formData.image);
      // }
     
      await axiosInstance.put(`/api/design/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/design");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-8">
      <ToastContainer />

      <h1 className="text-2xl font-bold">Update Single Design</h1>
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
             value=
             {formData.description || ""}
            theme="snow"
            // onChange={handleChange}
           
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
           {/* for size */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              size:
            </label>
            <input
              id="size"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="size"
              value={formData.size || ""}
              onChange={handleChange}
            />
          </div>
           {/* for bedroom */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              bedroom:
            </label>
            <input
              id="bedroom"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="bedroom"
              value={formData.bedroom || ""}
              onChange={handleChange}
            />
          </div>
           {/* for cars */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              cars:
            </label>
            <input
              id="cars"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="cars"
              value={formData.cars || ""}
              onChange={handleChange}
            />
          </div>
           {/* for bathrooms */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              bathrooms:
            </label>
            <input
              id="bathrooms"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="bathrooms"
              value={formData.bathrooms || ""}
              onChange={handleChange}
            />
          </div>
           {/* for price */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              price:
            </label>
            <input
              id="price"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
            />
          </div>
           {/* for floor_plan */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              floor_plan:
            </label>
            <input
              id="floor_plan"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="floor_plan"
              value={formData.floor_plan || ""}
              onChange={handleChange}
            />
          </div>
           {/* for storey_type */}
           <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              storey_type:
            </label>
            <input
              id="storey_type"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="storey_type"
              value={formData.storey_type || ""}
              onChange={handleChange}
            />
          </div>
          
           
        </div>
        <div className="flex gap-2 pt-1 mt-4">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
          <Link href={"/dashboard/design"}>
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
