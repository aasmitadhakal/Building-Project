"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sidebar, Avatar, Dropdown } from "flowbite-react";
import { HiChartPie, HiTable, HiChatAlt2, HiOutlineBookOpen } from "react-icons/hi";
import { FaHeadphones, FaBookOpen, FaGlobe, FaQuestion } from "react-icons/fa";
import { BsFillPeopleFill, BsGear } from "react-icons/bs";

const Sidenav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [error, setError] = useState();

  const router = useRouter();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = async () => {
    localStorage.removeItem("authorizations");
    router.push("/login");

    //  try {
    //     const response = await fetch("http://192.168.1.143:3000/api/logout", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //    });

    //     if (response.ok) {
    //      const data = await response.json();
    //      localStorage.removeItem("token");
    //         router.push("/login");
    //     } else {
    //       throw new Error("Invalid username or password");
    //     }
    //  } catch (error) {
    //    setError(error.message);
    //  }
  };

  // call logout function when logout is closed
  //  useEffect(() => {
  //    const handleWindowClose = () => {
  //      logout();
  //    };

  //    window.addEventListener("beforeunload", handleWindowClose);

  //    return () => {
  //      window.removeEventListener("beforeunload", handleWindowClose);
  //    };
  //  }, []);

  return (
    <nav className="relative  z-50">
      <div className="fixed top-5 right-5 z-50 sm:hidden">
        <button onClick={toggleSidebar} className=" px-2 py-1 rounded-md">
          {!isSidebarOpen ? <i className="ri-menu-line text-xl"></i> : <i className="ri-close-large-line text-xl"></i>}
        </button>
      </div>
      <Sidebar style={{ backgroundColor: "white" }} className={`fixed top-0 left-0 bottom-0 sm:block ${isSidebarOpen ? "" : "hidden"}`}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link href="/dashboard">
              <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
            </Link>

            <Link href="/dashboard/aboutus">
              <Sidebar.Item icon={FaGlobe}>AboutUs</Sidebar.Item>
            </Link>

            <Sidebar.Collapse icon={BsGear} label="Design">
              <Link href="/dashboard/design">
                <Sidebar.Item>Single Design</Sidebar.Item>
              </Link>
              <Link href="/dashboard/double">
                <Sidebar.Item>Double Design</Sidebar.Item>
              </Link>
              <Link href="/dashboard/duol">
                <Sidebar.Item>Dual media</Sidebar.Item>
              </Link>
            </Sidebar.Collapse>

            <Link href="/dashboard/services">
              <Sidebar.Item icon={FaHeadphones}>Services</Sidebar.Item>
            </Link>

            <Link href="/dashboard/gallery">
              <Sidebar.Item icon={FaBookOpen}>Gallery</Sidebar.Item>
            </Link>

            <Link href="/dashboard/contact">
              <Sidebar.Item icon={HiChatAlt2}>ContactUs</Sidebar.Item>
            </Link>

            <Link href="/dashboard/privacy">
              <Sidebar.Item icon={HiTable}>Privacy</Sidebar.Item>
            </Link>
            <Link href="/dashboard/inquiry">
              <Sidebar.Item icon={HiTable}>Inquiry</Sidebar.Item>
            </Link>

            <Link href="/dashboard/testimonials">
              <Sidebar.Item icon={HiTable}>Testimonials</Sidebar.Item>
            </Link>

            <Link href="/dashboard/whychooseus">
              <Sidebar.Item icon={HiTable}>Why us? </Sidebar.Item>
            </Link>

            <Link href="/dashboard/faq">
              <Sidebar.Item icon={FaQuestion}>FAQ</Sidebar.Item>
            </Link>
            <Link href="/dashboard/clientjourney">
              <Sidebar.Item icon={FaBookOpen}>Client Journey </Sidebar.Item>
            </Link>
            <Sidebar.Collapse icon={BsGear} label="Global Settings">
              <Link href="/dashboard/slider">
                <Sidebar.Item>Sliders</Sidebar.Item>
              </Link>
              <Link href="/dashboard/sitepages">
                <Sidebar.Item>Pages</Sidebar.Item>
              </Link>
              <Link href="/dashboard/socialmedia">
                <Sidebar.Item>Social media</Sidebar.Item>
              </Link>
              <Link href="/dashboard/globalsettings">
                <Sidebar.Item>Global Settings</Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={BsGear} label="General Settings">
              <Link href="/dashboard/slider">
                <Sidebar.Item>Global</Sidebar.Item>
              </Link>
              <Link href="/dashboard/sitepages">
                <Sidebar.Item>Homepage</Sidebar.Item>
              </Link>
              <Link href="/dashboard/socialmedia">
                <Sidebar.Item>Contact</Sidebar.Item>
              </Link>
              <Link href="/dashboard/globalsettings">
                <Sidebar.Item>SEO </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <div className="mt-20 ">
          <Dropdown
            label={
              <Avatar
                alt="User settings"
                img="https://img.freepik.com/free-photo/front-view-man-eating-seaweed-snacks_23-2150872520.jpg?t=st=1710947090~exp=1710950690~hmac=89a62bb7de86f4c0e1cf2b38ee2edfb71be9c9a02a5809cbeedc45d53b656cf1&w=826"
                rounded
              >
                <div className="space-y-1 font-normal dark:text-white text-left">
                  <p>Jese Leos</p>
                  <p className="text-sm font-light">Role</p>
                </div>
              </Avatar>
            }
            arrowIcon={false}
            inline
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Sidebar>
    </nav>
  );
};

export default Sidenav;
