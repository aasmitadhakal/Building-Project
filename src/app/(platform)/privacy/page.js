"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';


const banneerdata = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7e9c/80fe/cf463cf32d4cdc3b9ea163edbcd4d784?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJpVgWV6y~zuz20~vRpNnsxYW04dvCQQUkgq01K-bkgi~Cu9ARSPazx5VxoAIvoaqXJ2eCkKq1eGks5YjxnM5zwhRgZPAuACBwDKQdrmrLlhcAVbgCbdKdDqvZeC1kiGSP5A89-RcL0F32drZlUEktB8I~UHZvoGmxBcFRtA1WEqnDLoMAwbNYABLTLbJnDKuZrBJBmm8NSnlmaUFWQwoVO3gBFfNOcVXDQ3Y4Cpa4yphcjVihh7kFz3Jj9Qz4v-1hNtN7-uOEUZfeMMQhHEFtbLD~EkQ6vfg2VQkTKkeKE0mggKBP5jcdhtbd9oOgU0lgAgIUxqUX1mSnQmd0WLLg__",
      title: "Privacy And Policy",
      introduction: "Build to Last: Your Trusted Construction Partner",
    },
  ];
function Page() {
  const [data, setData] = useState([]);

useEffect(() => {
  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/privacy');
      if (response.data.success) {
        setData(response.data.data); // Update state with fetched data
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData(); // Call the fetchData function when the component mounts
}, []); // Empty dependency array ensures that this effect runs only once when the component mounts
    return (
        <>
         {/* forbanner */}
      {banneerdata.map((card, index) => (
        <div key={index} className="relative mt-20  w-full h-96 font-[Karla]">
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
            <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">
              {card.title}
            </h1>
          </div>
        </div>
      ))}
      {/* for detail */}
            {data.map((item, index) => (
                <div key={index} className=' text-slate-700 font-[400] font-[karla]  mb-20 my-20  container mx-auto md:px-0 px-4 text-justify 'dangerouslySetInnerHTML={{ __html: item.description }}/>
                 
            ))}
        </>
    );
}

export default Page;