import React from "react";
import glutenFree from "../assets/icons/gluten-free2.svg";
import vegetarian from "../assets/icons/vegetarian2.svg";
import vegan from "../assets/icons/vegan2.svg";

const OrderItem = ({ item, isSelected, onToggleSelect, isCheckBox }) => {
  const { name, price, image, tags, description, count } = item;

  return (
    <li className="flex min-h-[120px] justify-between items-center p-3 bg-red mx-4 mb-4 rounded-xl font-body text-light">
      <div className="flex items-center gap-3 w-full">
        <div className="w-24 h-24 rounded-xl flex-none relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={image}
            alt={name}
          />
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex w-full justify-between">
            <span className="font-title text-lg text-start">{name}</span>
            <span className="pr-1 font-body font-bold text-xl">{price}€</span>
          </div>

          <span className="font-body text-s text-light-dark text-start">
            {description}
          </span>

          <div className="w-full flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center justify-center gap-1.5">
              <div className="bg-light-dark px-4 py-0.5 rounded-xl text-light">
                Qty: {count}
              </div>
              {tags?.includes("Vegetarian") && (
                <img src={vegetarian} alt="Vegetarian" className="w-6 h-6" />
              )}
              {tags?.includes("Vegan") && (
                <img src={vegan} alt="Vegan" className="w-6 h-6" />
              )}
              {tags?.includes("Gluten Free") && (
                <img src={glutenFree} alt="Gluten Free" className="w-6 h-6" />
              )}
            </div>

            {/* Checkbox for selection */}
            {!isCheckBox && (
              <div
                className="flex items-center justify-center w-6 h-6 bg-light rounded-md cursor-pointer border-2 border-light"
                onClick={() => onToggleSelect(item.id)}
              >
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
