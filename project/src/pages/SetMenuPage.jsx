import Item from "../components/Item";
import Filter from "../components/Filter";
import menuData from "../data/setMenu";
import MenuTab from "../components/MenuTab";
import React, { useState } from "react";
// import TableHeader from "../components/TableHeader";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMenuId } from "../slices/setMenuSlice";
import { useNavigate } from "react-router-dom";
const SetMenuPage = () => {
  const dispatch = useDispatch();
  const setSelectedMenu = (menuId) => {
    dispatch(setSelectedMenuId(menuId));
    navigate("/menu");
  };
  const selectedMenuId = useSelector((state) => state.setMenu.selectedMenuId);
  console.log("Selected Menu ID:", selectedMenuId);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex items-center justify-center h-30">
        <h1 className="text-3xl font-bold font-title text-center">
          {menuData.menuTitle}
        </h1>
      </div>
      <ul>
        <div className="border-t border-1 rounded border-light-dark mx-4 mb-6"></div>
        {menuData.types.map((type) => (
          <div key={type.id}>
            <Item
              onClick={() => setSelectedMenu(type.id)}
              isSetMenu={true}
              name={type.name}
              price={type.price}
              image={type.imageUrl}
              description={type.description}
              date={type.date}
              id={type.id}
            />
            <div className="border-t  border-1 rounded border-light-dark m-6"></div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default SetMenuPage;
