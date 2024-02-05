import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const blogCardApi = [
  {
    heading: "Travelling",
    description: "Traveling is one of the most enriching experiences one can have. It broadens our horizons, exposes us to new cultures..",
    image: "assets/blogimg/view2.jpg",
    link: "/travelling",
  },
  {
    heading: "Friends",
    description: "Friendship is a close and meaningful relationship between two or more people who share mutual trust, support,and understanding.",
    image: "assets/blogimg/bca2.jpg",
    link: "/friends",
  },
];

const Blog = () => {
  return (
    <>
      <div className="bg-black">
      <Nav />

        <div className=" lg:mx-24 md:mx-10 sm:mx-8">
          <div className="p-4 mx-12 ">
            <h1 data-aos="fade-down" data-aos-duration="1000" className=" text-center my-4 sm:my-6 md:my-10 text-4xl underline">The Feed</h1>

            <div  data-aos="fade-right" data-aos-duration="1000" className="mx-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-16 md:gap-10">
            
              {blogCardApi.map((blogData, index) => {
                return (
                  <BlogCard
                    key={index}
                    link={blogData.link}
                    heading={blogData.heading}
                    description={blogData.description}
                    imagegallery={blogData.image}
                  />
                );
              })}

              {/* here end */}
            </div>

            <div className="my-8">
              <a href="#">
                <button
                  type="button"
                  className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2 my-4"
                >
                  Load More
                </button>
              </a>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
};
export { blogCardApi };
export default Blog;
