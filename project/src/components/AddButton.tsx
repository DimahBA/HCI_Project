import React from "react";
import { useState } from "react";

export default function AddButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-end gap-2">
      {count === 0 ? (
        <button
          onClick={() => setCount(1)}
          className="border-2 border-light text-light w-8 h-8 rounded-full"
        >
          +
        </button>
      ) : (
        <div className="flex items-center gap-2 border-2 border-light rounded-full  h-8 px-3  ">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span className="font-bold">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </div>
  );
}
