import React, { useState } from "react";
import HeroBg from "../assets/herobackground.png";
import Navbar from "../components/Navbar";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import CartSection from "../components/CartSection";
import products from "../assets/ProductList";
import Footer from "./../components/Footer";

const HeroPage = () => {
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  const handleAddToCart = (product) => {
    const isPresent = cart.some((item) => item.id === product.id);
    if (!isPresent) {
      setCart([...cart, product]);
      setCartSize(cartSize + 1);
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="h-full">
          <Navbar cartSize={cartSize} />
          <FirstSection />
        </div>
      </div>
      <SecondSection
        handleAddToCart={(products, setCart, cartSize, handleAddToCart)}
      />
      <Footer />
    </>
  );
};

export default HeroPage;
