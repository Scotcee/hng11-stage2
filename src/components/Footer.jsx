import React from "react";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <div
      className="text-black text-bold"
      style={{
        backgroundColor: "#E2F3F2",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-no-wrap items-center">
        {/* Logo */}
        <div className="hidden md:hidden lg:block w-full lg:w-1/4 mb-8 lg:mb-0">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-30" />
          </a>
        </div>

        <div className="text-center w-full md:w-3/4 md:text-left">
          <div className="">
            <h1 className="text-2xl text-center md:text-left mb-5">
              Subscribe to our Newsletter
            </h1>
            <div className="flex w-full">
              <div className="flex w-full md:w-auto mb-2 md:mb-0 md:mr-2">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="pl-10 shadow appearance-none border py-2 px-3 md:px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    placeholder="Enter your email..."
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: "#565E6D" }}
              >
                Subscribe
              </button>
            </div>
            <div className="my-5">
              <ul className="flex flex-wrap">
                <li className="hover:text-blue-500 transition duration-300 mr-5 mb-2">
                  <a href="#">Pricing</a>
                </li>
                <li className="hover:text-blue-500 transition duration-300 mr-5 mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:text-blue-500 transition duration-300 mr-5 mb-2">
                  <a href="#">Cart</a>
                </li>
                <li className="hover:text-blue-500 transition duration-300 mb-2">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-300"></div>
            <div className="footer-links text-sm flex flex-wrap justify-between mt-5">
              <p className="w-full md:w-auto">
                &copy; Kuda Luxurious Wears Inc.
              </p>
              <ul className="flex justify-center md:justify-start w-full md:w-auto list-disc">
                <li className="mr-4">
                  <a href="#">Privacy</a>
                </li>
                <li className="mr-4">
                  <a href="#">Terms</a>
                </li>
                <li className="mr-4">
                  <a href="#">Site Map</a>
                </li>
              </ul>
              <ul className="flex space-x-5">
                <li className="transform transition duration-300 hover:scale-110">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="transform transition duration-300 hover:scale-110">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="transform transition duration-300 hover:scale-110">
                  <a href="#" className="text-purple-600 hover:text-purple-800">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="transform transition duration-300 hover:scale-110">
                  <a href="#" className="text-red-600 hover:text-red-800">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
