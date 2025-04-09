import React from "react";
import { useState } from "react";

export default function AddButton() {
  const [count, setCount] = useState(0);
  
  const handleDecrement = () => {
    if (count <= 1) {
      setCount(0); // Reset to zero when trying to go below 1
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      {count === 0 ? (
        <button
          onClick={() => setCount(1)}
          className="bg-light text-red text-3xl w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          +
        </button>
      ) : (
        <div className="flex items-center text-xl gap-2 bg-light text-red rounded-full h-12 px-5 shadow-md">
          <button onClick={handleDecrement}> - </button>
          <span className="font-bold">{count}</span>
          <button onClick={() => setCount(count + 1)}> + </button>
        </div>
      )}
    </div>
  );
}