// components/AboutUs.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "@/app/utils/axiosInstance";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/single');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/aboutus/${id}`);
      // After successful deletion, you can fetch the data again to update the table
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const columns = ["SN", "order", "Storey_type", "image","price", "Actions"];

  return (
    <>
      <section className="p-5 w-full px-10 bg-white rounded-sm mt-20">
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <Link href="/dashboard/aboutus/create">
              <p className="px-4 py-2 bg-blue-500 text-black rounded-md">
                + Create
              </p>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {columns.slice(1, columns.length - 1).map((column, columnIndex) => (
                      <td key={columnIndex}>
                        {item[column.toLowerCase().replace(/\s/g, '_')]}
                      </td>
                    ))}
                    <td>
                      <Link href={`/dashboard/aboutus/${item.id}`}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
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
