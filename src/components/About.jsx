import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="text-center pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#29A38E]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 text-center">
          <div>
            <p className="text-2xl py-2">
              I am an Italian Jr. Full Stack Web Developer who, after over ten
              years of diverse work experiences in multicultural environments,
              both in Italy and abroad, has decided to pursue a new career in
              the field of computer science, driven by a lifelong curiosity and
              passion for technology.
            </p>

            <p className="text-2xl py-2">
              My adaptability, quick learning ability, and strong work ethic
              have been consistently demonstrated throughout my professional
              journey.
            </p>

            <p className="text-2xl py-2">
              Over the past six months, I have acquired strong web development
              and problem-solving skills, using various technologies and tools.
              Now, I'm eager to put them into practice and to contribute
              significantly to new and exciting projects, while having the
              chance to thrive and to finally reaching my goals!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
