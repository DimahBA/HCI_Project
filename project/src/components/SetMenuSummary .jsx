import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";
import { clearSetMenuSelection } from "../slices/setMenuSlice";
import setmenuData from "../data/setMenu";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { setSelectedMenuId } from "../slices/setMenuSlice";
import { v4 as uuidv4 } from "uuid";

// Define allowed categories for each set menu.
const allowedCategoriesMap = {
  "lunch-set": ["starter", "main", "drink"],
  "dinner-set": ["starter", "main", "drink"],
  "gourmet-set": ["starter", "main", "dessert", "drink"],
};

const SetMenuSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMenuId = useSelector((state) => state.setMenu.selectedMenuId);
  const selectedItems = useSelector((state) => state.setMenu.selectedItems);
  // Get the full set menu details (like name and price) from your set menu data.
  const setMenu = setmenuData.types.find((m) => m.id === selectedMenuId);

  // Get the allowed categories for the chosen set menu.
  const requiredCategories = allowedCategoriesMap[selectedMenuId] || [];
  // Check that an item from every required category has been selected.
  const allSelected = requiredCategories.every(
    (cat) => selectedItems && selectedItems[cat]
  );

  // When ready, add the entire set menu as one item to the cart.
  const handleAddSetMenuToCart = () => {
    // console.log("Adding set menu to cart", setMenu);
    const cartItem = {
      id: uuidv4(),
      name: setMenu.name,
      image: setMenu.image,
      description: setMenu.description,
      price: setMenu.price,
      menu: "set",
      count: 1,
      paid: false,
      // Save the selected dish details for potential later display.
      selections: selectedItems,
    };
    dispatch(addItem(cartItem));
    // Optionally, clear the selection afterwards.
    dispatch(clearSetMenuSelection());
    dispatch(setSelectedMenuId(""));

    navigate("/cart");
  };

  if (!allSelected) return null;

  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
      <Button onClick={handleAddSetMenuToCart}> Add To Cart</Button>
    </div>
  );
};

export default SetMenuSummary;
