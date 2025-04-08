import Item from "../components/Item";
import Filter from "../components/Filter";
import menuData from "../data/setMenu";
import MenuTab from "../components/MenuTab";
import React, { useState } from "react";
import TableHeader from "../components/TableHeader";

const SetMenuPage = () => {
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
          <>
            <Item
              isSetMenu={true}
              key={type.id}
              name={type.name}
              price={type.price}
              image={type.imageUrl}
              description={type.description}
              date={type.date}
            />
            <div className="border-t  border-1 rounded border-light-dark m-6"></div>
          </>
        ))}
      </ul>
    </>
  );
};

export default SetMenuPage;
