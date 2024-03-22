import React from "react";

const Socilamediatable = ({ data, head }) => {
  return (
    <div className="overflow-x-auto w-[30rem] lg:w-[55rem] xl:w-full  mt-5">
      <div className="table-container px-5">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr>
              {head.map((item, index) => {
                return (
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider" key={index}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {data?.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                
                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.order}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.image} alt={item.title} className="h-10 w-10 rounded-full object-cover" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={item.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-between">
                  <p className="pr-2 text-blue-600 ">Edit</p>
                  <p className="text-red-600">Delete</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Socilamediatable;
