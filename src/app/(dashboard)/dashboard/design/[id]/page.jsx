"use client";
import { useState, useEffect } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';

const Update = ({ params }) => {
  const [formData, setFormData] = useState(null); // Initialize with null instead of empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/aboutus/${params.id}`);
        console.log('Fetched Data:', response.data);
        setFormData(response.data); // Set formData after fetching data
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };
    fetchData();
  }, [params.id]);
  
  // Return null if formData is null (waiting for data to be fetched)
  if (formData === null) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    // Handle regular text inputs
    if (e.target.type !== 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else { // Handle file inputs
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const updatedData = new FormData();
      // Append each form field to FormData
      Object.keys(formData).forEach(key => {
        updatedData.append(key, formData[key]);
      });

      await axiosInstance.put(`/api/aboutus/${params.id}`, updatedData, {
        headers: { 'Content-Type': 'multipart/form-data' } // Set content type for FormData
      });
      // Handle successful update, e.g., redirect to a success page
    } catch (error) {
      console.error('Error updating About us:', error);
    }
  };

  return (
    <div>
      <h1>Update About Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Order:
          <input type="text" name="order" value={formData.order} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Image One:
          <input type="file" name="image_one" onChange={handleChange} />
        </label>
        <label>
          Image Two:
          <input type="file" name="image_two" onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
