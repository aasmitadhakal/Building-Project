"use client";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import axiosInstance from "@/app/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const CreateGlobalSettings = ({params}) => {
  const [formData, setFormData] = useState({
    imageFooter: "",
    imageMain: "",
    favIcon: "",
    siteInformation: "",
    siteCopyright: "",
  });

  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`api/global/${params.id}`);
      const data = response.data.data;

      setFormData({
        imageFooter: data.footer || "",
        imageMain: data.logo || "",
        favIcon: data.icon || "",
        siteInformation: data.info || "",
        siteCopyright: data.copyright || "",
      });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append('copyright', formData.siteCopyright);
    updatedData.append('footer',formData.imageFooter);
    updatedData.append('logo',formData.imageMain);
    updatedData.append('info',formData.siteInformation);
    updatedData.append('icon', formData.favIcon);

    try {
     
      const response = await axiosInstance.put(`/api/global/${params.id}`, updatedData);
      if (response.status === 200) {
        toast.success("Data Updated successfully");
        router.push("/dashboard/globalsettings");
      } else {
        toast.error("Error updating global settings");
      }
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Error updating item");
      // Handle error or show an error message to the user
    }
  };

  return (
    <div className="p-5 rounded-md w-full bg-white">
      <ToastContainer />
      <div>
        <div className="flex justify-between">
          <p className="text-2xl font-bold mb-4">Update Global Settings</p>
          <div>
            <Link href={`/dashboard/globalsettings`}>
              <button className="bg-indigo-500 hover:bg-indigo-700 px-4 py-1 text-white rounded-md">
                <i className="ri-arrow-left-line text-xl"></i> Back
              </button>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-3 gap-y-4">
            <div>
              <label htmlFor="imageFooter" className="block text-lg font-medium pb-4">
                Site Footer Logo
              </label>
              <input type="file" name="imageFooter" id="imageFooter" className="block" onChange={handleChange} />
              <img src={`${axiosInstance.defaults.baseURL}${formData.imageFooter}`} alt="" className="h-52 rounded-md mt-2" />
            </div>
            <div>
              <label htmlFor="favIcon" className="block text-lg font-medium pb-4">
                Fav Icon
              </label>
              <input type="file" name="favIcon" id="favIcon" className="block" onChange={handleChange} />
              <img src={`${axiosInstance.defaults.baseURL}${formData.favIcon}`} alt="" className="h-52 rounded-md mt-2" />
            </div>
            <div>
              <label htmlFor="imageMain" className="block text-lg font-medium pb-4">
                Site Main Logo
              </label>
              <input type="file" name="imageMain" id="imageMain" className="block" onChange={handleChange} />
              <img src={`${axiosInstance.defaults.baseURL}${formData.imageMain}`} alt="" className="h-52 rounded-md mt-2" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="siteInformation" className="block text-lg font-medium pb-4">
              Site Information
            </label>
            <textarea
              name="siteInformation"
              id="siteInformation"
              rows="3"
              className="w-full rounded-md focus:outline-blue-600 border-2 focus:border-none"
              value={formData.siteInformation}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mt-5">
            <label htmlFor="siteCopyright" className="block text-lg font-medium pb-4">
              Site Copy Right
            </label>
            <textarea
              name="siteCopyright"
              id="siteCopyright"
              rows="3"
              className="w-full rounded-md focus:outline-blue-600 border-2 focus:border-none"
              value={formData.siteCopyright}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGlobalSettings;
