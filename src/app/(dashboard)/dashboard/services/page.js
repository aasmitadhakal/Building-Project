"use client";
import React, { useState } from "react";
import CountryTable from "../component/Tables/Countrytable/Countrytable";
import CreateForm from "../component/Create/CreateCountry";
import Link from "next/link";
import CourseTable from "../component/Tables/coursestable/coursetable";
import ServicesTable from "../component/Tables/servicestable/servicestable";

const Services = () => {
  const data = [
    {
      id: 1,
      name: "Title 1",

      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Title 2",

      image: "https://via.placeholder.com/150",
    },
  ];

  const cols = ["Sn", "Image", "Name", "Action"];
  return (
    <>
      <section className=" p-5 w-full px-10  bg-white rounded-sm mt-20">
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-bold">Services</h3>
            <Link href="/dashboard/services/create" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              + Create
            </Link>
          </div>
          <ServicesTable data={data} head={cols} />
        </div>
      </section>
    </>
  );
};

export default Services;
