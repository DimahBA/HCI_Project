import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-dark  px-7 py-4 border-light border-2 text-light rounded-xl font-medium active:bg-red active:text-light transition duration-300 ease-in-out shadow-light shadow-xs small-text"
    >
      {children}
    </button>
  );
};

export default Button;
