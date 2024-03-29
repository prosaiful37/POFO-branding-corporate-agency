import React from "react";
import { FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Images/logo@2x.png";

const Header = () => {
  return (
    <div className="container md:w-4/5 mx-auto">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" href="#" className="flex items-center"> 
            <img
              src={logo}
              className="w-24 md:h-[26px] md:w-[105px]"
              alt="site logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/"
                  
                  className="block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/services"
                  className="block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0 font-sans"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0 "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="team"
                  className="block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0 "
                >
                  Team
                </Link>
              </li>
              <li>
                <Link to="pricing"
                  className="block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0 "
                >
                  Pricing
                </Link>
              </li>
              <div className="hidden md:flex gap-5 border-l-2">
                <li className="pl-3">
                  <a href="">
                    {" "}
                    <FaFacebookF className="text-gray-700 block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0"></FaFacebookF>{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <FaTwitter className="text-gray-700 block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0"></FaTwitter>{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <FaDribbble className="text-gray-700 block py-2 pl-3 pr-4 text-gray-700 block py-2 pl-3 pr-4 text-black uppercase hover:text-gray-400 md:border-0 md:p-0"></FaDribbble>{" "}
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
