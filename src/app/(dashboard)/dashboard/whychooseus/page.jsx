"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "@/app/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Whyus = () => {
  const [data, setData] = useState([]);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const handleDeletePopup = (id) => {
    setDeletePopUp(true);
    setDeleteItemId(id);
  };

  const closeDeletePopup = () => {
    setDeletePopUp(false);
    setDeleteItemId(null);
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/whyus");

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., display a toast message or retry the request
      toast("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/api/whyus/${deleteItemId}`);

      toast("Item deleted successfully");
      closeDeletePopup();
      fetchData(); // Update the list after successful deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = ["SN", "order", "title", "image", "short_description", "icon", "Actions"];

  return (
    <>
      <section className="p-5 overflow-x-auto min-w-screen bg-white rounded-md z-10">
        <ToastContainer />
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">Why Chose Us</h3>
            <Link href="/dashboard/whychooseus/create">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">+ Create</p>
            </Link>
          </div>
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 space-x-40">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} className="px-6 py-3 text-left mx-20 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    {columns.slice(1, columns.length - 1).map((column, columnIndex) => (
                      <td key={columnIndex}>
                        {column === "image" ? (
                          <img
                            src={`${axiosInstance.defaults.baseURL}${item.image}`}
                            alt={item.title}
                            className="w-20  object-cover aspect-video rounded-sm"
                          />
                        ) : (
                          item[column.toLowerCase().replace(/\s/g, "_")]
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/dashboard/whychooseus/${item.id}`}>
                        <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded-md">Edit</button>
                      </Link>
                      <button onClick={() => handleDeletePopup(item.id)} className="bg-red-500 text-white px-4 py-1 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length}>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Delete modal */}
      {deletePopUp && (
        <section className="z-[100] h-screen w-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-400/80 px-6 lg:px-20 py-14">
          <div className="bg-[#E5E5E5] md:w-1/2 xl:w-1/3 rounded-lg p-8 relative text-black space-y-6">
            <i
              className="ri-close-fill text-xl font-bold absolute top-4 right-4 bg-red-700 hover:bg-red-700/80 text-white px-1 rounded cursor-pointer"
              onClick={closeDeletePopup}
            ></i>
            <h2 className="text-2xl text-center font-medium">Do you want to delete ?</h2>
            <div className="flex flex-wrap justify-evenly">
              <button className="hover:bg-[#646cf7] bg-[#4a4e9c] text-white px-8 py-2  rounded " onClick={handleDelete}>
                Yes
              </button>
              <button className="bg-red-700 hover:bg-red-700/80 px-8 py-2 text-white  rounded " onClick={closeDeletePopup}>
                No
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Whyus;
