import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 sm:py-2.5 rounded">
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
              open ? <ImCross/> : <CgMenu className="text-2xl font-extraboldbold"/>
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
