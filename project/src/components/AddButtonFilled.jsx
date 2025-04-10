import React from "react";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import {
  addItem,
  increaseCount,
  removeItem,
  decreaseCount,
} from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export default function AddButton({ menuItems }) {
  const [count, setCount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const handleDecrement = () => {
  //   if (count <= 1) {
  //     setCount(0); // Reset to zero when trying to go below 1
  //   } else {
  //     setCount(count - 1);
  //   }
  // };
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-end gap-2">
      {count === 0 ? (
        <button
          onClick={() => {
            setCount(1);
            dispatch(addItem({ count: 1, menu: "dish", ...menuItems }));
          }}
          className="bg-light text-red text-3xl w-12 h-12 rounded-full flex items-center justify-center shadow-md"
        >
          <GoPlus size={27} />
        </button>
      ) : (
        <div className="flex items-center text-xl gap-2 bg-light text-red rounded-full h-12 px-5 shadow-md">
          <button
            onClick={() => {
              setCount(count - 1);
              if (count > 1) {
                dispatch(decreaseCount({ count: count - 1, ...menuItems }));
              } else {
                dispatch(removeItem(menuItems.id));
              }
            }}
          >
            -
          </button>
          <span className="font-bold">{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
              dispatch(increaseCount({ count: count + 1, ...menuItems }));
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
