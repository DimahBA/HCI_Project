import Item from "../components/Item";
import Filter from "../components/Filter";
import menuData from "../data/menu";
import MenuTab from "../components/MenuTab";
import React, { useState } from "react";
import TableHeader from "../components/TableHeader";

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
    <>
      <div className="sticky flex flex-col justify-center items-center bg-light top-0  w-full max-w-md mx-autopy-3 px-4 pb-6 z-10">
        <div className="w-full flex items-center justify-center h-20">
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
      </div>

      {/* Items */}
      <ul>
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
          <p className="text-center text-green-dark mt-4">
            No items match the selected filters.
          </p>
        )}
      </ul>
    </>
  );
};

export default MenuPage;
