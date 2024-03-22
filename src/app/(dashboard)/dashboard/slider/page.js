import React from 'react'


import DataTable from '../component/Tables/DataTable';

const Slider = () => {
  const data = [
    {
      id: 1,
      sn: 1,
      slogan: "Lorem ipsum dolor sit amet",
      title: "Title 1",
      order: 10,
      imageUrl: "https://via.placeholder.com/150",
      link: "https://example.com/page1",
    },
    {
      id: 2,
      sn: 2,
      slogan: "Consectetur adipiscing elit",
      title: "Title 2",
      order: 20,
      imageUrl: "https://via.placeholder.com/150",
      link: "https://example.com/page2",
    },
  ];

  const cols = ["Sn", "Title", "Order", "Image", "Link", "Action"];
  
  return (
    <section className="p-5 w-full px-10  bg-white rounded-md mt-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl font-bold">Sliders</h3>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">+ Create</button>
        </div>
      </div>
      <DataTable data={data} head={cols} />
    </section>
  );
}

export default Slider;