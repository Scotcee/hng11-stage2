import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ cartSize }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="text-black font-bold"
      style={{ backgroundColor: "#E2F3F2" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-4">
            <img src={logo} alt="logo" className="h-14" />
          </Link>

          {/* Search Input */}
          <div className="flex-shrink relative ml-4 md:ml-8">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="absolute text-white text-2xl right-0 top-0  mr-2">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 text-xl font-bold">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Shop
              </Link>
            </li>
            <li>
              <span className="hover:text-gray-300">Offers</span>
            </li>
            <li>
              <span className="hover:text-gray-300">Our Story</span>
            </li>
            <li>
              <span className="hover:text-gray-300">Blog</span>
            </li>
          </ul>
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center ml-auto">
          {/* Cart Icon */}
          <div className="flex-shrink relative ml-2">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-gray-900 flex items-center"
            >
              <i
                className="fa fa-shopping-cart text-3xl md:text-5xl"
                aria-hidden="true"
              ></i>
              {cartSize > 0 && (
                <span className="ml-1 md:ml-2 flex justify-center items-center bg-red-800 text-white font-bold text-xs md:text-md w-5 md:w-7 h-5 md:h-7 rounded-full">
                  {cartSize}
                </span>
              )}
            </Link>
          </div>

          {/* Profile Icon */}
          <div className="flex-shrink relative ml-2">
            <span className="text-gray-300 hover:text-white">
              <i
                className="fa fa-user-circle text-3xl md:text-5xl"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden mx-2">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-xl hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <span
                className="block py-2 px-4 text-xl hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Offers
              </span>
            </li>
            <li>
              <span
                className="block py-2 px-4 text-xl hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Our Story
              </span>
            </li>
            <li>
              <span
                className="block py-2 px-4 text-xl hover:bg-gray-800"
                onClick={toggleMenu}
              >
                Blog
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default Navbar;
