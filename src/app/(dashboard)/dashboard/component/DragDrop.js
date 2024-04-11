"use client";
import axiosInstance from "@/app/utils/axiosInstance";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MyDropzone({ id }) {
  const [files, setFiles] = useState([]);

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
    // fetchData();
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
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

      {/* Preview */}
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

        {/* Accepted files */}
        <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">Accepted Files</h3>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {files.map((file) => (
            <li key={file.name} className="relative h-32 rounded-md shadow-lg">
              <img
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="h-full w-full object-contain rounded-md"
              />
              <button
                type="button"
                className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
                onClick={() => removeFile(file.name)}
              >
                <i className="ri-close-large-line w-5 h-5 fill-white hover:fill-secondary-400 transition-colors"></i>
              </button>
              <p className="mt-2 text-neutral-500 text-[12px] font-medium">{file.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md mt-10">
        Upload images
      </button>
    </form>
  );
}
