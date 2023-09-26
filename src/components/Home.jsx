import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <h3 className="text-[#8892b0] text-xl sm:text-4xl">Hi! My name is </h3>
        <h1 className="text-4xl sm:text-7xl font-bold text-white py-4">
          Yared Ghebreghergis
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#29A38E]">
          I'm a Jr. Full Stack Web Developer,
        </h2>
        <p className="text-[#8892b0] text-xl sm:text-2xl py-4">
          who enjoys building digital experiences. Currently, I'm focused on
          recreating responsive web applications, mostly on the front-end side.{" "}
          <br />I always love learning to use new updated and innovative tools!
          Here are some of my recent projects:
        </p>
        <div>
          <Link to="projects" smooth={true} offset={50} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#29A38E] hover:border-[#29A38E]">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
