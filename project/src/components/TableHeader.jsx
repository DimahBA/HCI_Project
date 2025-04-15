import React from "react";
import { useNavigate } from "react-router-dom";

import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiMoonStars, PiSun } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../slices/accessibilitySlice";

export default function TableHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.accessibility);
  const goToSettingsPage = () => {
    console.log("here");
    navigate("/settings");
  };
  const goToHelpPage = () => {
    navigate("/help");
  };
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="fixed top-0 w-full max-w-md bg-red text-light h-17 px-4 shadow-dark/15 shadow-2xl z-50 flex items-center justify-between">
      <h1 onClick={goToHomePage} className="text-2xl font-title">
        Table 24
      </h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => goToSettingsPage()} className="text-light">
          <IoSettingsOutline className="mr-2" size={30} />
        </button>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="text-light"
        >
          {darkMode ? (
            <PiMoonStars className="mr-2" size={33} />
          ) : (
            <PiSun className="mr-2" size={30} />
          )}
        </button>

        <button onClick={() => goToHelpPage()} className="text-light">
          <IoIosHelpCircleOutline className="mr-2" size={33} />
        </button>
      </div>
    </div>
  );
}
