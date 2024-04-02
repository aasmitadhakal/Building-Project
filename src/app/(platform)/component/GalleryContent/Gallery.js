"use client"
import { useState,useEffect } from 'react';
import Fancybox from './Fancybox';
import axiosInstance from '@/app/utils/axiosInstance';
// const data =[
//     {
//         "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/62/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/64/200x150"
//       },
//     {
//         "largeImageUrl": "https://lipsum.app/random/1600x900",
//         "thumbnailUrl": "https://lipsum.app/id/62/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/60/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/62/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/64/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/60/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/61/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/61/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/64/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/60/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/62/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/62/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/60/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/64/200x150"
//       },
      
//       {
//         "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/60/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/62/200x150"
//       },
//       {
//         "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
//         "thumbnailUrl": "https://lipsum.app/id/64/200x150"
//       },
// ]

const Bannerdata = [
  {
    "image": "https://cdn.pixabay.com/photo/2024/02/22/09/04/warehouse-8589487_1280.jpg",
    "title": "Gallery",
    "introduction": "Build to Last: Your Trusted Construction Partner"
  }
];

 function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/gallery');
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
  }, []);
  return (
    <div className=''>
        {Bannerdata.map((card, index) => (
        <div key={index} className="relative w-full  h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{card.title}</h1>
            
           
          </div>
        </div>
      ))}
     <Fancybox
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>
    <div className='grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 md:px-0 px-4 container  mb-28 mx-auto pt-12'>
    {data.map((item, index) => (
            <a key={index} data-fancybox="gallery" href={axiosInstance.defaults.baseURL + item.image} className='aspect-square'>
              <img src={axiosInstance.defaults.baseURL + item.image} className='aspect-square'  alt={`Image ${index + 1}`} />
            </a>
          ))}
        </div>
</Fancybox>
    </div>
  );
}
export default Gallery