import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#29A38E] sm:text-center">
              About
            </p>
          </div>
          {/* <div></div> */}
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Yared, nice to meet you. Go ahead and have a look around!
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              maxime earum, sit ut sed, eaque provident recusandae, temporibus
              iste molestiae amet nostrum alias error ipsam dolorum! Eos,
              deserunt amet. Error!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
