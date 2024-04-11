"use client";
import axiosInstance from "@/app/utils/axiosInstance";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MyDropzone({ id }) {
  const [files, setFiles] = useState([]);
  const [imagesFromDatabase, setImagesFromDatabase] = useState([]);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const handleDeletePopup = (id) => {
    setDeletePopUp(true);
    setDeleteItemId(id);
  };

  const closeDeletePopup = () => {
    setDeletePopUp(false);
    setDeleteItemId(null);
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/api/${deleteItemId}/images`);
      toast("Image deleted successfully");
      closeDeletePopup();
      fetchData(); // Refresh images after deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/${id}/packageimages`);
      if (response && response.data && response.data.statusCode === 200) {
        const transformedImages = response.data.data.map((image) => ({
          id: image.id,
          name: image.name,
          url: image.images, // Assuming 'images' property contains the image URL
          order: image.order,
          format: image.format,
          extension: image.extension,
          size: image.size,
          height: image.height,
          width: image.width,
        }));
        setImagesFromDatabase(transformedImages);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [...previousFiles, ...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files?.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));
    formData.append("id", id);

    try {
      const response = await axiosInstance.post(`/api/${id}/multipleimage`, formData);
      response.status === 200 && toast.success("Successfully uploaded");
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/formdata">
      <ToastContainer />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="w-full h-32 border-2 border-blue-500 border-dashed bg-blue-50 flex justify-center items-center rounded">
          <div className="text-center">
            {isDragActive ? <p>Drop the files here ...</p> : <p>Drag and drop some files here, or click to select files</p>}
            <i className="ri-upload-cloud-2-line text-4xl text-slate-400"></i>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="flex gap-4">
          <h2 className="title text-3xl font-semibold">Preview</h2>
          <button
            type="button"
            onClick={removeAll}
            className="mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
          >
            Remove all files
          </button>
        </div>

        <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">Accepted Files</h3>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {files.map((file) => (
            <li key={file.name} className="relative h-32 rounded-md shadow-lg">
              <img src={file.preview} alt={file.name} width={100} height={100} className="h-full w-full object-contain rounded-md" />
              <button
                type="button"
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                onClick={() => removeFile(file.name)}
              >
                Delete
              </button>
              <p className="mt-2 text-neutral-500 text-[12px] font-medium">{file.name}</p>
            </li>
          ))}
        </ul>

        <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">Images from Database</h3>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {imagesFromDatabase.map((image) => (
            <li key={image.id} className="relative h-32 rounded-md shadow-lg">
              <img
                src={`${axiosInstance.defaults.baseURL}${image.url}`}
                alt={image.name}
                width={100}
                height={100}
                className="h-full w-full object-contain rounded-md"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                onClick={() => handleDeletePopup(image.id)}
              >
                Delete
              </button>
              <p className="mt-2 text-neutral-500 text-[12px] font-medium">{image.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md mt-10">
        Upload images
      </button>

      {deletePopUp && (
        <section className="z-[100] h-screen w-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-400/80 px-6 lg:px-20 py-14">
          <div className="bg-[#E5E5E5] md:w-1/2 xl:w-1/3 rounded-lg p-8 relative text-black space-y-6">
            <i
              className="ri-close-fill text-xl font-bold absolute top-4 right-4 bg-red-700 hover:bg-red-700/80 text-white px-1 rounded cursor-pointer"
              onClick={closeDeletePopup}
            ></i>
            <h2 className="text-2xl text-center font-medium">Do you want to delete this image?</h2>
            <div className="flex flex-wrap justify-evenly">
              <button className="hover:bg-[#646cf7] bg-[#4a4e9c] text-white px-8 py-2 rounded " onClick={handleDelete}>
                Yes
              </button>
              <button className="bg-red-700 hover:bg-red-700/80 px-8 py-2 text-white rounded " onClick={closeDeletePopup}>
                No
              </button>
            </div>
          </div>
        </section>
      )}
    </form>
  );
}
