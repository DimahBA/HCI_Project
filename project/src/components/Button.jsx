import React from "react";


const Button = ({ text }) => {
    return (
        <button className="bg-red text-light rounded-2xl px-6 py-2 m-5 text-xl hover:bg-dark">{text}</button>

    );
  };
  
export default Button;


