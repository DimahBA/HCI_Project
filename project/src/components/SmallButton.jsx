import React from "react";

export default function SmallButton({ onClick, children, ...restProps }) {
  return (
    <button
      onClick={onClick}
      {...restProps}
      className="flex font-body items-center justify-center  w-[140px] border-2 border-red text-red rounded-md py-2 hover:bg-red hover:text-light transition duration-300 ease-in-out"
    >
      {/* {icon && <span className="icon">{icon}</span>} */}
      {children}
    </button>
  );
}
