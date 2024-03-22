"use client";
import React, { useState } from "react";
import Link from "next/link";
import BlogsTable from "../component/Tables/blogstable/BlogsTable";

const Blogs = () => {
  const data = [
    {
      id: 1,
      sn: 1,
      title: "Title 1",
      image: "https://via.placeholder.com/150",
      created: "User 1",
      date: "2022-05-10",
    },
    {
      id: 2,
      sn: 2,
      title: "Title 2",
      image: "https://via.placeholder.com/150",
      created: "User 2",
      date: "2022-05-11",
    },
  ];

  const cols = ["Sn", "Image", "Title","Created By" ,"Date","Action"];
  return (
    <>
      <section className=" p-5 w-full px-10  bg-white rounded-sm mt-20">
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">Blogs</h3>
            <Link href="/dashboard/blogs/create" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              + Create
            </Link>
          </div>
          <BlogsTable data={data} head={cols} />
        </div>
      </section>
    </>
  );
};

export default Blogs;
