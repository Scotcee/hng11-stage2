import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTicketAlt } from "@fortawesome/free-solid-svg-icons";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [voucherCode, setVoucherCode] = useState("");
  const [subtotal, setSubtotal] = useState(100);
  const [discount, setDiscount] = useState(10);
  const [total, setTotal] = useState(subtotal - discount);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleVoucherCodeChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handlePayButtonClick = () => {
    alert(`Paying ${total} using ${paymentMethod}`);
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: "#E2F3F2" }}
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-center mb-4">Payment Method</h2>
        <form>
          {/* Payment Method Select */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="paymentMethod"
            >
              Select Payment Method
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="">Select...</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </div>

          {/* Voucher Code Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="voucher"
            >
              Enter Voucher Code
            </label>
            <div className="relative">
              <input
                type="text"
                id="voucher"
                placeholder="Enter voucher code"
                value={voucherCode}
                onChange={handleVoucherCodeChange}
                className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FontAwesomeIcon icon={faTicketAlt} />
              </div>
            </div>
          </div>
        </form>

        {/* Summary Section */}
        <div className="mb-4">
          <h1>Summary</h1>
          <p className="flex justify-between">
            Sub-total <span>${subtotal}</span>
          </p>
          <p className="flex justify-between">
            Discount <span>${discount}</span>
          </p>
          <p className="flex justify-between">
            Total <span>${total}</span>
          </p>
        </div>

        {/* Buttons Section */}
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handlePayButtonClick}
          >
            Pay
          </button>
          <Link to="/">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
