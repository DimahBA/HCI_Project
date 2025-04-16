import React from "react";

const Checkbox = ({ checked, onChange, className }) => {
  return (
    <div
      className={`w-6 h-6 border cursor-pointer flex items-center justify-center ${checked ? 'bg-light border-dark' : 'border-dark'} ${className || ''}`}
      onClick={onChange}
    >
      {checked && <span className="text-red">✓</span>}
    </div>
  );
};
export default Checkbox;