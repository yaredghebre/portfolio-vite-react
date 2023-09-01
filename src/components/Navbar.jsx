import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/profile-pic.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-[20px] bg-[#0a192f21] text-gray-300">
      <div className="h-[50px] w-[50px] border rounded-full overflow-hidden">
        <img
          src={Logo}
          alt="Logo Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* MENU */}

      <ul className="hidden md:flex gap-3 cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={toggleNav} className="md:hidden z-10">
        {!navOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}

      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#29A38E] text-gray-300 transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300 md:hidden`}
      >
        <ul className="flex flex-col justify-center items-center h-full">
          <li className="py-6 text-xl text-black hover:text-white">Home</li>
          <li className="py-6 text-xl text-black hover:text-white">About</li>
          <li className="py-6 text-xl text-black hover:text-white">Skills</li>
          <li className="py-6 text-xl text-black hover:text-white">Projects</li>
          <li className="py-6 text-xl text-black hover:text-white">Contact</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] px-3">
            <a
              className="flex justify-between items-center w-full text-black"
              href="/"
            >
              Email
              <HiOutlineMail size={30} style={{ color: "black" }} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D0826F] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
