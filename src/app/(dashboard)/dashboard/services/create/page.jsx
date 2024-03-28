"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";


function Create() {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [slug, setSlug] = useState("");
  const [banner, setBanner] = useState("");
  const [shortdescription, setShort_description] = useState("");
  const [seotitle, setSeo_title] = useState("");
  const [seodescription, setSeodescription] = useState("");
  const [seoschema, setSeoschema] = useState("");
   const [description, setDescription] = useState("");
  const [seokeywords, setSeokeywords] = useState("");
 

  const router = useRouter();

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Validate inputs
    // const bedroomValue = parseInt(bedroom);
    // const bedOderValue = parseInt(order);
    // const carsValue = parseInt(cars);
    // const priceValue = parseInt(price);
    // if (isNaN(bedOderValue)) {
    //   toast("Please enter valid integer values for Ordervalue");
    //   return; // Stop form submission if validation fails
    // }
    // if (isNaN(bedroomValue)) {
    //   toast("Please enter valid integer values for Bedroom");
    //   return; // Stop form submission if validation fails
    // }
    // if (isNaN(carsValue)) {
    //   toast("Please enter valid integer values for Car");
    //   return; // Stop form submission if validation fails
    // }
    // if (isNaN(priceValue)) {
    //   toast("Please enter valid integer values for Price");
    //   return; // Stop form submission if validation fails
    // }
  
    // Create FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", setDescription);
    formData.append("order", order);
    formData.append("image", imageOne); // Append image file correctly
  
    // Append additional fields
    formData.append("slug", slug);
    formData.append("banner", banner);
    formData.append("short_description",shortdescription); // Use validated integer value
  
    formData.append("seo_title", seotitle);
    formData.append("seo_description", seodescription); // Use validated integer value
    formData.append("seo_schema", setSeoschema);
    formData.append("seo_keywords", setSeokeywords);
  
    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/service", formData);
  
      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/services");
      } else {
        toast("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("Error creating post");
    }
  };

  return (
    <div className="min-w-screen bg-white rounded-md p-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold">Create Service</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Existing form fields */}
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
              value={order}
              onChange={(e) => setOrder(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
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
            // value={editorValue}
            theme="snow"
            // onChange={(value) => setEditorValue(value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="slug">
              Slug:
            </label>
            <input
              id="slug"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="banner">
              Banner:
            </label>
            <input
              id="banner"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="banner"
              value={banner}
              onChange={(e) => setBanner(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="short_description">
              Short_description:
            </label>
            <input
              id="short_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="short_description"
              value={shortdescription}
              onChange={(e) => setShort_description(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_title">
              Seo_title:
            </label>
            <input
              id="seo_title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_title"
              value={seotitle}
              onChange={(e) => setSeo_title(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_description">
              seo_description:
            </label>
            <input
              id="seo_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_description"
              value={seodescription}
              onChange={(e) => setSeodescription(e.target.value)}
            />
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows="3"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_schema">
              seo_schema:
            </label>
            <input
              id="seo_schema"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_schema"
              value={seoschema}
              onChange={(e) => setSeoschema(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image:
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageOne(e.target.files[0])} // Ensure that this sets the state correctly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_schema">
              seo_keywords:
            </label>
            <input
              id="seo_keywords"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_keywords"
              value={seokeywords}
              onChange={(e) => setSeokeywords(e.target.value)}
            />
          </div>
        </div>
       
        <div className="flex gap-2 mt-2">
          <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
            Create
          </button>
          <Link href={"/dashboard/design"}>
            <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;