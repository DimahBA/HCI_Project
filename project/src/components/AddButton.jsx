import React, { use } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseCount,
  removeItem,
  decreaseCount,
} from "../slices/cartSlice";

import { removeSetMenuItems, addSetMenuItems } from "../slices/setMenuSlice";

export default function AddButton({ menuItems, isSetSelected }) {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
    // console.log("Added to cart:", item);
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log("Cart Items", cartItems);
  const setMenuItems = useSelector((state) => state.setMenu.setMenuItems);
  console.log("Set Menu Items", setMenuItems);
  return (
    <>
      {!isSetSelected ? (
        <div className="flex text-light flex-col items-end gap-2">
          {count === 0 ? (
            <button
              onClick={() => {
                setCount(1);
                addToCart({ count: 1, type: "dish", ...menuItems });
              }}
              className="border-2 border-light text-light w-8 h-8 rounded-full"
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-2 border-2 border-light rounded-full  h-8 px-3  ">
              <button
                onClick={() => {
                  setCount(count - 1);
                  if (count > 1) {
                    dispatch(decreaseCount({ count: count - 1, ...menuItems }));
                  } else {
                    dispatch(removeItem(menuItems.id));
                  }
                  console.log("Removed from cart:", menuItems.id);
                }}
              >
                -
              </button>
              <span className="font-bold">{count}</span>
              <button
                className={`${
                  isSetSelected ? " pointer-events-none text-light-dark " : ""
                }`}
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
      ) : (
        <div className="flex text-light flex-col items-end gap-2">
          {count === 0 ? (
            <button
              onClick={() => {
                setCount(1);
                dispatch(
                  addSetMenuItems({
                    count: 1,
                    type: "set",
                    ...menuItems,
                  })
                );
              }}
              className="border-2 border-light text-light w-8 h-8 rounded-full"
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-2 border-2 border-light rounded-full  h-8 px-3  ">
              <button
                onClick={() => {
                  setCount(count - 1);
                  dispatch(removeSetMenuItems(menuItems.id));
                }}
              >
                -
              </button>
              <span className="font-bold">{count}</span>
              <button className=" pointer-events-none text-light-dark ">
                +
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
