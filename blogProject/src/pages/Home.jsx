import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import { Link } from "react-router-dom";
import Blogcard from "../components/BlogCard";
import { blogCardApi } from "./Blog";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const recentBlogs = blogCardApi.slice(-3);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(getRandomQuote(json));
      });

    const intervalTime = setInterval(() => {
      setQuote(getRandomQuote(quotes));
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalTime);
  }, []);

  return (
    <>
      <div className="bg-black">
      <Nav />
        <div
          className="min-h-[692px] bg-cover flex justify-center flex-col"
          style={{
            backgroundPosition: "40% 30%",
            backgroundImage: "url('assets/img/IMG_20220609_223900.jpg')",
          }}
        >
          <div className=" rounded-xl mt-52 sm:mt-32 lg:mx-16 lg:mt-56  bg-black bg-opacity-30 shadow-2xl">
            <h1 data-aos="fade-down" data-aos-duration="2000"
     data-aos-anchor-placement="center-center" className="p-2 mb-2 sm:mb-4 text-2xl  font-semibold md:font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl  text-center mt-2 ">
              Welcome to My World: So Glad You've Arrived.
            </h1>
            <p data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="center-center" className="indent-12 text-justify text-lg font-semibold text-white sm:p-4 p-2 md\:text-xl lg:text-3xl xl:px-16 ">
              Step into my world and discover the things that excite me the
              most. From exploring new places to indulging in my passions for
              music, movies, sports, and spending time with friends, my blog is
              a space where I share my experiences and opinions.I hope that my
              blog inspires you to embark on your own adventures, try new
              things, and make lasting memories with the people you love. So
              come along for the ride, and let's explore the world together.{" "}
            </p>
          </div>
        </div>

        {/* recent blogs */}

        <div className="my-10">
          <h1 className="text-center my-8 text-4xl underline">Recent Blogs</h1>
          <div data-aos="fade-right" data-aos-duration="1500" className="sm:mx-10 mx-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
          {recentBlogs.map((blogData, index) => (
            <Blogcard
              key={index}
              link={blogData.link}
              heading={blogData.heading}
              description={blogData.description}
              imagegallery={blogData.image}
            />
          ))}
        </div>
        </div>



        {/* quote of the day */}

        <div className=" flex flex-col sm:items-center sm:justify-center text-center">
          <div data-aos="fade-left" data-aos-duration="1500" className="my-10 rounded-lg bg-orange-400 p-6 md:w-[50%] sm:w-[60%]">
            <div className=" text-center my-4 text-4xl underline">
              <h1>Quote of the day</h1>
            </div>

            <div>
              <span className="quote text-lg md:text-xl">"{quote?.text}"</span>
              <p className="namee text-red-800 text-lg font-semibold md:text-2xl pt-2">
                - {quote?.author}
              </p>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
};

export default Home;
