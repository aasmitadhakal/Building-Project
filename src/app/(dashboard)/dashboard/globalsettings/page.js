"use client";
import React, { useState } from "react";
import CreateGlobalSettings from "../component/globalsettings/Createglobalsettings";
import CreateHomePage from "../component/globalsettings/Createhomepage";
import CreateSeo from "../component/globalsettings/Createseo";

const Page = () => {
  const [activeButton, setActiveButton] = useState("Global");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-white mt-10 p-5 rounded-md">
      <div className="grid lg:grid-cols-4 container mx-auto">
        <div className="w-72 md:w-52 flex sm:justify-around md:justify-normal  md:flex-col ">
          <button
            className={`w-full py-2 mt-2   hover:bg-indigo-700 rounded-md ${activeButton === "Global" && "bg-indigo-700 text-white"}`}
            onClick={() => handleButtonClick("Global")}
          >
            Global
          </button>
          <button
            className={`w-full py-2 mt-2   hover:bg-indigo-700 rounded-md ${activeButton === "Home" && "bg-indigo-700 text-white"}`}
            onClick={() => handleButtonClick("Home")}
          >
            Home
          </button>

          <button
            className={`w-full py-2 mt-2   hover:bg-indigo-700 rounded-md ${activeButton === "Seo" && "bg-indigo-700 text-white"}`}
            onClick={() => handleButtonClick("Seo")}
          >
            Seo
          </button>
        </div>
        <div className="col-span-3 place-content-start">
          {activeButton === "Global" && <CreateGlobalSettings />}
          {activeButton === "Home" && <CreateHomePage />}
          {activeButton === "Seo" && <CreateSeo />}
        </div>
      </div>
    </div>
  );
};

export default Page;
