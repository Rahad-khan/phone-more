import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/home" className="flex items-center">
            <p className="text-2xl font-semibold">Phone 
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-purple-800">
                More
              </span>
            </p>
          </Link>
          <button onClick={() => setOpen(!open)}
          className="block md:hidden"
          >
            {
              open ? <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg> : <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            }
          </button>
          <div className={`w-full md:block md:w-auto ${open ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
              <li className="mb-2">
                <CustomLink
                  to="/"
                >
                  Home
                </CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink
                  to="/reviews">
                  Review
                </CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink
                  to="/dashboard">
                  Dashboard
                </CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink
                  to="/blogs">
                  Blogs
                </CustomLink>
              </li>
              <li className="mb-2">
                <CustomLink
                  to="/about">
                  About
                </CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
