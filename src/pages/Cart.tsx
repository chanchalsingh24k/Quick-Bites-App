import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.name}</span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 