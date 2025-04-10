import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menu";

// Import icons directly as in the Filter component
import glutenFree from "../assets/icons/gluten-free2.svg";
import vegetarian from "../assets/icons/vegetarian2.svg";
import vegan from "../assets/icons/vegan2.svg";

import SmallButton from "../components/SmallButton";
import AddButton from "../components/AddButtonFilled";
import BackButtonFilled from "../components/BackButtonFilled";
import QuantityButton from "../components/QuantityButton";
import Button from "../components/Button";

const DishDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState({});
  console.log(dish);
  useEffect(() => {
    // Find the dish with the matching id across all categories
    for (const category of menuData.categories) {
      const foundDish = category.items.find((item) => item.id === id);
      if (foundDish) {
        console.log("Found dish:", foundDish);
        setDish(foundDish);

        // Initialize extras state based on the dish's extras, all checked by default
        if (foundDish.extras && foundDish.extras.length > 0) {
          const initialExtras = {};
          foundDish.extras.forEach((extra) => {
            initialExtras[extra] = true; // Set to true by default
          });
          setSelectedExtras(initialExtras);
        }

        break;
      }
    }
  }, [id]);

  const handleExtraToggle = (extra) => {
    setSelectedExtras((prev) => ({
      ...prev,
      [extra]: !prev[extra],
    }));
  };

  const goBack = () => {
    navigate(-1);
  };

  const saveAndAddToCart = () => {
    // Here you would typically add the dish with selected extras to the cart
    // For now, just navigate back
    console.log("Adding to cart:", dish.name, "with extras:", selectedExtras);

    navigate(-1);
  };

  if (!dish) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-dark text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-light">
      {/* Main content */}
      <div className="pb-2">
        <div className="relative">
          {/* Back Button - positioned on top of the image */}
          <div className="absolute top-8 left-4 z-10">
            <BackButtonFilled onClick={goBack} />
          </div>

          {/* Add Button - positioned on top of the image */}
          <div className="absolute top-8 right-4 z-10">
            <AddButton menuItems={dish}/>
          </div>

          {/* Dish Image */}
          <div className="w-full overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-96 object-cover object-center"
            />
          </div>

          {/* Overlay for dish name, tags and price - positioned over the image */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a0c03]/95 to-[#1a0c03]/0 text-light px-4 pb-4 pt-34">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                <h2 className="text-3xl font-title mr-2">{dish.name}</h2>
                {dish.tags && dish.tags.includes("Vegetarian") && (
                  <img src={vegetarian} alt="Vegetarian" className="w-7 h-7" />
                )}
                {dish.tags && dish.tags.includes("Vegan") && (
                  <img src={vegan} alt="Vegan" className="w-8 h-8 ml-1" />
                )}
                {dish.tags && dish.tags.includes("Gluten Free") && (
                  <img
                    src={glutenFree}
                    alt="Gluten Free"
                    className="w-8 h-8 ml-1"
                  />
                )}
              </div>
              <span className="text-3xl font-bold">{dish.price}€</span>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4">
          {/* Dish Description */}
          <p className="text-dark text-xl mb-6">{dish.description}</p>

          {/* Main Ingredients */}
          {dish.mainIngredients && dish.mainIngredients.length > 0 && (
            <div className="mb-6">
              <h3 className="text-2xl font-title font-bold text-red mb-2">
                Ingredients
              </h3>
              <div className="grid grid-cols-3 gap-x-2 gap-y-2">
                {dish.mainIngredients.map((ingredient, index) => (
                  <div key={index} className="text-dark text-lg">
                    {ingredient}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extras */}
          {dish.extras && dish.extras.length > 0 && (
            <div className="mb-10">
              <h3 className="text-2xl font-title font-bold text-red mb-2">
                Extras
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(selectedExtras).map((extra, index) => (
                  <div key={index} className="flex items-center text-lg">
                    <input
                      id={`extra-${index}`}
                      type="checkbox"
                      checked={selectedExtras[extra]}
                      onChange={() => handleExtraToggle(extra)}
                      className="h-5 w-5 mr-2 accent-amber-800"
                    />
                    <label
                      htmlFor={`extra-${index}`}
                      className={`transition-all duration-300 ${
                        selectedExtras[extra]
                          ? "text-dark font-medium"
                          : "text-red opacity-50 line-through"
                      }`}
                    >
                      {extra}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No extras message */}
          {dish.extras && dish.extras.length === 0 && (
            <div className="mb-10 ">
              <h3 className="text-2xl font-title font-bold text-red mb-2">
                Extras
              </h3>
              <p className="text-dark text-lg">
                No customizable extras available for this dish.
              </p>
            </div>
          )}

          {/* Save and Add to Cart Button */}
          <div className="fixed bottom-20  w-full max-w-md h-20 flex items-center justify-center">
            <Button onClick={saveAndAddToCart}>Save and Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsPage;
