import React from "react";
import products from "./../assets/ProductList";

const CartSection = ({ cart, setCart }) => {
  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== productToRemove.id);
    setCart(updatedCart);
  };
  return (
    <>
      <div className="text-center my-5 mx-2">
        <h1 className="underline text-5xl font-bold">Cart</h1>
      </div>
      {products.map((product) => (
        <div className="border shadow-lg mb-2" key={product.id}>
          <div className="flex items-center p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex items-center mt-2">
                  <p className="text-xl font-bold">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(product)}
                className="text-red-600 ml-auto"
              >
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartSection;
