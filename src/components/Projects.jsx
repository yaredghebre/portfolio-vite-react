import React from "react";
import AppCalc from "../assets/projects/AppCalculator.png";
import AvadaGym from "../assets/projects/AvadaGym.png";
import BoolFlix from "../assets/projects/BoolFlix.png";
import BoolzApp from "../assets/projects/BoolzApp.png";
import MineSweeper from "../assets/projects/MineSweeper.png";
import Spotify from "../assets/projects/Spotify.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 px-4 bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#29A38E] sm:text-center">
            Projects
          </p>
          <p className="py-4">// Check out some of my recent projects</p>
        </div>
        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${AppCalc})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                My Project
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${AvadaGym})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                My Project
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BoolFlix})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                My Project
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BoolzApp})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                My Project
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MineSweeper})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                My Project
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Spotify})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                My Project
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
