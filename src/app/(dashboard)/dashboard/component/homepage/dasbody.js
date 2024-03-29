import React from "react";

export default function DashBody() {
  // Sample data
  const fakeData = [
    { name: "Country", id: "2" },
    { name: "Courses", id: "3" },
    { name: "Courses", id: "4" },
    { name: "Courses", id: "5" },
    { name: "Courses", id: "6" },
    { name: "Courses", id: "7" },
    { name: "Courses", id: "8" },
  ];

  return (
    <>
      <div className="bg-gray-500 text-white py-4 px-6 shadow-sm rounded-sm mt-2">
        <p className="text-2xl font-semibold">Welcome To Admin Dashboard</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
        {fakeData.map((data, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-md shadow-md p-4" style={{ minHeight: "163px", minWidth: "282px" }}>
            <div className="icon"> iCONS</div>
            <p className="text-lg font-semibold text-gray-800" style={{ fontSize: "1rem" }}>
              {data.name}
            </p>
            <p className="text-gray-600">ID: {data.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
