import "remixicon/fonts/remixicon.css";

const loginbg = "/assets/image/loginbg.jpg"; // Updated import path
export default function AuthLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundImage: `url(${loginbg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* This is the layout for auth pages  */}
      {children}
    </div>
  );
}
