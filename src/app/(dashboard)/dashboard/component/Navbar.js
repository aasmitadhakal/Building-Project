import React from "react";
import { Navbar, Typography, IconButton, Menu, MenuItem, Button } from "@material-tailwind/react";
import { usePathname } from "next/navigation";

const NavbarComponent = ({ className, setOpenSidenav, openSidenav }) => {
  const logout = ()=>{
   try{
    
   }catch(e){

   }

  }
  const pathname = usePathname();
  return (
    <div className={className}>
      <Navbar className={`rounded-xl text-black transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5`} fullWidth>
        <div className="flex justify-between gap-6  items-center">
          <div className="capitalize">
            <Typography variant="h6" color="blue-gray" className="md:block hidden">
              {pathname}
            </Typography>
          </div>
          <div className="flex items-center">
            <button className="px-2 py-1 bg-red-500 text-white rounded-md mr-4" onClick={logout}>Logout</button>

            <div className="cursor-pointer text-black" onClick={() => setOpenSidenav(!openSidenav)}>
              <i className={`${!openSidenav ? "ri-menu-line" : "ri-close-large-line "} text-xl font-bold xl:hidden`}></i>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
