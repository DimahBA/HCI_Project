import Item from "../components/Item";
import Filter from "../components/Filter";
import menuData from "../data/menu";
import MenuTab from "../components/MenuTab";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SetMenuSummary from "../components/SetMenuSummary ";
import { setSetMenuItem } from "../slices/setMenuSlice";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const { categories, filters, menuTitle } = menuData;
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [activeMenu, setActiveMenu] = useState(categories[0].name);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const selectedMenuId = useSelector((state) => state.setMenu.selectedMenuId);

  const dispatch = useDispatch();

  // Get allowed categories based on the active set menu.
  const allowedCategoriesMap = {
    "lunch-set": ["starter", "main", "drink"],
    "dinner-set": ["starter", "main", "drink"],
    "gourmet-set": ["starter", "main", "dessert", "drink"],
  };
  const allowedCategories = allowedCategoriesMap[selectedMenuId];

  console.log("Selected Menu ID:", selectedMenuId);
  const handleFilterToggle = (filterName) => {
    setSelectedFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((f) => f !== filterName)
        : [...prev, filterName]
    );
  };

  const activeCategory = categories.find((cat) => cat.name === activeMenu);
  const handleSelectDish = (item) => {
    // Only update if the item type is allowed in the set menu.
    if (allowedCategories && allowedCategories.includes(item.type)) {
      dispatch(setSetMenuItem({ category: item.type, item }));
    }
  };

  const filteredItems = activeCategory?.items?.filter((item) => {
    if (selectedFilters.length === 0) return true; // No filters = show all
    return selectedFilters.every((filter) => item.tags?.includes(filter));
  });
  const navigate = useNavigate();
  // const setMenuTags = setMenuData.types.find(
  //   (item) => item.id === selectedMenuId
  // ).tags;
  // console.log(allowedCategories);
  return (
    <>
      <div className="sticky flex flex-col justify-center items-center bg-light top-0  w-full max-w-md mx-autopy-3 px-4 pb-6 z-10">
        <div className="w-full flex items-center justify-center h-20">
          <h1 className="text-3xl font-bold font-title text-center">
            {menuTitle}
          </h1>
        </div>

        {/* Menu Tabs */}
        <MenuTab
          key={categories.id}
          categories={
            selectedMenuId === "lunch-set" || selectedMenuId === "dinner-set"
              ? categories.filter((cat) => cat.id !== "desserts")
              : categories
          }
          // categories={categories}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        {/* Filters */}
        <div className="overflow-x-auto w-full mt-6 ">
          <ul className="flex items-center m-0 p-0 whitespace-nowrap justify-evenly w-full gap-1">
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
      <ul className="mb-20">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Item
              // name, price, image, description,
              menuItems={{
                name: item.name,
                price: item.price,
                image: item.image,
                description: item.description,
                id: item.id,
                type: item.type,
              }}
              key={item.id}
              tags={item.tags}
              isSetSelected={selectedMenuId ? true : false}
              // name={item.name}
              // price={selectedMenuId ? "" : item.price}
              // image={item.image}
              // description={item.description}
              onClick={() => handleSelectDish(item)}
            />
          ))
        ) : (
          <p className="text-center text-green-dark mt-4">
            No items match the selected filters.
          </p>
        )}
      </ul>
      {selectedMenuId && <SetMenuSummary />}
      {!selectedMenuId && cartItems.length > 0 && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
          <Button onClick={() => navigate("/cart")}>Continue</Button>
        </div>
      )}
    </>
  );
};

export default MenuPage;
