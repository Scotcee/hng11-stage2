import React from "react";
import HeroBg from "../assets/herobackground.png";
import Navbar from "./Navbar";
import FirstSection from "./FirstSection";

const HeroPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="h-full">
        <Navbar />
        <FirstSection />
      </div>
    </div>
  );
};

export default HeroPage;
