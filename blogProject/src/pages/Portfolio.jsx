import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div className="bg-black">
        <Nav />
        <div className=" lg:mx-32 md:mx-16 sm:mx-10">
          {/* <!-------------- home part  -------------> */}
          <div
            id="home"
            className="home min-h-[100vh] w-[100%]  flex flex-wrap-reverse justify-center"
          >
            <div className="w-[100%] sm:w-[65%] md:w-[60%] lg:w-[50%] lg:mt-24  flex flex-col sm:justify-center  h-[90vh] mt-4">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                className="mx-2"
              >
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:my-4 my-2">
                  Hi, I'm <span className="text-blue-500">Milan Mishra</span>
                </h1>
                <div className="text-animation">
                  <h2 className="font-bold md:text-3xl sm:text-2xl text-xl md:my-4 mb-2">
                    Frontend Developer
                  </h2>
                </div>

                <p>
                  Driven by a passion for creating seamless, user-centric
                  digital experiences. Proficient in HTML, CSS, and JavaScript,
                  I specialize in transforming design concepts into responsive
                  and visually appealing websites. With a commitment to
                  innovation and continuous learning, I thrive on crafting
                  elegant solutions that elevate the online presence of
                  businesses and individuals alike. Let's collaborate to bring
                  your digital vision to life!
                </p>
              </div>
              <div className="my-4 mx-2">
                <Link to={"/contact"}>
                  <button
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    type="button"
                    className="btn mr-4 bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2"
                  >
                    Lets Talk
                  </button>
                </Link>
                <button
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  type="button"
                  className="btn bg-blue-400 p-1 border-2 border-sky-400 text-lg sm:text-xl rounded-lg p-2"
                >
                  Hire Me
                </button>
              </div>

              <div className="social md:mt-18 sm:mt-12 mt-8 mx-2">
                <Link
                  to="#"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="sm:text-4xl text-3xl md:text-6xl mr-6 border-2 border-sky-400 "
                >
                  <GrFacebookOption className="p-1 md:p-2" />
                </Link>
                <Link
                  to="#"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className=" sm:text-4xl text-3xl md:text-6xl mr-6 border-2 border-sky-400 "
                >
                  <BsInstagram className="p-1 md:p-2" />
                </Link>
                <Link
                  to="#"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className=" sm:text-4xl text-3xl md:text-6xl mr-6 border-2 border-sky-400 "
                >
                  <FaTwitter className="p-1 md:p-2" />
                </Link>
                <Link
                  to="#"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className=" sm:text-4xl text-3xl md:text-6xl mr-6 border-2 border-sky-400 "
                >
                  <FaLinkedinIn className="p-1 md:p-2" />
                </Link>
              </div>
            </div>

            <div className="w-[100%] sm:w-[35%] md:w-[40%] bg-yellow-80 flex justify-center  ">
              <img
                src="assets/img/daurasuruwal.jpg"
                alt=""
                className="rounded-lg w-[50%] md:h-[60%] lg:h-[65%] sm:h-[50%] sm:w-[100%] sm:mr-4 md:mr-0 mt-16 bg-cover  bg-cover object-center"
              />
            </div>
          </div>

          {/* <!-- about section --> */}
          <div id="about" className="lg:mt-24 md:mt-14 sm:mt-10 mt-6">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-center md:text-4xl text-2xl font-bold my-10">
                About <span className="text-blue-400">Me</span>
              </h1>

              <div className="md:h-[25rem] md:w-[25rem] h-[20rem] w-[20rem] flex relative justify-center items-center">
                <img src="assets/img/milan.jpg" alt="" className="" />
                <span className="circle-spin"></span>
              </div>
              <div className="my-6 mx-2">
                <p>
                  Originating from the picturesque town of Kavre, Panchkhal, I
                  am Milan Mishra, a dedicated individual driven by passion,
                  discipline, and an unwavering work ethic. With a hometown
                  surrounded by natural beauty, my upbringing instilled in me a
                  deep appreciation for simplicity and tranquility.
                  <br />
                  As a diligent and hardworking individual, I am committed to
                  excelling in every endeavor. My behavior is characterized by a
                  disciplined approach, ensuring that I tackle challenges with
                  resilience and determination. Rooted in a love for learning, I
                  find solace in the pursuit of knowledge and continuous
                  self-improvement.
                  <br />
                  Beyond the world of coding and development, I am an avid movie
                  enthusiast. The art of storytelling captivates me, with
                  favorites including "The Pursuit of Happyness,"
                  "Predestination," and "Shutter Island." In my leisure time, I
                  indulge in travel, exploring new cultures and landscapes.
                  Currently pursuing my education at Texas International
                  College, I carry my childhood traits of being a brilliant,
                  obedient, and calm student into my academic journey. It is
                  this love for studying that has propelled me to pursue
                  excellence in my education.
                  <br />
                  In essence, I am on a lifelong journey of growth and
                  discovery, combining my passion for technology with a love for
                  movies, travel, and academic pursuits. As I navigate through
                  life, I am dedicated to creating a meaningful impact through
                  my work and experiences.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- education section --> */}
          <div id="education" className="lg:mt-24 md:mt-18 sm:mt-14 mt-10">
            <h1 className="text-center md:text-4xl text-2xl font-bold my-10">
              My <span className="text-blue-400">Journey</span>{" "}
            </h1>
            <div className=" mx-2">
              <h1 className="font-bold md:text-xl text-lg my-2">Education</h1>
              <div className=" mt-4 mb-6">
                <div
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                  className="content mb-6 border-2 border-sky-400 p-2 rounded-lg"
                >
                  <p>
                    <span className="font-semibold text-lg"> School</span> -
                    Golden Future Higher Secondary School
                  </p>
                  <i className="fa-regular fa-calendar"></i>
                  <span className="ml-2 text-blue-400">2005-2017</span>
                  <p className="my-1 md:my-2">
                    I completed my secondary education from Golden Future Higher
                    Secondary School in my hometown, where I received a solid
                    education in various subjects and achieved a GPA of 3.70 in
                    the SEE exams.
                  </p>
                </div>
                <div
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                  className="content mb-6 border-2 border-sky-400 p-2 rounded-lg"
                >
                  <p>
                    <span className="font-semibold">+2</span> - Liverpool
                    International College
                  </p>
                  <i className="fa-regular fa-calendar"></i>
                  <span className="ml-2 text-blue-400">2017-2019</span>
                  <p className="my-1 md:my-2">
                    Following that, I pursued my +2 degree in Physical Science
                    from Liverpool International College in Kathmandu, where I
                    learned about the fundamental principles of Physics,
                    Chemistry, and Mathematics. I graduated with an overall GPA
                    of 3.15 and was able to develop my problem-solving and
                    analytical skills.
                  </p>
                </div>
                <div
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                  className="content mb-6 border-2 border-sky-400 p-2 rounded-lg"
                >
                  <p>
                    <span className="font-semibold">Bachelor</span> - Texas
                    International College
                  </p>
                  <i className="fa-regular fa-calendar"></i>
                  <span className="ml-2 text-blue-400">2021-2024</span>
                  <p className="my-1 md:my-2">
                    Currently, I am pursuing a Bachelor's degree in Information
                    Technology (BIT) from Texas International College in
                    Kathmandu. The program has provided me with an opportunity
                    to expand my knowledge and skills in the field of technology
                    and computer science. I am eager to learn about the latest
                    technologies and develop my expertise in programming,
                    database management, and system administration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- skills --> */}
          <div className="text-center lg:mt-24 md:mt-18 sm:mt-14 mt-10">
            <h1 className="text-center md:text-4xl text-2xl font-bold my-10">
              My <span className="text-blue-400"> Skills</span>
            </h1>
            {/* <!-- animation --> */}
            <div className="flex justify-center ">
              <div
                id="animContainer"
                className=" md:w-[40%] w-[50%] my-4"
              ></div>
            </div>

            <div className="flex flex-wrap justify-between gap-4  mx-2">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-2 border-sky-400 md:w-[48%] w-[100%] p-4 rounded-lg"
              >
                <h1 className="font-bold text-xl">Coding Skills</h1>
                <div className="my-2">
                  <div className="flex justify-between">
                    <p>HTML</p>
                    <span>90%</span>
                  </div>
                  <div className="bar my-1">
                    <span className="w-[90%]"></span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <p>CSS</p>
                    <span>90%</span>
                  </div>
                  <div className="bar my-1">
                    <span className="w-[90%]"></span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <p>Javascript</p>
                    <span>80%</span>
                  </div>
                  <div className="bar my-1">
                    <span className="w-[80%]"></span>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="border-2 border-sky-400 md:w-[48%]  w-[100%] p-4 rounded-lg"
              >
                <h1 className="font-bold text-xl">Professional Skills</h1>
                <div className="my-2">
                  <div className="flex justify-between">
                    <p>Web Design</p>
                    <span>90%</span>
                  </div>
                  <div className="bar my-1">
                    <span className="w-[90%]"></span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <p>Web Development</p>
                    <span>70%</span>
                  </div>
                  <div className="bar my-1">
                    <span className="w-[70%]"></span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex justify-between">
                    <p>Content Creation</p>
                    <span>50%</span>
                  </div>
                  <div className="bar my-1">
                    <span className="w-[50%]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- project --> */}
          <div className="project lg:mt-24 md:mt-18 sm:mt-14 mt-10 mx-2">
            <h1 className="text-center md:text-4xl text-2xl font-bold my-10">
              My <span className="text-blue-400"> Project</span>
            </h1>
            <div
              data-aos="fade-up-right"
              data-aos-duration="1500"
              className="content mb-6 border-2 border-sky-400 px-3 p-2 rounded-lg"
            >
              <span className="font-semibold text-xl">Simple Calculator</span>
              <p className="my-2">
                Simple calculator is a web application that allows users to
                perform basic arithmetic operations such as addition,
                subtraction, multiplication, and division. The calculator
                interface is designed using HTML and CSS to create a clean and
                intuitive layout that is easy to use. The calculator
                functionality is implemented using JavaScript, which enables the
                application to perform real-time calculations based on user
                input. WThe result is displayed on the calculator interface in
                real-time, allowing users to see the outcome of their
                calculations immediately.
              </p>
              <Link to={"https://milan7717.github.io/simpleCalculator/"}>
                <p>Link : https://milan7717.github.io/simpleCalculator/ </p>
              </Link>
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-duration="1500"
              className="content mb-6 border-2 border-sky-400 px-3 p-2 rounded-lg"
            >
              <span className="font-semibold text-xl">ShoeShop</span>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laudantium mollitia minus fuga quasi quos omnis! Quos
                quod veritatis itaque?
              </p>
              <p></p>
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-duration="1500"
              className="content mb-6 border-2 border-sky-400 px-3 p-2 rounded-lg"
            >
              <span className="font-semibold text-xl">Book Collection</span>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laudantium mollitia minus fuga quasi quos omnis! Quos
                quod veritatis itaque?
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
