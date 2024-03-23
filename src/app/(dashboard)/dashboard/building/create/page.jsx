"use client";
import React, { useState } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('imageOne', imageOne);
    formData.append('imageTwo', imageTwo);

    try {
      const response = await axiosInstance.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // handle response accordingly
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageOne">Image One:</label>
          <input
            type="file"
            id="imageOne"
            accept="image/*"
            onChange={(e) => setImageOne(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="imageTwo">Image Two:</label>
          <input
            type="file"
            id="imageTwo"
            accept="image/*"
            onChange={(e) => setImageTwo(e.target.files[0])}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;
