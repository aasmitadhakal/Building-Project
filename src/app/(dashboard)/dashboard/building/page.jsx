// components/AboutUs.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "@/app/utils/axiosInstance";

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/country");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    // add a delete confirmation and show toast or other kind of notification after the data is deleted
    try {
      await axiosInstance.delete(`/api/country/${id}`);
      // After successful deletion, you can fetch the data again to update the table
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const columns = ["SN", "order", "name", "description", "short_description", "image", "Actions"];

  return (
    <>
      <section className="p-5 overflow-x-auto min-w-screen bg-white rounded-md z-10">
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <Link href="/dashboard/aboutus/create">
              <p className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white  rounded-md">+ Create</p>
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
                      <Link href={`/dashboard/aboutus/${item.id}`}>
                        <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded-md">Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(item.id)} className=" bg-red-500 text-white px-4 py-1 rounded-md">
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

export default AboutUs;
