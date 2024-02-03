import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="bg-black">
        <Nav />
        <div className="contact text-center">
          <h1 className="underline text-4xl pt-4 mb-4">
            Contact <span className="text-blue-400">Me!</span>
          </h1>
          <div className="flex justify-center items-center">
            <form className="md:w-[50%] sm:w-[80%] w-[100%] lg:w-[40%] text-xl">
              <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                <p className="sm:w-[20%] p-2 ">Name :</p>
                <input
                  className="p-2 sm:w-[80%] outline-none bg-transparent"
                  name="full_name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                <p className="sm:w-[20%] p-2 ">Phone :</p>
                <input
                  className="p-2 sm:w-[80%] outline-none bg-transparent"
                  name="phone"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="flex items-center mb-4 border-2 border-sky-400  rounded-lg">
                <p className="sm:w-[20%] p-2 ">Email :</p>
                <input
                  className="p-2 sm:w-[80%] outline-none bg-transparent"
                  name="email"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="textarea mb-4 flex outline-none  border-2 border-sky-400 rounded-lg">
                <p className="sm:w-[20%] p-2 ">Message :</p>
                <textarea
                  className="sm:w-[80%] p-2 "
                  id=""
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="text-white mb-4">
                <button
                  type="submit"
                  className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg sm:p-2 w-[8rem]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
