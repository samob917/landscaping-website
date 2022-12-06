import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PhotoCollage from "./components/PhotoCollage";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <PhotoCollage />
    </div>
  );
}
