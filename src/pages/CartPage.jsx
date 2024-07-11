import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CartSection from "../components/CartSection";
import products from "../assets/ProductList";
import Footer from "../components/Footer";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cartSize={cart.length} />
      <div className="container mx-auto px-4 py-8">
        <CartSection cart={cart} setCart={setCart} products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
