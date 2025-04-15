import React from "react";

export default function SmallButton({ onClick, children, ...restProps }) {
  return (
    <button
      onClick={onClick}
      {...restProps}
      className="flex bg-light font-body items-center justify-center  w-[140px] border-2 border-red text-red rounded-md py-2 active:bg-red active:text-light transition duration-300 ease-in-out"
    >
      {/* {icon && <span className="icon">{icon}</span>} */}
      {children}
    </button>
  );
}
