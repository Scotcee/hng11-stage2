import React, { useState } from "react";
import HeroBg from "../assets/herobackground.png";
import Navbar from "./Navbar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import CartSection from "./CartSection"; // Import CartSection
import products from "../assets/ProductList";

const HeroPage = () => {
  const [cart, setCart] = useState([]); // State to manage cart items

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productToRemove.id)
    );
  };

  const cartSize = cart.length;

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
      <SecondSection handleAddToCart={handleAddToCart} />
      <CartSection
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      />{" "}
      {/* Pass cart and handleRemoveFromCart */}
    </>
  );
};

export default HeroPage;
