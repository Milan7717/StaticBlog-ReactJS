import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";

const Blogcard = (props) => {
    const [open, setOpen] = useState(false);

  return (
    <div  className="rounded-xl border-1 border-slate-400  bg-gray-500 bg-opacity-30 shadow-2xl shadow-black-500/50">
      {/* <!------------- modal ------------> */}
      <div className="block  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center  ">
        <img
          src={props.imagegallery}
          onClick={() => setOpen(true)}
          alt=""
          className="h-[170px] sm:h-[250px] w-[100%] object-cover object-center rounded-lg"
        />

        <CustomModal
          open={open}
          setOpen={setOpen}
          imagegallery={props.imagegallery}
        />
      </div>

      <div className=" p-2 sm:p-5">
        <h1 className="text-center  text-xl md:text-2xl underline font-semibold ">
          {props.heading}
        </h1>
        <p className="text-justify sm:text-lg text-sm my-2 ">{props.description}</p>
        
        <Link to={props.link}>
          <button
            type="button"
            className="btn mr-4 p-1 bg-blue-500 border-2 border-sky-400 text-lg rounded-lg"
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogcard;
