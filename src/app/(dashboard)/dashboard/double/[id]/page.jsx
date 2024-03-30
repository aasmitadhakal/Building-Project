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
    title: "",
    // description: "",
    image: "",
    other_image:"",
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
  const [imageTwoPreview, setImageTwoPreview] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/design/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setFormData(responseData);
        setEditorValue(responseData.description || "");
        setEditorValue(responseData.title || "");
        setEditorValue(responseData.frontage || "");
        setEditorValue(responseData.size || "");
        setEditorValue(responseData.bedroom || "");
        setEditorValue(responseData.price || "");
        setEditorValue(responseData.storey_type || "");
        setImageOnePreview(responseData.image || null);
        setImageTwoPreview(responseData.other_image || null);
      
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
       handleImagePreview(files[0], name === "image_one" ? setImageOnePreview : setImageTwoPreview);
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

  // const handleImagePreview = (file, setImagePreview) => {
  //   if (file) {
  //     const previewURL = URL.createObjectURL(file);
  //     setImagePreview(previewURL);
  //   } else {
  //     setImagePreview(null);
  //   }
  // };
  const handleImagePreview = (file, setImagePreview, isOtherImage = false) => {
    if (file) {
      const previewURL = URL.createObjectURL(file);
      if (isOtherImage) {
        setImagePreview(previewURL);
      } else {
        setImagePreview(previewURL);
      }
    } else {
      if (isOtherImage) {
        setImagePreview(null);
      } else {
        setImagePreview(null);
      }
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
      // updatedData.append("description", formData.description);
      updatedData.append("price", formData.price);
      updatedData.append("floor_plan", formData.floor_plan);
      updatedData.append("storey_type", formData.storey_type);

      updatedData.append("description", editorValue);
      if (formData.image) {
        updatedData.append("image", formData.image);
      }
     
      if (formData.other_image) {
        updatedData.append("other_image", formData.other_image);
      }
     
      await axiosInstance.put(`/api/design/${params.id}`, updatedData);

      toast("Data edited successfully");
      router.push("/dashboard/double");
    } catch (error) {
      console.error("Error updating data:", error);
      toast("Error updating data");
    }
  };

  return (
    <div className="my-12  bg-white rounded-md font-[karla] shadow-xl">
    <ToastContainer />

  
    <form onSubmit={handleSubmit} className="p-6">
    <div className=" flex justify-between my-2">
      <h1 className="font-[600] text-[24px]  text-gray-700">Update Double Design</h1>
      {/* <button className="bg-blue-600 text-white px-6 rounded">Back</button> */}
      <Link href="/dashboard/double">
            <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md flex items-center justify-center "><FaArrowLeftLong className="mx-2" /> Back</p>
          </Link>
    </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="order">
            Order:
          </label>
          <input
            id="order"
            className=" border-gray-200 block  my-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="order"
            value={formData.order || ""}
            onChange={handleChange}
          />
        </div>
        <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Title:
          </label>
          <input
            id="title"
            className=" border-gray-200 block w-full  my-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
        </div>
     
      <div className=" my-4 uppercase">
        <label className="block text-sm font-medium  my-2 text-gray-700" htmlFor="description">
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
           value=
           {formData.description || ""}
          theme="snow"
          // onChange={handleChange}
         
        />
      </div>
    
        <div className="mt-20 my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="image">
            Image :
          </label>
          <input
            id="image"
            className="border-gray-200 block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
        <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            frontage:
          </label>
          <input
            id="frontage"
            className="block w-full border-gray-200 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="frontage"
            value={formData.frontage || ""}
            onChange={handleChange}
          />
        </div>
         {/* for size */}
         <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            size:
          </label>
          <input
            id="size"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="size"
            value={formData.size || ""}
            onChange={handleChange}
          />
        </div>
         {/* for bedroom */}
         <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            bedroom:
          </label>
          <input
            id="bedroom"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="bedroom"
            value={formData.bedroom || ""}
            onChange={handleChange}
          />
        </div>
         {/* for cars */}
         <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            cars:
          </label>
          <input
            id="cars"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="cars"
            value={formData.cars || ""}
            onChange={handleChange}
          />
        </div>
         
         <div className=" my-4 uppercase">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            bathrooms:
          </label>
          <input
            id="bathrooms"
            className="block w-full px-4  my-2 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="bathrooms"
            value={formData.bathrooms || ""}
            onChange={handleChange}
          />
        </div>
       
         <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            price:
          </label>
          <input
            id="price"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
          />
        </div>
         {/* for floor_plan */}
         <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            floor_plan:
          </label>
          <input
            id="floor_plan"
            className="block w-full px-4  py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="floor_plan"
            value={formData.floor_plan || ""}
            onChange={handleChange}
          />
        </div>
         {/* for storey_type */}
         <div className=" my-4 uppercase">
          <label className="block text-sm  my-2 font-medium text-gray-700" htmlFor="name">
            storey_type:
          </label>
          <input
            id="storey_type"
            className="block w-full px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="storey_type"
            value={formData.storey_type || ""}
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
