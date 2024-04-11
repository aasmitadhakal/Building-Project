"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import LandBannner from "../../component/PackagesContent/LandBanner";

function Page({ params }) {
  const [packageData, setPackageData] = useState(null);
  const [packages, setPackages] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/packages/${params.id}`);
      if (response && response.data && response.data.success) {
        const responseData = response.data.data;
        setPackageData(responseData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/api/${params.id}/packageimages`)
      .then((response) => {
        const data = response.data.data;
        setPackages(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    fetchData();
  }, [params.id]);

  return (
    <div className="mt-20">
      {/* Assuming PackageBanner is a component */}
     <LandBannner/>
      <div className=" md:px-0 px-4 container mx-auto">
        <div className="grid md:grid-cols-3 gap-x-8 mt-12 mb-6">
          {/* for img part */}
          <div className="md:col-span-2 ">
            <div className="">
              {/* Render first image separately */}
              {packages.length > 0 && (
                <div className="mb-1">
                  <img
                    src={axiosInstance.defaults.baseURL + packages[0].images}
                    alt={packages[0].name}
                    className="h-[333px] w-full rounded"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-3 md:my-0 my-2 gap-x-1 mt-2">
                {packages.slice(1).map((packageItem) => (
                  <div className="card md:my-1 my-2" key={packageItem.id}>
                    <img
                      src={axiosInstance.defaults.baseURL + packageItem.images}
                      alt={packageItem.name}
                      className="h-[233px] w-full"
                    />
                    <h2>{packageItem.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* for card */}
          {packageData && (
            <div className=" my-auto ">
              <div className=" md:p-4">
                <div className="flex justify-between mx-2 py-4 border-b border-customblue text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Frontage:
                  </p>
                  {packageData.frontage}
                </div>
                <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Area:
                  </p>
                  {packageData.area}
                </div>

                <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Topography:
                  </p>
                  {packageData.topography}
                </div>
                <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Zoning:
                  </p>
                  {packageData.zoning}
                </div>
                <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Bathroom:
                  </p>
                  {packageData.bathrooms}
                </div>
                <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Cars:
                  </p>
                  {packageData.cars}
                </div>
                <div className="flex justify-between mx-2 py-4 border-b border-customblue  text-black font-[400] text-[24px] ">
                  <p className="text-customblue  font-[600] text-[24px]  leading-[35px]">
                    Frontage:
                  </p>
                  {packageData.frontage}
                </div>
                {/* Render other fields as needed */}
              </div>
            </div>
          )}
        </div>
        <div className="md:mb-24 mb-8">
          {packageData && (
            <div className=" mb-2">
              <h1 className="text-customblue font-[600] text-[26px] leading-[35px]">
                {packageData.name}
              </h1>

              <p
                className="font-[Montserrat] font-[400] text-[16px] leading-[25px] text-[#656565] mt-4 text-justify"
                dangerouslySetInnerHTML={{ __html: packageData.description }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
