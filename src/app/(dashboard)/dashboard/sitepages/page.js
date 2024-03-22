import React from 'react'

import PagesTable from '../component/Tables/pagestable/Pagestable';


const sitepages = () => {
  const data = [
    {
      id: 1,
     
      title: "Title 1",
      
      image: "https://via.placeholder.com/150",
      
    },
    {
      id: 2,
      
      title: "Title 2",
      
      image: "https://via.placeholder.com/150",
      
    },
  ];

  const cols = ["Sn","Title","Image","Action"];
  return (
    <section className="p-5 w-full px-10  bg-white rounded-md mt-20">
      <div className="max-w-screen-lg w-full">
        <div className="flex justify-between mb-4">
          <h3 className="text-2xl font-bold">Pages</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">+ Create</button>
        </div>
        <PagesTable data={data} head={cols} />
      </div>
    </section>
  );
}

export default sitepages