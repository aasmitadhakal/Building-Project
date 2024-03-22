"use client";
import React, { useState } from "react";
import CountryTable from "../component/Tables/Countrytable/Countrytable";
import CreateForm from "../component/Create/CreateCountry";
import Link from "next/link";
import CourseTable from "../component/Tables/coursestable/coursetable";

const Courses = () => {
  const data = [
    {
      id: 1,
      name: "Title 1",
      order: 10,
      description: "Description 1",
      shortDescription: "Short Description 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Title 2",
      order: 20,
      description: "Description 2",
      shortDescription: "Short Description 2",
      image: "https://via.placeholder.com/150",
    },
  ];

  const cols = ["Sn", "Name","Order", "Description", "Short Description","Image","Action"];
  return (
    <>
      <section className=" p-5 w-full px-10  bg-white rounded-sm mt-20">
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">Courses</h3>
            <Link href="/dashboard/courses/create" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              + Create
            </Link>
          </div>
          <CourseTable data={data} head={cols} />
        </div>
      </section>
    </>
  );
};

export default Courses;
