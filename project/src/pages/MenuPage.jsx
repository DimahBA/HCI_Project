import Item from "../components/Item";
import Filter from "../components/Filter";
import menuData from "../data/menu";
import MenuTab from "../components/MenuTab";
import React, { useState } from "react";

const MenuPage = () => {
  const { filters, categories } = menuData;
  const [activeMenu, setActiveMenu] = useState(categories[0].name);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterToggle = (filterName) => {
    setSelectedFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((f) => f !== filterName)
        : [...prev, filterName]
    );
  };

  const activeCategory = categories.find((cat) => cat.name === activeMenu);

  const filteredItems = activeCategory?.items?.filter((item) => {
    if (selectedFilters.length === 0) return true; // No filters = show all
    return selectedFilters.every((filter) => item.tags?.includes(filter));
  });

  return (
   
      <div className="flex flex-col items-center ">
        <div className="w-full flex items-center justify-center h-24">
          <h1 className="text-3xl font-bold font-title text-center">
            {menuData.menuTitle}
          </h1>
        </div>

        {/* Menu Tabs */}
        <MenuTab
          categories={categories}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        {/* Filters */}
        <div className="overflow-x-auto max-w-full mt-6 ">
          <ul className="flex items-center m-0 p-0 whitespace-nowrap">
            {filters.map((filter) => (
              <Filter
                key={filter}
                name={filter}
                isActive={selectedFilters.includes(filter)}
                onClick={() => handleFilterToggle(filter)}
              />
            ))}
          </ul>
        </div>

        {/* Items */}
        <ul className="w-full" >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.imageUrl}
                tags={item.tags}
                description={item.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No items match the selected filters.
            </p>
          )}
        </ul>
      </div>
  );
};

export default MenuPage;
