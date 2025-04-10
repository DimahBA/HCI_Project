import React from "react";
import Item from "./Item";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {
  increaseCount,
  removeItem,
  decreaseCount,
} from "../slices/cartSlice";import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const isSet = item.menu === "set";
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(item.count || 0);
  if (isSet) {
    return (
      <div className="bg-red m-4 p-4 rounded-lg shadow ">
        <div className="flex gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-27 h-27 object-cover rounded"
          />
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-title text-light">{item.name}</h2>
            <p className="text-sm font-body text-light-dark">
              {item.description}
            </p>
            <p className="text-xl font-bold font-title text-light">
              {item.price}€
            </p>
            {/* <p className="font-body text-sm">Quantity: {item.count}</p> */}
          </div>
        </div>
        {/* {isSet && item.selections && ( */}{" "}
        <div className="mt-4 border-t border-light-dark pt-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-title text-light">Selections:</h3>
            <ul>
              {Object.entries(item.selections).map(([category, selection]) => (
                <li
                  key={category}
                  className="font-body text-sm text-light-dark"
                >
                  <span className="font-bold capitalize">{category}</span>:{" "}
                  {selection.name} ({selection.price}€)
                </li>
              ))}
            </ul>
          </div>
          {/* <button onClick={() => dispatch(removeItem(item.id))}>
            <IoIosRemoveCircleOutline size={40} className="text-light" />
          </button> */}

          <div className="flex text-light flex-col items-end gap-2">
            <div className="flex items-center gap-2 border-2 border-light rounded-full h-8 px-3">
              <button
                onClick={() => {
                  setCount(count - 1);
                  if (count > 1) {
                    dispatch(decreaseCount({ count: count - 1, ...item }));
                  } else {
                    dispatch(removeItem(item.id));
                  }
                }}
              >
                -
              </button>
              <span className="font-bold">{count}</span>
              <button
                onClick={() => {
                  setCount(count + 1);
                  dispatch(increaseCount({ count: count + 1, ...item }));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    );
  } else {
    return <Item menuItems={item} isSetSelected={false} />;
  }
};

export default CartItem;
