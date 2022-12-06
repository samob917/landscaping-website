import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PhotoCollage from "./components/PhotoCollage";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <PhotoCollage />
      <Contact />
    </div>
  );
}
