import React, { useState } from "react";
import shirt1 from "../assets/shirts/shirt1.png";
import shirt2 from "../assets/shirts/shirt2.png";
import shirt3 from "../assets/shirts/shirt3.png";
import shirt4 from "../assets/shirts/shirt4.png";
import shirt5 from "../assets/shirts/shirt5.png";
import shirt6 from "../assets/shirts/shirt6.png";
import shirt7 from "../assets/shirts/shirt7.png";
import shirt8 from "../assets/shirts/shirt8.png";
import shoes from "../assets/shirts/shoes.png";
import watch from "../assets/shirts/watch.jpg";
import watch2 from "../assets/shirts/watch2.jpg";

const SecondSection = () => {
  const products = [
    {
      id: 1,
      image: shirt1,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 2,
      image: shirt2,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 3,
      image: shirt3,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 4,
      image: shirt4,
      title: "Female Wears",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 5,
      image: shirt5,
      title: "Short Gowns",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 6,
      image: shirt6,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 7,
      image: shirt7,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 8,
      image: shirt8,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 9,
      image: shoes,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 10,
      image: watch,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 11,
      image: watch2,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
    {
      id: 12,
      image: shirt8,
      title: "Product Design",
      description: "Deserunt non fugiat aute cons",
      price: "$32",
      discountPrice: "$35",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentProducts.map((product) => (
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
                  <i className="fa fa-shopping-cart"></i>
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
            <i class="fa fa-chevron-left"></i>
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
            <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
