"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "@/app/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/inquiry");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/inquiry/${id}`);
      toast("Item deleted successfully");
      fetchData(); // Update the list after successful deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = ["SN", "name", "email", "phone", "message", "subject", "Actions"];

  return (
    <>
      <section className="p-5 overflow-x-auto min-w-screen bg-white rounded-md z-10">
        <ToastContainer />
        <div className=" w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">Inquiry</h3>
            
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
                          <img src={`${axiosInstance.defaults.baseURL}${item.image}`} alt={item.title} className="h-12 w-12 rounded-full" />
                        ) : (
                          item[column.toLowerCase().replace(/\s/g, "_")]
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-4 py-1 rounded-md">
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
    </>
  );
};

export default Page;


