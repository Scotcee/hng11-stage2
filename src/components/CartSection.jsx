import React from "react";
import { Link } from "react-router-dom";
import products from "./../assets/ProductList";

const CartSection = ({ cart, setCart }) => {
  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== productToRemove.id);
    setCart(updatedCart);
  };

  const handleAddQuantity = (productToUpdate) => {
    const updatedCart = cart.map((item) =>
      item.id === productToUpdate.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleSubtractQuantity = (productToUpdate) => {
    const updatedCart = cart.map((item) =>
      item.id === productToUpdate.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((acc, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return acc + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  return (
    <>
      <div className="text-center my-5 mx-2">
        <h1 className="underline text-5xl font-bold">Cart</h1>
      </div>
      {cart.map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        return (
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
                    <p className="text-xl font-bold">{product.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* Quantity */}
                  <div className="flex items-center border rounded-md px-2">
                    <button
                      onClick={() => handleSubtractQuantity(cartItem)}
                      className="text-gray-600 px-2 py-1 rounded-l-md hover:bg-gray-200"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <span className="mx-2">{cartItem.quantity}</span>
                    <button
                      onClick={() => handleAddQuantity(cartItem)}
                      className="text-gray-600 px-2 py-1 rounded-r-md hover:bg-gray-200"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    className="text-red-600 ml-4"
                  >
                    <i className="fa fa-trash-o"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* Total and Checkout Button */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <div>
          <h2 className="text-xl">
            Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </h2>
        </div>
        <div>
          <Link to="/checkout">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSection;
