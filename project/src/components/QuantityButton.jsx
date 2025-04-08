import React, { useState } from "react";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex items-center bg-light rounded-xl overflow-hidden">
      <button 
        onClick={decreaseQuantity}
        className="w-10 h-10 flex items-center justify-center text-red text-xl font-bold"
      >
        -
      </button>
      <span className="w-10 text-center text-dark font-bold">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="w-10 h-10 flex items-center justify-center text-red text-xl font-bold"
      >
        +
      </button>
    </div>
  );
}