import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CartPage from "../pages/CartPage";

const Navbar = () => {
  return (
    <div
      className="text-black text-bold"
      style={{ height: "15vh", backgroundColor: "#E2F3F2" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="">
          <img src={logo} alt="logo" className="h-14" />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <ul className="flex space-x-4 text-2xl font-bold">
            <li>
              <Link to="/" className="hover:text-gray-500">
                Shop
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex-shrink relative">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full py-2 px-9 bg-gray-800 text-white  placeholder-gray-400"
          />
          <button className="absolute text-3xl left-2 top-0 mt-0 mr-4 pr-2">
            <i class="fa fa-search"></i>
          </button>
        </div>

        {/* Cart Icon */}
        <div className="flex-shrink">
          <Link to="/cart" className="text-gray-700 hover:text-gray-900">
            <i className="fa fa-shopping-cart text-3xl" aria-hidden="true"></i>
          </Link>
        </div>

        {/* Desktop Icon  */}
        <div className="flex-shrink">
          <a href="#" className="text-gray-300 hover:text-white"></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
