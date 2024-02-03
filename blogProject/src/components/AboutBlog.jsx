import React, { useState } from "react";
import CustomModal from "./CustomModal";

const AboutBlog = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {props.Introduction && (
        <div class="mx-4 py-2 md:py-4 ">
          <p class=" text-lg indent-12 text-justify first-letter:text-7xl first-letter:font-bold first-letter:text-red-900 dark:first-letter:text-red-900">
            {props.Introduction}
          </p>
        </div>
      )}

      {props.heading && (
        <div className="md:my-8 my-4">
          <h1 class=" underline text-center font-bold text-xl md:text-2xl ">
            {props.heading}
          </h1>
        </div>
      )}
      {props.imagegallery && props.description && (
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4  md:my-6 my-3">
          <div data-aos="fade-right" data-aos-duration="1000" className="block space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center  ">
            <img
              src={props.imagegallery}
              onClick={() => setOpen(true)}
              alt=""
              className="h-[250px] w-[100%] object-cover object-center rounded-lg"
            />

            <CustomModal
              open={open}
              setOpen={setOpen}
              imagegallery={props.imagegallery}
            />
          </div>

          <div  data-aos="fade-left" data-aos-duration="1000"  class="lg:col-span-2  sm:py-2 ">
            <p class=" sm:px-4 lg:px-8  text-lg indent-12 text-justify">
              {props.description}
            </p>
          </div>
        </div>
      )}
      {props.Longdescription && (
        <div  data-aos="fade-up" data-aos-duration="1000"  class=" text-lg my-10  text-justify">
          <p class="indent-12">{props.Longdescription}</p>
        </div>
      )}

      {props.Imagecard && (
        <div  data-aos="fade-right" data-aos-duration="1000"  className="flex justify-center flex-wrap gap-2 my-4 ">
          {props.Imagecard.map((image, index) => (
            <div
              key={index}
              className="block space-y-4 md:space-y-0 md:space-x-4 flex items-center"
            >
              <img
                src={image}
                className="sm:h-[300px] md:h-[300px] h-[150px] rounded-lg object-cover object-center"
                alt=""
                // onClick={() => setOpen(true)}
              />
              {/* <CustomModal open={open} setOpen={setOpen} imagegallery={image} /> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AboutBlog;
