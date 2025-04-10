import React from "react";

export default function CartIcon({ width, color }) {
  return (
    <svg
      width={width || "33"}
      height={width || "33"}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3438 27.8438C11.9133 27.8438 12.375 27.382 12.375 26.8125C12.375 26.243 11.9133 25.7812 11.3438 25.7812C10.7742 25.7812 10.3125 26.243 10.3125 26.8125C10.3125 27.382 10.7742 27.8438 11.3438 27.8438Z"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.7812 27.8438C26.3508 27.8438 26.8125 27.382 26.8125 26.8125C26.8125 26.243 26.3508 25.7812 25.7812 25.7812C25.2117 25.7812 24.75 26.243 24.75 26.8125C24.75 27.382 25.2117 27.8438 25.7812 27.8438Z"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.09375 5.15625H7.21875L10.3125 22.6875H26.8125"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3125 18.5625H26.3897C26.5089 18.5626 26.6245 18.5213 26.7168 18.4458C26.809 18.3702 26.8722 18.265 26.8956 18.1481L28.7519 8.86682C28.7669 8.79198 28.7651 8.71474 28.7466 8.6407C28.7281 8.56665 28.6934 8.49762 28.645 8.43861C28.5966 8.3796 28.5357 8.33207 28.4666 8.29946C28.3976 8.26684 28.3223 8.24995 28.2459 8.25H8.25"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
