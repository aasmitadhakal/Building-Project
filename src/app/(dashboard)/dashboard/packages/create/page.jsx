// "use client";
// import React, { useState } from "react";
// // import axiosInstance from "@/app/utils/axiosInstance";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import { useRouter } from "next/navigation";

// // dynamic import of quill editor to avoid running into document not defined error when in build
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


// function Create() {
//   const [title, setTitle] = useState("");
//   const [order, setOrder] = useState("");
//   const [editorValue, setEditorValue] = useState("");
//   const [imageOne, setImageOne] = useState(null);
//   const [imageTwo, setImageTwo] = useState(null);
//   const router = useRouter();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData object
//     const formData = new FormData();
//     formData.append("name", title);
//     formData.append("description", editorValue);
//     formData.append("order", order);
//     formData.append("image", imageOne);
//     formData.append("imageTwo", imageTwo);

//     try {
//       //  send data to the server you can use axiosinstance if you feel comfortable with it
//       const response = await fetch("http://localhost:3000/api/country", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         toast("Post created successfully");
//         router.push("/dashboard/aboutus");
//         // Redirect or do something else on successful creation
//       } else {
//         toast("Error creating post");
//       }
//     } catch (error) {
//       toast.error(error.response.data.error );
//     }
//   };

//   return (
//     <div className="p-5 overflow-x-auto min-w-screen bg-white rounded-md mt-14">
//       <ToastContainer />
//       <h2 className="text-2xl font-bold">Create Post</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700" htmlFor="order">
//               Order:
//             </label>
//             <input
//               id="order"
//               className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               type="text"
//               name="order"
//               onChange={(e) => setOrder(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700" htmlFor="title">
//               Title:
//             </label>
//             <input
//               id="title"
//               className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               type="text"
//               name="name" // Assuming 'name' is the actual title field
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700" htmlFor="description">
//             Description:
//           </label>
//           <ReactQuill
//             className="bg-white text-black z-0"
//             modules={{
//               toolbar: [
//                 [{ font: [] }],
//                 [{ header: [1, 2, 3, 4, 5, 6, false] }],
//                 ["bold", "italic", "underline", "strike"],
//                 ["blockquote", "code-block"],
//                 [{ list: "ordered" }, { list: "bullet" }],
//                 [{ script: "sub" }, { script: "super" }],
//                 [{ indent: "-1" }, { indent: "+1" }],
//                 [{ align: [] }],
//                 ["clean"],
//               ],
//             }}
//             value={editorValue}
//             theme="snow"
//             onChange={(value) => setEditorValue(value)}
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           <div className="mb-4 relative">
//             <label className="block text-sm font-medium text-gray-700" htmlFor="imageOne">
//               Image One:
//             </label>
//             <input
//               className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               type="file"
//               id="image"
//               accept="image/*"
//               onChange={(e) => setImageOne(e.target.files[0])}
//             />
//           </div>
//           <div className="mb-4 relative">
//             <label className="block text-sm font-medium text-gray-700" htmlFor="imageTwo">
//               Image Two:
//             </label>
//             <input
//               className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               type="file"
//               id="imageTwo"
//               accept="image/*"
//               onChange={(e) => setImageTwo(e.target.files[0])}
//             />
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <button type="submit" className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
//             Create
//           </button>
//           <Link href={"/dashboard/aboutus"}>
//             <p className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-md">Cancel</p>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Create;
