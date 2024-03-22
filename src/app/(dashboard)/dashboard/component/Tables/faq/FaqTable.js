import React from "react";

const FaqTable = ({ data, head }) => {
  return (
    <div className="overflow-x-auto min-w-screen mt-5">
      <div className="table-container">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 space-x-40">
            <tr>
              {head.map((item, index) => {
                return (
                  <th className="px-6 py-3 text-left mx-20 text-sm font-bold text-gray-500 uppercase tracking-wider" key={index}>
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

                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                

                <td className="px-6 py-4 whitespace-nowrap flex ">
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

export default FaqTable;
