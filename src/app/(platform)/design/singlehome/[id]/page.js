"use client";
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import Singlestoreyhomes from "@/app/(platform)/component/designcontent/Singlestoreyhomes";
const banneerdata = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/ae47/d37b/600dc5f3c92919c0e90c6801d7c04d67?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgqVAmAKPKTHnAl7w1-R2m8RvcYjYUfhKJP7qoE169NCM41XGP46Wh0YTgcAfI1MIOpKBKXtqROgsBnHzx41tnZOPOr5LU5Zjn9QqOX2mB2ImE6WrweZuLbhaokF1IiYIr4aWubY6DIazdRBn06qMD15AisMZY8tK9tio8SU9qZ6H5-3zYZxNkbBFtPkVTco6e3ga3PiZVT9x8CUkm~jZo9~y~qRhMwBRTZBBvm-MM~kV6qofuM2AZNaXPXhzSwaD1IUmKZ1M26p2lgjvM75JP5k0FomYhSbu9Q7vCxMMGfDimYXU1fVqGEFy~SNvGgn8CURDfJMWfdkVqyB8jNa~Q__",
    title: "Single Storey Homes",
    introduction: "Build to Last: Your Trusted Construction Partner",
  },
];
function page({ params }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/design/${params.id}`);
      if (response.data.success) {
        setData(response.data.data); // Update state with fetched data
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <>
      {/* forbanner */}
      {banneerdata.map((card, index) => (
        <section key={index} className="relative w-full mt-20 h-96 font-[karla]">
          <div
            className="w-full h-96"
            style={{
              position: "absolute",
              backgroundColor: "#051721",
              opacity: "0.7",
              zIndex: "1",
            }}
          ></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              width: "100%",
              zIndex: "2",
            }}
          >
            <h1 className=" mb-4 md:font-[500] md:text-[44px] text-white leading-[32px]">
              {card.title}
            </h1>
          </div>
        </section>
      ))}
      {/* for dynamic content */}

      <div className="container mx-auto mt-22 my-4 mb-44 mt-8 font-[Montserrat]">
        {/* for box */}
        <div className="grid grid-cols-3 gap-4">
          {data && (
            <div className="shadow rounded p-4">
              <div className="flex justify-between mx-2 py-4 border-b border-customblue text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  Frontage:
                </p>
                {data.frontage}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  Size:
                </p>
                {data.size}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  bedroom:
                </p>
                {data.bedroom}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  cars:
                </p>
                {data.frontage}
              </div>
              <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                  Bathrooms:
                </p>
                {data.bathrooms}
              </div>
              {/* Render other fields as needed */}
            </div>
          )}
          {/* for img */}
          <div className="col-span-2">
            <img
              src={axiosInstance.defaults.baseURL + data.image}
              alt={data.title}
              className=" aspect-square w-[810px] h-[410px]"
            ></img>
          </div>
        </div>
        <div className=" bg-[#ECECEC] my-8 rounded p-4">
          <p className="border-l-1 border-gray-400 my-2 p-2">Description</p>
          <p className="font-[400] text-[15px] leading-[25px] my-1">
            “AZURE242" is a cutting-edge cloud computing platform developed by
            Microsoft Azure. Renowned for its scalability, reliability, and
            extensive range of services, AZURE242 is designed to empower
            businesses of all sizes with seamless digital transformation
            capabilities. It offers a comprehensive suite of cloud services
            including infrastructure as a service (IaaS), platform as a service
            (PaaS), and software as a service (SaaS), enabling organizations to
            build, deploy, and manage applications and services with
            unparalleled flexibility and efficiency.
          </p>
        </div>
        {/* for price */}
        <div className=" bg-[#ECECEC] my-8 rounded p-4">
          <p className="border-l-1 border-gray-400 my-2 p-2">Price</p>
          <p className="font-[400] text-[15px] leading-[25px] my-1">
            {data.price}
          </p>
        </div>
        {/* for Floor plan */}
        <div className=" bg-[#ECECEC] my-8 rounded p-4">
          <p className="border-l-1 border-gray-400 my-2 p-2">Floor Plane</p>
          <p className="font-[400] text-[15px] leading-[25px] my-1">
            {data.floor_plan}
          </p>
        </div>
        <p className="font-[600] text-[24px] leading-[24px] text-customblue">
          You may like
        </p>
        <Singlestoreyhomes />
      </div>
    </>
  );
}

export default page;
