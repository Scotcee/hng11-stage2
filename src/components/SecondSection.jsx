import React, { useState } from "react";
import products from "../assets/ProductList";

const SecondSection = ({ handleAddToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonColors, setButtonColors] = useState(
    Array(products.length).fill("bg-green-500")
  );

  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addToCartAndUpdateColor = (productIndex, product) => {
    handleAddToCart(product);
    const updatedColors = buttonColors.map((color, index) =>
      index === productIndex ? "bg-gray-500" : "bg-green-500"
    );
    setButtonColors(updatedColors);
  };

  return (
    <>
      <div className="flex mx-5 mt-10">
        <button className="text-white bg-gray-700 py-2 px-4 mr-5 hover:bg-gray-600 transition duration-300">
          All Products
        </button>
        <button className="text-gray-700 bg-gray-200 py-2 px-10 hover:bg-gray-300 transition duration-300">
          Men
        </button>
        <button className="text-gray-700 bg-gray-200 py-2 px-10 hover:bg-gray-300 transition duration-300">
          Women
        </button>
      </div>
      <div className="bg-white h-full flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold my-5">Products</h1>

        <div className="flex flex-wrap justify-between py-2 px-2">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="Product-Tile border shadow-lg mb-2"
            >
              <div className="image-container relative w-75 h-75 my-5 mx-2">
                <img
                  className="w-100 h-100"
                  src={product.image}
                  alt={product.title}
                />
                <div className="pl-10 text-left w-30">
                  <p className="best-seller absolute right-0 top-1 bg-gray-500 text-white px-2 rounded-lg opacity-50">
                    Best Seller
                  </p>
                </div>
              </div>
              <div className="product-title font-bold">
                <h2>{product.title}</h2>
              </div>
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              <div className="price flex justify-between font-bold text-2xl py-2 pr-5">
                <p>{product.price}</p>
                <p className="text-gray-500 line-through">
                  {product.discountPrice}
                </p>
                <div className="border-2 border-black py-1 px-2">
                  <button
                    onClick={() => addToCartAndUpdateColor(index, product)}
                    className={`text-white ${buttonColors[index]} py-1 px-2 hover:bg-gray-600 transition duration-300`}
                  >
                    {" "}
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-1 px-3 py-1 border bg-white hover:bg-gray-200 transition duration-300"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          {Array.from(
            { length: Math.ceil(products.length / productsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 border ${
                  currentPage === index + 1 ? "bg-gray-300" : "bg-white"
                } hover:bg-gray-200 transition duration-300`}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(products.length / productsPerPage)
            }
            className="mx-1 px-3 py-1 border bg-white hover:bg-gray-200 transition duration-300"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
