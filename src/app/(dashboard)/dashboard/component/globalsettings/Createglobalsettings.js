"use client";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import Link from "next/link";
import axiosInstance from "@/app/utils/axiosInstance";

const CreateGlobalSettings = () => {
  const [formData, setFormData] = useState({
    id: "",
    imageFooter: "",
    imageMain: "",
    favIcon: "",
    siteInformation: "",
    siteCopyright: "",
  });

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`api/global`);
      const data = response.data.data[0]; // Assuming there's only one global settings data
      if (response.status === 200) {
        setFormData({
          id: data.id,
          imageFooter: data.footer || "",
          imageMain: data.logo || "",
          favIcon: data.icon || "",
          siteInformation: data.info || "",
          siteCopyright: data.copyright || "",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-5 rounded-md w-full ">
      <div>
        <div className="flex justify-between">
          <p className="text-2xl font-bold mb-4">Global Settings</p>
          <div>
            <Link href={`/dashboard/globalsettings/${formData.id}`}>
              <button className="  bg-indigo-500 hover:bg-indigo-700 px-4 py-1 text-white rounded-md">
                <i className="ri-file-edit-line text-xl font-thin"></i> Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="shadow-md">
            <h2 className="text-lg pb-1 ">Site Footer Logo</h2>
            <img src={`${axiosInstance.defaults.baseURL}${formData.imageFooter}`} alt="" className="h-56 rounded-md" />
          </div>
          <div className="shadow-md">
            <h2 className="text-lg pb-1 ">Site Main Logo</h2>
            <img src={`${axiosInstance.defaults.baseURL}${formData.imageMain}`} alt="" className="h-56 rounded-md" />
          </div>
          <div className="shadow-md">
            <h2 className="text-lg pb-1 ">Fav Icon</h2>
            <img src={`${axiosInstance.defaults.baseURL}${formData.favIcon}`} alt="" className="h-56 rounded-md" />
          </div>
        </div>
        <div className="mt-5">
          <div className="border rounded-md px-4 py-2 border-gray-600">
            <h4 className="font-semibold text-xl py-2">Site information</h4>
            <p>{formData.siteInformation}</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="border rounded-md px-4 py-2 border-gray-600">
            <h2 className="font-semibold text-xl py-2">Site Copyright</h2>
            <p>{formData.siteCopyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGlobalSettings;
