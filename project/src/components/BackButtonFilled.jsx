import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ onClick }) {
  const navigate = useNavigate();
  const defaultGoBack = () => {
    navigate(-1);
  };

  return (
    <button 
      onClick={onClick || defaultGoBack} 
      className="bg-light text-red rounded-full w-12 h-12 flex items-center justify-center shadow-md"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}