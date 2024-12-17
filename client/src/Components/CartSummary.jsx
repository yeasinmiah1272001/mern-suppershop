import React from "react";
import toast from "react-hot-toast";

const CartSummary = ({ cart }) => {
  // Calculate the subtotal dynamically
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Static shipping cost
  const shipping = 5.0;

  // Total = Subtotal + Shipping
  const total = subtotal + shipping;

  const handleChackout = () => {
    alert("payment pending");
  };

  return (
    <div className="bg-white p-6 h-64 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Payment Summary
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-800 font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={handleChackout}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Proceed to Checkout (Demo)
      </button>
    </div>
  );
};

export default CartSummary;
