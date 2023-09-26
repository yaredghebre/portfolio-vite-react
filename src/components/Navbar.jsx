import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/profile-pic.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const toggleNav = () => setNavOpen(!navOpen);

  const handleClick = (link) => {
    setNavOpen(!navOpen);
    setActiveLink(link);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-[20px] bg-gray-700 text-gray-300">
      <div className="h-[50px] w-[50px] border rounded-full overflow-hidden">
        <img
          src={Logo}
          alt="Logo Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* ----------- NAVBAR MENU --------- */}

      <ul className="hidden md:flex gap-3 cursor-pointer text-xl">
        <li>
          <Link
            to="home"
            smooth={true}
            offset={50}
            duration={500}
            className={
              activeLink === "Home" ? "active-link" : "hover:text-[#29A38E]"
            }
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
        </li>

        <li>
          {" "}
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className={
              activeLink === "About" ? "active-link" : "hover:text-[#29A38E]"
            }
            onClick={() => handleClick("About")}
          >
            About
          </Link>
        </li>

        <li>
          {" "}
          <Link
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
            className={
              activeLink === "Skills" ? "active-link" : "hover:text-[#29A38E]"
            }
            onClick={() => handleClick("Skills")}
          >
            Skills
          </Link>
        </li>

        <li>
          {" "}
          <Link
            to="projects"
            smooth={true}
            offset={50}
            duration={500}
            className={
              activeLink === "Projects" ? "active-link" : "hover:text-[#29A38E]"
            }
            onClick={() => handleClick("Projects")}
          >
            Projects
          </Link>
        </li>

        <li>
          {" "}
          <Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            className={
              activeLink === "Contact" ? "active-link" : "hover:text-[#29A38E]"
            }
            onClick={() => handleClick("Contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* --------------------------------- */}

      {/* Hamburger */}
      <div onClick={toggleNav} className="md:hidden z-10">
        {!navOpen ? <FaBars /> : <FaTimes />}
      </div>
      {/* --------------------------------- */}

      {/* ----------- MOBILE ---------------*/}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#29A38E] text-gray-300 transform z-50 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300 md:hidden`}
      >
        <ul className="flex flex-col justify-center items-center h-full">
          <li className="py-6 text-xl text-black hover:text-white">
            <Link
              to="home"
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Home" ? "active-link" : ""}
              onClick={() => handleClick("Home")}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-xl text-black hover:text-white">
            <Link
              to="about"
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "About" ? "active-link" : ""}
              onClick={() => handleClick("About")}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-xl text-black hover:text-white">
            <Link
              to="skills"
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Skills" ? "active-link" : ""}
              onClick={() => handleClick("Skills")}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-xl text-black hover:text-white">
            <Link
              to="projects"
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Projects" ? "active-link" : ""}
              onClick={() => handleClick("Projects")}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-xl text-black hover:text-white">
            <Link
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Contact" ? "active-link" : ""}
              onClick={() => handleClick("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* --------------------------------- */}

      {/* ---------- LEFT SIDEBAR ---------- */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/yaredghebreghergis/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/yaredghebre"
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
      {/* --------------------------------- */}
    </div>
  );
};

export default Navbar;
