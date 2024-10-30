import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { TbUser } from "react-icons/tb";
import { AiOutlineTag } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { RiUserStarLine } from "react-icons/ri";
import { GrUserPolice } from "react-icons/gr";
import { SlPeople } from "react-icons/sl";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import logo from "../assets/images/logo.png";
import sideBarIcon from "../assets/images/sidebar icon.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: "", icon: <MdOutlineDashboard />, path: "/" },
    { name: "Calendar", icon: <RiCalendar2Line />, path: "/calendar" },
    { name: "Sales", icon: <AiOutlineTag />, path: "/sales" },
    { name: "Expenses", icon: <LuWallet />, path: "/expenses" },
    { name: "Employee", icon: <GrUserPolice />, path: "/employee" },
    { name: "Customers", icon: <RiUserStarLine />, path: "/customers" },
    { name: "Products", icon: <MdOutlineProductionQuantityLimits />, path: "/products" },
    { name: "HRM", icon: <SlPeople />, path: "/hrm" },
    { name: "CRM", icon: <RiContactsBook3Line />, path: "/crm" },
    { name: "Automation", icon: <TbSettingsAutomation />, path: "/automation" },
    { name: "Marketing", icon: <GrAnnounce />, path: "/marketing" },
    { name: "Reports", icon: <BsGraphUp />, path: "/reports" },
    { name: "My Account", icon: <TbUser />, path: "/account" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20`}
    >
      <div className="p-4 flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-24" />
        </NavLink>
        <button onClick={toggleSidebar} className="text-xl">
          <img src={sideBarIcon} alt="Sidebar icon" className="w-8" />
        </button>
      </div>
      <div className="p-4 overflow-y-auto max-h-[calc(100vh-64px)]">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            onClick={toggleSidebar} // Close sidebar when NavLink is clicked
            className={({ isActive }) =>
              `flex items-center p-2 ${isActive ? 'bg-[#101928] text-white rounded-lg' : 'text-black'} cursor-pointer transition duration-200 ease-in-out`
            }
          >
            <div className={`text-2xl group-hover:text-white`}>
              {item.icon}
            </div>
            <span className="ml-4 text-lg font-medium transition duration-200 ease-in-out">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
