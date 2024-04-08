import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"; // Import toast function
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const NavbarComponent = ({ className, setOpenSidenav, openSidenav }) => {
  const router = useRouter();
  const logout = () => {
    try {
      localStorage.removeItem("authorization");
      toast("Logged out");
      router.push("/login");
    } catch (e) {
      toast.error(e.message);
    }
  };
  const pathname = usePathname();
  return (
    <nav className={className}>
      <ToastContainer />
      <Navbar className={`rounded-xl text-black transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5`} fullWidth>
        <div className="flex justify-between gap-6  items-center">
          <div className="capitalize w-full">
            <i className="ri-search-line text-xl text-gray-400 absolute left-7 top-5"></i>
            <input type="search" className="rounded-md w-1/2 border-slate-300 pl-10" placeholder="Search" />
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
