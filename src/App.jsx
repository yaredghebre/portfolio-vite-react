import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
