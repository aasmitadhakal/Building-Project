"use client";

import bg from "/public/assets/image/78786.jpg";
import "remixicon/fonts/remixicon.css";
export default function AuthLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="min-h-screen bg-gray-50 " style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* This is the layout for auth pages  */}
      {children}
    </div>
  );
}
