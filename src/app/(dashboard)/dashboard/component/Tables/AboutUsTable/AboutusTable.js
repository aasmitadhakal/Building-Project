// components/TableComponent.js
"use client";
import axiosInstance from '@/app/utils/axiosInstance';
import { useEffect, useState } from 'react';

const TableComponent = ({ columns }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/aboutus');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{item[column.toLowerCase().replace(/\s/g, '_')]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
