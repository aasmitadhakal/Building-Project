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
      const response = await axiosInstance.get("/api/faq");
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
      await axiosInstance.delete(`/api/faq/${id}`);
      toast("Item deleted successfully");
      fetchData(); // Update the list after successful deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = ["SN", "order", "question", "answer", "status"];

  return (
    <>
      <section className="p-5 overflow-x-auto min-w-screen bg-white rounded-md z-10">
        <ToastContainer />
        <div className=" w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">Frequently Asked Question</h3>
            <Link href="/dashboard/faq/create">
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
                      <td key={columnIndex}>{item[column.toLowerCase().replace(/\s/g, "_")]}</td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/dashboard/faq/${item.id}`}>
                        <button className="  text-indigo-500 hover:text-indigo-700 px-4 py-1 rounded-md">
                          <i class="ri-file-edit-line text-xl font-bold"></i>
                        </button>
                      </Link>
                      <button onClick={() => handleDeletePopup(item.id)} className="text-red-500 hover:text-red-700 px-4 py-1 rounded-md">
                        <i class="ri-delete-bin-6-line text-xl font-bold"></i>
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
