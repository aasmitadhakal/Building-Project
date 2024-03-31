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
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import NavbarComponent from "./Navbar";
import { ChevronDownIcon, ChevronRightIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
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
          <div className="sticky top-0  bg-white z-50 mb-4">
            <Link href="/" className="flex items-center shadow-none justify-center my-1">
            <img src={img} className="size-24" alt="Logo" />
            </Link>
            <IconButton
              variant="text"
              size="sm"
              ripple={false}
              className="absolute bg-indigo-500 right-10 top-5 grid rounded-br-none rounded-tl-none xl:hidden"
              onClick={() => setOpenSidenav(!openSidenav)}
            >
              <i className="ri-close-large-line text-xl font-bold "></i>
            </IconButton>
          </div>
          <div className=" mt-4 ">
            <ul className="mb-4 flex flex-col gap-2 ">
              <li>
                <Link href="/dashboard">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize   mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-dashboard-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Dashboard
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/aboutus">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/aboutus" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-group-fill"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      About Us
                    </Typography>
                  </Button>
                </Link>
              </li>

              <li>
                <Link href="/dashboard/contact">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/contact" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-phone-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Contact Us
                    </Typography>
                  </Button>
                </Link>
              </li>
              <Accordion
                open={open === 2}
                icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="flex items-center border-none shadow-none text-black gap-4 px-4 capitalize    mb-1 "
                  >
                    <i className="ri-compasses-2-line text-base"></i>

                    <Typography color="inherit" className="mr-auto font-medium text-base capitalize">
                      Design
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/design" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize rounded-none   mb-1 `}
                    >
                      <Link href="/dashboard/design">Single Design</Link>
                    </ListItem>
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/double" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize  rounded-none  `}
                    >
                      <Link href="/dashboard/double">Double Design</Link>
                    </ListItem>
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/duol" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize  rounded-none  `}
                    >
                      <Link href="/dashboard/duol">Dual Media</Link>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <li>
                <Link href="/dashboard/inquiry">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/inquiry" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-customer-service-2-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Inquiry
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/gallery">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/gallery" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-gallery-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Gallery
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/testimonials">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/testimonials" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-message-2-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Testimonials
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/privacy">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/privacy" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-git-repository-private-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Privacy
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/building">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/building" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-building-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Building
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/whychooseus">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/whychooseus" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-information-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Why Us
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/faq">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/faq" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-question-mark"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      FAQ
                    </Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/clientjourney">
                  <Button
                    variant="gradient"
                    className={`flex ${
                      pathname === "/dashboard/clientjourney" ? "bg-blue-500 text-white" : "text-black"
                    } items-center shadow-none  gap-4 px-4 capitalize    mb-1 text-xl`}
                    fullWidth
                  >
                    <i className="ri-train-line"></i>
                    <Typography color="inherit" className="font-medium capitalize">
                      Client Journey
                    </Typography>
                  </Button>
                </Link>
              </li>
              <Accordion
                open={open === 1}
                icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="flex items-center border-none shadow-none text-black gap-4 px-4 capitalize    mb-1 "
                  >
                    <i className="ri-settings-5-line text-base"></i>

                    <Typography color="inherit" className="mr-auto font-medium text-base capitalize">
                      Global Settings
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-1">
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/slider" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize  rounded-none  `}
                    >
                      <Link href="/dashboard/slider">Slider</Link>
                    </ListItem>
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/sitepages" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize   rounded-none `}
                    >
                      <Link href="/dashboard/sitepages">Pages</Link>
                    </ListItem>
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/socialmedia" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize    rounded-none`}
                    >
                      <Link href="/dashboard/socialmedia">Social Media</Link>
                    </ListItem>
                    <ListItem
                      className={`flex ${
                        pathname === "/dashboard/globalsettings" ? "bg-blue-500 text-white" : "text-black"
                      } items-center shadow-none  gap-4 px-4 py-2 capitalize   rounded-none `}
                    >
                      <Link href="/dashboard/globalsettings">Global Settings</Link>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
            </ul>
          </div>
        </div>
      </aside>
      <NavbarComponent className="p-4 xl:ml-80" setOpenSidenav={setOpenSidenav} openSidenav={openSidenav} />
    </>
  );
};

export default Sidenav;
