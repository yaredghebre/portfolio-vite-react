import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
