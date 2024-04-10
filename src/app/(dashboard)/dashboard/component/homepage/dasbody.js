import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import { RiDatabase2Line } from "react-icons/ri";
export default function DashBody() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/dashboard');
        setApiData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white text-slate-700 py-4 px-6 shadow-sm rounded-sm mt-2">
        <p className="text-[20px] font-[poppins] font-bold">Welcome To Admin Dashboard</p>
      </div>
      {apiData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
          {Object.keys(apiData).map((key, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-md shadow-md p-4">
              <div className='text-[30px] text-gray-400 flex items-center justify-center my-2'> <RiDatabase2Line /></div>
              <p className="  text-gray-600 uppercase flex items-center justify-center my-4" style={{ fontSize: "1rem" }}>
                {key} :  {apiData[key]}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}