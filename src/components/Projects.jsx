import React from "react";
import AppCalc from "../assets/projects/AppCalculator.png";
import AvadaGym from "../assets/projects/AvadaGym.png";
import BoolFlix from "../assets/projects/BoolFlix.png";
import BoolzApp from "../assets/projects/BoolzApp.png";
import MineSweeper from "../assets/projects/MineSweeper.png";
import Spotify from "../assets/projects/Spotify.png";
import QuizApp from "../assets/projects/QuizApp.png";
import PassGen from "../assets/projects/PasswordGen.png";
import DeliveBoo from "../assets/projects/DeliveBoo-customerSide.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-[1000px] md:h-screen text-gray-300 px-4 bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#29A38E]">
            Projects
          </p>
          <p className="text-xl mt-3">
            // Check out some of my recent projects
          </p>
        </div>
        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          {/* ---------- */}

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${AppCalc})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-3xl mb-2 font-bold text-black">
                Calculator App
              </span>
              <div className="flex gap-2">
                <a href="https://simpleappcalculator.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/app-calculator">
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
              <span className="text-3xl mb-2 font-bold text-black">
                Avada Gym (Clone)
              </span>
              <div className="flex gap-2">
                <a href="https://avadagym-clone.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/proj-vuejs-ava-clone">
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
                BoolFlix
              </span>
              <div className="flex gap-2">
                <a href="https://boolflix-yg.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/vite-boolflix">
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
              <span className="text-2xl mb-2 font-bold text-black">
                WhatsApp Web (Clone)
              </span>
              <div className="flex gap-2">
                <a href="https://boolzapp-yg.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/vue-boolzapp">
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
                Mine Sweeper
              </span>
              <div className="flex gap-2">
                <a href="https://minesweeper-yg.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/js-campominato-dom">
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
              <span className="text-2xl mb-2 font-bold text-black">
                Spotify Web (Clone)
              </span>
              <div className="flex gap-2">
                <a href="https://spotify-clone-yg.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/html-css-spotifyweb">
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
            style={{ backgroundImage: `url(${QuizApp})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                QuizApp
              </span>
              <div className="flex gap-2">
                <a href="https://quizapp-yg.netlify.app/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/quiz-app-react">
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
            style={{ backgroundImage: `url(${PassGen})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-2xl mb-2 font-bold text-black">
                Password Generator (PHP)
              </span>
              <div className="flex gap-2">
                <a href="">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/php-strong-password-generator">
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
            style={{ backgroundImage: `url(${DeliveBoo})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-300 overlay-div flex flex-col">
              <span className="text-4xl mb-2 font-bold text-black">
                DeliveBoo
              </span>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7089611484103622656/">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yaredghebre/DeliveBoo-frontend">
                  <button className="text-center rounded-lg p-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ---------- */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
