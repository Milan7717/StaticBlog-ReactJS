import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import AboutBlog from "../components/AboutBlog";
import ImageCarousel from "../components/ImageCarousel";

const aboutBlogApi = [
  {
    Introduction:
      "Friendship is a close and meaningful relationship between two or more people who share mutual trust, support,and understanding. It is characterized by mutual affection, loyalty, and a willingness to be there for one another in good times and bad. At the heart of friendship lies a deep sense of connection and intimacy thattranscends the superficialities of social convention. Friends often share common interests, values, and experiences, and they engage in activities together that bring them joy and fulfillment. Whether it is going tothe movies, taking a hike, or simply chatting over coffee, friends find meaning and enjoyment in spending timetogether.",
    longdescription:
      "Friendship comes in many forms, and each type of friendship offers its own unique benefits and challenges. From childhood friends to work friends, social friends to best friends, there are many different types of relationships that fall under the umbrella of friendship In this article, we will explore some of the most common types of friendships and what makes each one special. Whether you're looking to strengthen existing friendships or cultivate new ones, understanding the different types of friendships can help you build deeper and more meaningful connections with the people in your life.",
  },
  {
    heading: "Childhood Friends",
    longdescription:
      "These are the friends we make when we are still developing, like in elementary school or through kid-related activities. Childhood friends can give us a sense of familiarity and comfort because they frequently share significant memories and experiences with us.Childhood friends are those friends that you have known since your early years, often from your school or neighborhood. These friends have been a part of your life for a long time, and you may have shared many milestones and experiences with them, such as birthdays, holidays, and childhood adventures. Childhood friends tend to have a deep sense of familiarity and comfort with each other. Even if you haven't seen each other in a while, you may be able to pick up right where you left off, as if no time has passed at all. Childhood friends often have a shared history and a strong bond, and they may feel like family to each other.",
    imagecard: [
      "/src/assets/friendsimg/childhood1.JPG",
      "/src/assets/friendsimg/childhood2.jpg",
      "/src/assets/friendsimg/childhood3.jpg",
    ],
  },
  {
    heading: "School friends",
    longdescription:
      "School friends are those friends that you meet through your education, whether in high school, college, or graduate school. These friends may share similar academic interests, and they often have a strong sense of camaraderie as they navigate the challenges of academic life together. School friends can be an important source of support and encouragement during your academic journey. They may help you study for exams, share class notes and resources, and provide a sounding board for your academic ideas and projects. School friends may also offer a sense of community and belonging during a time when you may feel overwhelmed or isolated.",
    imagecard: [
      "/src/assets/friendsimg/school1.jpg",
      "/src/assets/friendsimg/school2.jpg",
      "/src/assets/friendsimg/school3.jpeg",
    ],
  },
  {
    heading: "Best friends",
    longdescription:
      " Best friends are those friends that you have a deep and enduring bond with, often characterized by mutual trust, respect, and understanding. Best friends may share similar interests and values, and they often have a long history of shared experiences and memories. One of the benefits of having a best friend is that they can provide a source of unconditional love and support. Best friends are often the people you turn to in times of joy and sorrow, celebration and grief. They may offer a listening ear, a shoulder to cry on, or simply a comforting presence during difficult times. Best friends may also provide a sense of accountability and motivation. They may challenge you to be your best self, hold you accountable to your goals and values, and push you to try new things and take risks. Best friends may also serve as role models or mentors, inspiring you to reach your full potential and become the best version of yourself",
    imagecard: [
      "/src/assets/friendsimg/bestfrd2.JPG",
      "/src/assets/friendsimg/bca.jpg",
      "/src/assets/friendsimg/bestfrd4.jpg",
      "/src/assets/friendsimg/bca2.jpg",
    ],
  },
  {
    heading: "The Comedy of Friendship: Exploring the Craziness of Friends",
    longdescription:
      "Friendship is an essential component of human life that brings joy, comfort, and a sense of belonging. Good friends are those who share your interests, support you in your endeavors, and celebrate your successes. Spending time with friends can be a source of laughter, relaxation, and stress relief. Whether it's going out for coffee, taking a walk in the park, or having a movie night at home, being around friends can help you forget about your worries and enjoy the present moment. There's nothing quite like the laughter that comes from spending time with your friends. Whether it's reminiscing about old times, sharing funny stories, or just being silly together, there's a special kind of humor that only comes from the bond of friendship. From inside jokes to pranks, friends have a way of bringing out the silliest and most spontaneous sides of ourselves. It's the kind of laughter that's contagious and can leave you with aching cheeks and a sore stomach.",
    imagecard: [
      "/src/assets/friendsimg/comedy1.jpg",
      "/src/assets/friendsimg/comedy2.jpg",
      "/src/assets/friendsimg/comedy3.jpg",
    ],
  },
  {
    heading: "Conclusion",
    longdescription:
      "In conclusion, friendship is a crucial aspect of our lives that provides us with emotional support, social connection, personal growth, and professional success. There are various types of friendships, including childhood friends, school friends, online friends, and best friends, each of which offers unique benefits and experiences. Honesty is an essential component of any healthy friendship, as it builds trust, authenticity, mutual respect, and enables us to resolve conflicts in a healthy and productive way. Overall, investing in our friendships and cultivating strong, meaningful relationships with others is an essential part of leading a happy, healthy, and fulfilling life.",
  },
];

const friendsCarousel = [
  "/src/assets/friendsimg/schoolfrds.jpg",
  "/src/assets/friendsimg/newones.jpg",
  "/src/assets/friendsimg/bca.jpg",
];

const Friends = () => {
  return (
    <div className="bg-black">
      <Nav />
      
        <ImageCarousel images={friendsCarousel} />

        <div className="md:mx-8 mx-4 my-10">
          <h1 class="text-center font-bold text-2xl mt-3 mb-6 md:text-4xl underline">
          Friendship: A Lifeline in Tough Times
          </h1>
          <div>
            {aboutBlogApi.map((blogData, index) => {
              return (
                <div key={index}>
                  <AboutBlog
                    heading={blogData.heading}
                    Introduction={blogData.Introduction}
                    description={blogData.description}
                    Longdescription={blogData.longdescription}
                    Imagecard={blogData.imagecard}
                  />
                </div>
              );
            })}
          </div>
        </div>
      
      <Footer />
    </div>
  );
};

export default Friends;
