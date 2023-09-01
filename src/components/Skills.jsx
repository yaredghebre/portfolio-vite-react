import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 px-4">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto p4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#29A38E] sm:text-center">
            Experience
          </p>
          <p className="py-4">
            // These are some of the technologies I've used
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#29A38E] duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="Html icon" />
            <p>HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#29A38E] duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="Css icon" />
            <p>CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#29A38E] duration-300">
            <img className="w-20 mx-auto" src={JavaScript} alt="Js icon" />
            <p>Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#29A38E] duration-300">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p>React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#29A38E] duration-300">
            <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
            <p>Github</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#29A38E] duration-300">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
