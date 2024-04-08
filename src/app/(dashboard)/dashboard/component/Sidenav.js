"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import NavbarComponent from "./Navbar";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
const img = "/assets/image/logo.jpg";
const Sidenav = () => {
  const [openSidenav, setOpenSidenav] = useState(false);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const pathname = usePathname();
  return (
    <>
      <aside
        className={`${
          openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50   w-72  transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 bg-white shadow-lg overflow-hidden `}
      >
        <div className={`relative h-full overflow-auto`}>
          <div className=" bg-white z-50 mb-4">
            <Link href="/" className="flex items-center shadow-none justify-center my-1">
              <img src={img} className="size-24" alt="Logo" />
            </Link>
            <IconButton
              variant="text"
              size="sm"
              ripple={false}
              className="absolute  right-4 top-5 grid rounded-br-none rounded-tl-none xl:hidden"
              onClick={() => setOpenSidenav(!openSidenav)}
            >
              <i className="ri-close-large-line text-xl font-bold "></i>
            </IconButton>
          </div>
          <div className=" mt-4 ">
            <ul className="mb-4 flex flex-col gap-2 px-4">
              <h3 className="py-2 tracking-[.1rem] font-normal uppercase text-xs text-sidebar-foreground">Dashboard</h3>
              <li>
                <Link href="/dashboard">
                  <span
                    className={`${
                      pathname === "/dashboard" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-dashboard-line mr-4 text-xl"></i>
                    <span>Dashboard</span>
                  </span>
                </Link>
              </li>
              <h3 className="py-2 tracking-[.1rem] font-normal uppercase text-xs text-sidebar-foreground">CMS</h3>
              <li>
                <Link href="/dashboard/aboutus">
                  <span
                    className={`${
                      pathname === "/dashboard/aboutus" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-group-fill mr-4 text-xl"></i>
                    <span>About Us</span>
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/dashboard/contact">
                  <span
                    className={`${
                      pathname === "/dashboard/contact" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-phone-line mr-4 text-xl"></i>
                    <span>Contact Us</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/services">
                  <span
                    className={`${
                      pathname === "/dashboard/services" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-settings-2-line mr-4 text-xl"></i>
                    <span>Services</span>
                  </span>
                </Link>
              </li>
              <li>
                <Accordion
                  open={open === 2}
                  icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}
                >
                  <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="border-none shadow-none py-0 px-4">
                      <span className="flex items-center uppercase rounded-md py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground">
                        <i className="ri-compasses-2-line mr-4 text-xl"></i>
                        <span>Design</span>
                      </span>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <Link href="/dashboard/design">
                      <span
                        className={` ${
                          pathname === "/dashboard/design" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Single Design</span>
                      </span>
                    </Link>
                    <Link href="/dashboard/double">
                      <span
                        className={` ${
                          pathname === "/dashboard/double" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Double Design</span>
                      </span>
                    </Link>
                    <Link href="/dashboard/duol">
                      <span
                        className={` ${
                          pathname === "/dashboard/duol" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Dual Design</span>
                      </span>
                    </Link>
                  </AccordionBody>
                </Accordion>
              </li>
              <li>
                <Link href="/dashboard/inquiry">
                  <span
                    className={`${
                      pathname === "/dashboard/inquiry" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-customer-service-2-line mr-4 text-xl"></i>
                    <span>Inquiry</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/gallery">
                  <span
                    className={`${
                      pathname === "/dashboard/gallery" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-gallery-line mr-4 text-xl"></i>
                    <span>Gallery</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/testimonials">
                  <span
                    className={`${
                      pathname === "/dashboard/testimonials" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-message-2-line mr-4 text-xl"></i>
                    <span>Testimonials</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/privacy">
                  <span
                    className={`${
                      pathname === "/dashboard/privacy" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-git-repository-private-line mr-4 text-xl"></i>
                    <span>Privacy</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/building">
                  <span
                    className={`${
                      pathname === "/dashboard/building" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-building-line mr-4 text-xl"></i>
                    <span>Building</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/whychooseus">
                  <span
                    className={`${
                      pathname === "/dashboard/whychooseus" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className=" ri-information-line mr-4 text-xl"></i>
                    <span>Why us</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/faq">
                  <span
                    className={`${
                      pathname === "/dashboard/faq" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className="ri-question-mark mr-4 text-xl"></i>
                    <span>faq</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/clientjourney">
                  <span
                    className={`${
                      pathname === "/dashboard/clientjourney" ? "bg-blue-100 text-black" : "text-black"
                    } flex items-center uppercase rounded-md px-4 py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground`}
                  >
                    <i className="ri-train-line mr-4 text-xl"></i>
                    <span>Client Journey</span>
                  </span>
                </Link>
              </li>
              <h3 className="py-2 tracking-[.1rem] font-normal uppercase text-xs text-sidebar-foreground">settings</h3>
              <li>
                <Accordion
                  open={open === 1}
                  icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
                >
                  <ListItem className="p-0" selected={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="border-none shadow-none py-0 px-4">
                      <span className="flex items-center uppercase rounded-md py-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground">
                        <i className="ri-compasses-2-line mr-4 text-xl"></i>
                        <span>Global Settings</span>
                      </span>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <Link href="/dashboard/slider">
                      <span
                        className={` ${
                          pathname === "/dashboard/slider" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Page slider</span>
                      </span>
                    </Link>
                    <Link href="/dashboard/sitepages">
                      <span
                        className={` ${
                          pathname === "/dashboard/sitepages" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Pages</span>
                      </span>
                    </Link>
                    <Link href="/dashboard/socialmedia">
                      <span
                        className={` ${
                          pathname === "/dashboard/socialmedia" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Social Medias</span>
                      </span>
                    </Link>
                    <Link href="/dashboard/globalsettings">
                      <span
                        className={` ${
                          pathname === "/dashboard/globalsettings" ? "bg-blue-100 text-black" : "text-black"
                        } flex items-center rounded-md px-12 py-3 text-sm font-normal capitalize hover:bg-accent hover:text-accent-foreground`}
                      >
                        <span>Global Settings</span>
                      </span>
                    </Link>
                    {/* <List className="p-1">
                      <ListItem
                        className={`flex ${
                          pathname === "/dashboard/slider"
                            ? "bg-blue-100 text-black"
                            : "text-black"
                        } items-center shadow-none  gap-4 px-4 py-2 capitalize  rounded-none  `}
                      >
                        <Link href="/dashboard/slider">Slider</Link>
                      </ListItem>
                      <ListItem
                        className={`flex ${
                          pathname === "/dashboard/sitepages"
                            ? "bg-blue-100 text-black"
                            : "text-black"
                        } items-center shadow-none  gap-4 px-4 py-2 capitalize   rounded-none `}
                      >
                        <Link href="/dashboard/sitepages">Pages</Link>
                      </ListItem>
                      <ListItem
                        className={`flex ${
                          pathname === "/dashboard/socialmedia"
                            ? "bg-blue-100 text-black"
                            : "text-black"
                        } items-center shadow-none  gap-4 px-4 py-2 capitalize    rounded-none`}
                      >
                        <Link href="/dashboard/socialmedia">Social Media</Link>
                      </ListItem>
                      <ListItem
                        className={`flex ${
                          pathname === "/dashboard/globalsettings"
                            ? "bg-blue-100 text-black"
                            : "text-black"
                        } items-center shadow-none  gap-4 px-4 py-2 capitalize   rounded-none `}
                      >
                        <Link href="/dashboard/globalsettings">
                          Global Settings
                        </Link>
                      </ListItem>
                    </List> */}
                  </AccordionBody>
                </Accordion>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <NavbarComponent className="p-4 xl:ml-80" setOpenSidenav={setOpenSidenav} openSidenav={openSidenav} />
    </>
  );
};

export default Sidenav;
