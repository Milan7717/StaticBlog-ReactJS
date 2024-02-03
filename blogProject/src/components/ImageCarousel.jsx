import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";



const ImageCarousel = ({images}) => {
  const [current, setCurrent] = useState(0);

  function prevImage() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  function nextImage() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  useEffect(()=>{
    const intervalTime = setInterval(()=>{
      nextImage();
    },5000)

    return()=> clearInterval(intervalTime)

  },[current,images])


  return (
    <>
      <div class="flex items-center justify-center h-56 lg:h-[682px] overflow-hidden rounded-lg sm:h-96">
        <div className="flex text-4xl ">
          <FaAngleLeft onClick={prevImage} className="cursor-pointer" />
        </div>
        <div >
          {images.map(
            (image, index) =>
              current === index && (
                <div>
                  <img
                    src={image}
                    key={index}
                    className="rounded-xl object-center object-cover bg-cover bg-center"
                    alt="image"
                  />
                </div>
              )
          )}
        </div>

        <div className="flex text-4xl ">
          <FaChevronRight onClick={nextImage} className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
