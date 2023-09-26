import React from "react";
import { Link } from "react-scroll";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = () => {
  return (
    <div className=" bg-[#0a192f] w-100 flex justify-end px-3 py-3 cursor-pointer">
      <Link to="home" smooth={true} offset={50} duration={500}>
        <div className="w-[50px] h-[50px] bg-[#29A38E] flex items-center justify-center text-4xl">
          <BsChevronUp />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToTop;
