import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        cartItems.map((item) => (
          <div key={item.id} className="border-b p-4 flex justify-between">
            <p>{item.title}</p>
            <p className="text-green-600">${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
