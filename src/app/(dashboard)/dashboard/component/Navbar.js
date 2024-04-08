// import React from "react";
// import { Navbar, Typography } from "@material-tailwind/react";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify"; // Import toast function
// import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

// const NavbarComponent = ({ className, setOpenSidenav, openSidenav }) => {
//  const router = useRouter();
//   const logout = ()=>{
//    try{
//     localStorage.removeItem('authorizations');
//     toast("Logged out");
//     router.push('/login');

//    }catch(e){

//    }

//   }
//   const pathname = usePathname();
//   return (
//     <nav className={className}>
// <ToastContainer/>
//       <Navbar className={`rounded-xl text-black transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5`} fullWidth>
//         <div className="flex justify-between gap-6  items-center">
//           <div className="capitalize">
//             <Typography variant="h6" color="blue-gray" className="md:block hidden">
//               {pathname}
//             </Typography>
//           </div>
//           <div className="flex items-center">
//             <button className="px-2 py-1 bg-red-500 text-white rounded-md mr-4" onClick={logout}>Logout</button>

//             <div className="cursor-pointer text-black" onClick={() => setOpenSidenav(!openSidenav)}>
//               <i className={`${!openSidenav ? "ri-menu-line" : "ri-close-large-line "} text-xl font-bold xl:hidden`}></i>
//             </div>
//           </div>
//         </div>
//       </Navbar>
//     </nav>
//   );
// };

// export default NavbarComponent;
'use client';
import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"; // Import toast function
import Cookies from "js-cookie"; // Import Cookies
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const NavbarComponent = ({ className, setOpenSidenav, openSidenav }) => {
  const router = useRouter();

  const logout = () => {
    try {
      // Remove the token from the cookie
      Cookies.remove("authorization");
      toast("Logged out");
      router.push("/login");
    } catch (e) {
      console.error("Error while logging out:", e);
    }
  };

  const pathname = usePathname();
  return (
    <nav className={className}>
      <ToastContainer />
      <Navbar className={`rounded-xl text-black transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5`} fullWidth>
        <div className="flex justify-between gap-6  items-center">
          <div className="capitalize">
            <Typography variant="h6" color="blue-gray" className="md:block hidden">
              {pathname}
            </Typography>
          </div>
          <div className="flex items-center">
            <button className="px-2 py-1 bg-red-500 text-white rounded-md mr-4" onClick={logout}>
              Logout
            </button>

            <div className="cursor-pointer text-black" onClick={() => setOpenSidenav(!openSidenav)}>
              <i className={`${!openSidenav ? "ri-menu-line" : "ri-close-large-line "} text-xl font-bold xl:hidden`}></i>
            </div>
          </div>
        </div>
      </Navbar>
    </nav>
  );
};

export default NavbarComponent;
