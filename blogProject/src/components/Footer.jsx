import React from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className=" footer px-2 bg-gray-600 text-black shadow flex items-center justify-between rounded md:p-2">
        <div className="text-sm sm:text-center flex items-center justify-center ">
          <p className="">Copyright &copy; 2023 by Milan | All Rights Reserved.</p>
        </div>
        <div className="alpha mx-4 rounded-xl bg-red-500 m-1 ">
          <Link to="#" className="p-2 bg-red-500">
          <BsArrowUpSquare />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
