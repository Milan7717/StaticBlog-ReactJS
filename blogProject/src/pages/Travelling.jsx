import React from "react";
import Nav from "../components/Navbar";
import AboutBlog from "../components/AboutBlog";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const aboutBlogApi = [
  {
    heading: "Jyamdi Kavre",
    Introduction:
      "Traveling is one of the most enriching experiences one can have. It broadens our horizons, exposes us to new cultures and ways of life, and allows us to disconnect from our daily routines. Whether you're traveling solo, with friends or family, or even for work, every trip is a chance to learn something new and create unforgettable memories. From exploring exotic destinations to trying new foods and meeting new people, traveling has a way on changing our perspectives and giving us a new appreciation for the world around us.",
    description:
      "Jyamdi Stupa is a hidden gem in the Kavreplanchok district of Nepal that offers a unique and off-the-beaten-path experience for travelers. The stupa is located at an altitude of 3428m, making it an ideal destination for adventure seekers and nature enthusiasts alike. The journey to Jyamdi Stupa is not for the faint-hearted, as it can only be reached via an off-road route. However, the rugged terrain adds to the charm of the place, and the picturesque views along the way are truly breathtaking. The area around Jyamdi Stupa is characterized by lush greenery and tranquil surroundings, making it a peaceful retreat from the hustle and bustle of city life. The stupa itself is a beautiful structure that exudes a sense of calm and spirituality. Visitors can spend hours exploring the intricate details of the stupa and admiring the stunning views of the surrounding landscape.",
    Longdescritpion:
      "Sure, here's a more detailed description of Jyamdi Stupa that you can use for your blog: Jyamdi Stupa is a hidden gem in the Kavreplanchok district of Nepal that offers a unique and off-the-beaten-path experience for travelers. The stupa is located at an altitude of 3428m, making it an  ideal destination for adventure seekers and nature enthusiasts alike. The journey to Jyamdi Stupa is not  for the faint-hearted, as it can only be reached via an off-road route. However, the rugged terrain adds  to the charm of the place, and the picturesque views along the way are truly breathtaking. The area around Jyamdi Stupa is characterized by lush greenery and tranquil surroundings, making it a  peaceful retreat from the hustle and bustle of city life. The stupa itself is a beautiful structure that  exudes a sense of calm and spirituality. Visitors can spend hours exploring the intricate details of the stupa and admiring the stunning views of the surrounding landscape. One of the highlights of Jyamdi Stupa is the panoramic view it offers of the Panchkal municipality and Melamgi. From the stupa's vantage point, visitors can see the entire municipality and the winding Melamgi  River, making it a truly spectacular sight, especially during sunrise and sunset. For those looking to spend the night, Jyamdi Stupa is an excellent choice. The serene and peaceful surroundings provide a perfect ambiance for a relaxing and rejuvenating stay. Visitors can camp out under  the stars and wake up to the sounds of nature or stay in one of the few nearby lodges.",
    image: "/src/assets/travellingimg/jyamdi1.jpg",
  },

  {
    heading: "Swayambhu",
    description:
      " Swayambhu is a beautiful and iconic Buddhist temple that stands atop a hill in Kathmandu Valley, Nepal. It is also known as the Monkey Temple due to the hundreds of monkeys that call the area their home. The temple complex is believed to have been built over 2,000 years ago, and it is an important pilgrimage site for both Buddhists and Hindus.The complex is characterized by a stunning white stupa that dominates the hilltop. The stupa is adorned with intricate carvings and prayer flags that flutter in the wind, creating a mystical and spiritual atmosphere. Visitors can climb the steep stairs to reach the top of the hill, where they are greeted by breathtaking panoramic views of the city. ",
    Longdescritpion:
      " Once at the top, visitors can explore the temple complex and discover its many wonders. One of the most fascinating features of Swayambhu is the presence of hundreds of monkeys that roam freely around the temple. These playful and curious creatures add to the charm of the temple and make for some great photo opportunities. Visitors can also circumambulate the stupa while spinning prayer wheels and chanting mantras. The  complex is also home to a number of smaller shrines and temples dedicated to various deities, including Tara, the female Buddha of compassion. Another must-visit attraction at Swayambhu is the Museum of Tibetan Buddhism, which houses a collection of artifacts and artworks related to Buddhism. The museum provides an excellent insight into the history and culture of Buddhism in Nepal and Tibet.",
    image: "/src/assets/travellingimg/swambhu1.jpg",
  },
];

const travellingCarousel = [
  "/src/assets/travellingimg/boudha1.jpg",
  "/src/assets/travellingimg/pashupati1.jpg",
  "/src/assets/travellingimg/swambhu1.jpg",
  "/src/assets/travellingimg/view1.jpg",
];

const Travelling = () => {
  return (
    <>
      <div className="bg-black">
      <Nav />
      {/* <!-- ---------------carousel------------- --> */}
      <ImageCarousel images={travellingCarousel} />
      
      <div className="md:mx-8 mx-4 my-10">
        <h1 className="text-center font-bold text-2xl mt-3 mb-6 md:text-4xl underline">
          Travel: A Pathway to Happiness and Fulfillment
        </h1>
        <div>
          {aboutBlogApi.map((aboutBlogData, index) => {
            return (
              <AboutBlog
                key={index}
                heading={aboutBlogData.heading}
                Introduction={aboutBlogData.Introduction}
                Longdescription={aboutBlogData.Longdescritpion}
                imagegallery={aboutBlogData.image}
                description={aboutBlogData.description}
              />
            );
          })}
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Travelling;
