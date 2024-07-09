import React from "react";
import greenBg from "../assets/greenbg.png";

const FirstSection = () => {
  return (
    <>
      <div
        className="text-black text-center bg-white flex justify-center items-center sm:mb-10"
        style={{
          width: "100%",
          minHeight: "70vh", // Default minimum height for smaller screens
          padding: "10% 5%", // Adjust padding for smaller screens
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(1px)",
          boxSizing: "border-box",
        }}
      >
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Kuda Luxurious Wears
          </h1>
          <p className="hidden md:block text-lg md:text-xl lg:text-2xl">
            At Kuda Luxurious Wears, sophistication meets style. Our expertly
            curated collection showcases handpicked, luxurious garments that
            redefine elegance. From extravagant evening gowns to stylish
            street-wear, we prioritize exceptional design, impeccable
            craftsmanship, and attention to detail. Discover our virtual
            boutique and elevate your wardrobe with unique pieces that reflect
            your personal taste and flair. Shop now and indulge in the luxury of
            Kuda Luxurious Wears
          </p>
          <button
            className="mt-4 md:mt-6 sm:mb-10 py-3 px-6 md:py-4 md:px-8 font-bold rounded-md border border-green-500 text-green-500 bg-white hover:bg-green-500 hover:text-white transition duration-300"
            style={{ minWidth: "150px" }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
