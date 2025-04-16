import React from "react";

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      id={`custom`}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-5 w-5 mr-2 accent-red via-light"
    />
  );
};
export default Checkbox;
