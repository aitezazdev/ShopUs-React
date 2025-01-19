import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../Store/Slices/SearchProduct";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleSearch = (e) => {
    dispatch(updateSearchQuery(e.target.value));
  };

  return (
    <nav className="border-b border-gray-200 bg-white h-20 flex justify-between items-center md:px-10 px-5 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between gap-10 w-3/5">
        <h1 className="md:text-3xl font-bold text-xl">
          Shop Up
        </h1>
        <ul className="md:flex md:items-center hidden space-x-8 md:text-lg">
          <li className="relative group">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              <span className="cursor-pointer py-2">Home</span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              <span className="cursor-pointer py-2">Products</span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              <span className="cursor-pointer py-2">About</span>
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/logout" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
              <span className="cursor-pointer py-2">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center md:gap-8 gap-5">
        <div className="hidden md:flex md:items-center md:relative">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch} // Added missing handleSearch event
            className="w-64 outline-none px-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
          />
          <IoSearch className="absolute right-3 text-gray-400 text-xl" />
        </div>

        <div className="flex items-center gap-6">
          <NavLink to="/favourites" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
            <IoMdHeartEmpty className="text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
            <IoCartOutline className="text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
          </NavLink>
        </div>

        <GiHamburgerMenu
          onClick={handleClick}
          className={`text-2xl cursor-pointer md:hidden hover:text-blue-600 transition-colors duration-300 ${
            menu ? "hidden" : "block"
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed h-screen bg-white w-72 right-0 top-0 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MdCancel
          onClick={handleClick}
          className="absolute top-6 right-6 text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-300"
        />
        <div className="mt-20 px-6">
          <div className="relative mb-8">
            <input 
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              className="w-full outline-none px-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            />
            <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
          <ul className="space-y-6">
            <li className="transform hover:translate-x-2 transition-transform duration-300 cursor-pointer">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                Home
              </NavLink>
            </li>
            <li className="transform hover:translate-x-2 transition-transform duration-300 cursor-pointer">
              <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                Products
              </NavLink>
            </li>
            <li className="transform hover:translate-x-2 transition-transform duration-300 cursor-pointer">
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                About
              </NavLink>
            </li>
            <li className="transform hover:translate-x-2 transition-transform duration-300 cursor-pointer">
              <NavLink to="/logout" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;