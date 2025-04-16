import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseCount,
  removeItem,
  decreaseCount,
} from "../slices/cartSlice";

// Import set menu actions
import { setSetMenuItem, removeSetMenuItem } from "../slices/setMenuSlice";

import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

export default function AddButton({ menuItems, isSetSelected }) {
  const dispatch = useDispatch();

  // For normal (individual) mode, you may still use local count state:
  const [count, setCount] = useState(menuItems.count ? menuItems.count : 0);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // For set menu mode, select the currently selected item for this category from Redux.
  const selectedItem = useSelector(
    (state) => state.setMenu.selectedItems[menuItems.type]
  );

  // Determine if this item is the one currently selected.
  const isSelected = selectedItem && selectedItem.id === menuItems.id;

  useEffect(() => {
    cartItems.forEach((element) => {
      element.id === menuItems.id && setCount(element.count);
    });
  }, [cartItems, menuItems.id]);
  // If not in set mode, show the normal add-to-cart buttons.
  if (!isSetSelected) {
    return (
      <div className="flex text-light flex-col items-end gap-2">
        {count === 0 ? (
          <button
            onClick={() => {
              setCount(1);
              dispatch(addItem({ count: 1, menu: "dish", paid: "false", ...menuItems }));
            }}
            className="border-2 border-light text-light w-8 h-8 rounded-full"
          >
            +
          </button>
        ) : (
          <div className="flex items-center gap-2 border-2 border-light rounded-full h-8 px-3">
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
  } else {
    // Set menu mode: use global state to show if this item is selected.
    return (
      <div>
        {isSelected ? (
          // If selected, show the checked icon.
          <button
            className="text-light"
            onClick={() => {
              // Deselect the item by removing it from the global selection.
              dispatch(removeSetMenuItem({ category: menuItems.type }));
            }}
          >
            <RiCheckboxCircleLine size={35} />
          </button>
        ) : (
          // If not selected, show the blank checkbox icon.
          <button
            className="text-light-dark"
            onClick={() => {
              // When selecting a meal from this category, this will override any previous selection.
              dispatch(
                setSetMenuItem({ category: menuItems.type, item: menuItems })
              );
            }}
          >
            <RiCheckboxBlankCircleLine size={35} />
          </button>
        )}
      </div>
    );
  }
}
