"use client";
import React, { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";


function Create() {
  const [title, setTitle] = useState("");
  const [map, setMap] = useState("");
  // const [order, setOrder] = useState("");
  const [editorValue, setEditorValue] = useState("");
  // const [banner_image, setbanner_image] = useState(null);
  const [short_description, setshort_description] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setcontact] = useState("");
  const [location, setlocation] = useState("");
  const [seo_title, setseo_title] = useState("");
  const [seo_keyword, setseo_keyword] = useState("");
  // const[description,setDescription]=useState("");


  const router = useRouter();

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Validate inputs
    // const contactValue = parseInt(contact);
    // const bedOderValue = parseInt(order);
    // const locationValue = parseInt(location);
    // const seo_keywordValue = parseInt(seo_keyword);
    // if (isNaN(bedOderValue)) {
    //   toast("Please enter valid integer values for Ordervalue");
    //   return; // Stop form submission if validation fails
    // }
    // if (isNaN(contactValue)) {
    //   toast("Please enter valid integer values for contact");
    //   return; // Stop form submission if validation fails
    // }
    // if (isNaN(locationValue)) {
    //   toast("Please enter valid integer values for Car");
    //   return; // Stop form submission if validation fails
    // }
    // if (isNaN(seo_keywordValue)) {
    //   toast("Please enter valid integer values for seo_keyword");
    //   return; // Stop form submission if validation fails
    // }
  
    // Create FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("map", map);
    formData.append("description", editorValue);
    // formData.append("order", order);
    // formData.append("banner_image", banner_image); 
    formData.append("short_description", short_description);
    formData.append("email", email);
    formData.append("contact", contact); 
    formData.append("location", location); 
    formData.append("seo_title", seo_title);
    formData.append("seo_keyword", seo_keyword); 
    
  
    try {
      // Send data to the server using axiosInstance with authorization header
      const response = await axiosInstance.post("/api/contact", formData);
  
      if (response.status === 200) {
        toast("Post created successfully");
        router.push("/dashboard/contact");
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
      <h2 className="text-2xl font-bold">Create Contact</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Existing form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* <div>
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
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            value={editorValue}
            theme="snow"
            onChange={(value) => setEditorValue(value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="short_description">
              short_description:
            </label>
            <input
              id="short_description"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="short_description"
              value={short_description}
              onChange={(e) => setshort_description(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
              contact:
            </label>
            <input
              id="contact"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="location">
              location:
            </label>
            <input
              id="location"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="map">
              Map:
            </label>
            <input
              id="map"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="map"
              value={map}
              onChange={(e) => setMap(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_title">
              seo_title:
            </label>
            <input
              id="seo_title"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_title"
              value={seo_title}
              onChange={(e) => setseo_title(e.target.value)}
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="seo_keyword">
              seo_keyword:
            </label>
            <input
              id="seo_keyword"
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              name="seo_keyword"
              value={seo_keyword}
              onChange={(e) => setseo_keyword(e.target.value)}
            />
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Image:
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setbanner_image(e.target.files[0])} // Ensure that this sets the state correctly
            />
          </div> */}
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
