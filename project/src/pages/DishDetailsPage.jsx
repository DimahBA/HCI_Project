import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import menuData from '../data/menu';

// Import icons directly as in the Filter component
import glutenFree from "../assets/icons/gluten-free2.svg";
import vegetarian from "../assets/icons/vegetarian2.svg";
import vegan from "../assets/icons/vegan2.svg";

import SmallButton from '../components/SmallButton';
import AddButton from '../components/AddButton';
import BackButton from '../components/BackButton';
import QuantityButton from '../components/QuantityButton';

const DishDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(null);
  const [extras, setExtras] = useState({
    "Red pepper": false,
    "Black pepper": false,
    "Thyme": false,
    "Mint": false
  });

  useEffect(() => {
    // Find the dish with the matching id across all categories
    for (const category of menuData.categories) {
      const foundDish = category.items.find(item => item.id === id);
      if (foundDish) {
        console.log("Found dish:", foundDish);
        console.log("Dish tags:", foundDish.tags);
        setDish(foundDish);
        break;
      }
    }
  }, [id]);

  const handleExtraToggle = (extra) => {
    setExtras(prev => ({
      ...prev,
      [extra]: !prev[extra]
    }));
  };

  const goBack = () => {
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
    <div className="flex flex-col min-h-screen bg-light">

      {/* Main content */}
      <div className="pb-20">
        <div className="relative">
          {/* Dish Image */}
          <div className="w-full overflow-hidden">
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-full object-cover"
            />
          </div>

          {/* Overlay for dish name, tags and price - positioned over the image */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 text-light p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h2 className="text-3xl font-title mr-2">{dish.name}</h2>
                {dish.tags && dish.tags.includes("Vegetarian") && (
                  <img src={vegetarian} alt="Vegetarian" className="w-6 h-6" />
                )}
                {dish.tags && dish.tags.includes("Vegan") && (
                  <img src={vegan} alt="Vegan" className="w-6 h-6 ml-1" />
                )}
                {dish.tags && dish.tags.includes("Gluten Free") && (
                  <img src={glutenFree} alt="Gluten Free" className="w-6 h-6 ml-1" />
                )}
              </div>
              <span className="text-2xl font-bold">{dish.price}€</span>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4">
          {/* Dish Description */}
          <p className="text-dark text-xl mb-6">{dish.description}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-2xl font-title font-bold text-red mb-2">Ingredients</h3>
            <div className="grid grid-cols-3 gap-x-8">
              <div className="text-dark">Olive oil</div>
              <div className="text-dark">Carrot</div>
              <div className="text-dark">Onion</div>
              <div className="text-dark">Parmesan</div>
              <div className="text-dark">Salt</div>
              <div className="text-dark">Cream</div>
              <div className="text-dark">Tomatoes</div>
              <div className="text-dark">Onion</div>
            </div>
          </div>

          {/* Extras */}
          <div className="mb-10">
            <h3 className="text-2xl font-title font-bold text-red mb-2">Extras</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <input
                  id="red-pepper"
                  type="checkbox"
                  checked={extras["Red pepper"]}
                  onChange={() => handleExtraToggle("Red pepper")}
                  className="h-5 w-5 mr-2 accent-amber-800"
                />
                <label htmlFor="red-pepper" className="text-dark">Red pepper</label>
              </div>
              <div className="flex items-center">
                <input
                  id="thyme"
                  type="checkbox"
                  checked={extras["Thyme"]}
                  onChange={() => handleExtraToggle("Thyme")}
                  className="h-5 w-5 mr-2 accent-amber-800"
                />
                <label htmlFor="thyme" className="text-dark">Thyme</label>
              </div>
              <div className="flex items-center">
                <input
                  id="black-pepper"
                  type="checkbox"
                  checked={extras["Black pepper"]}
                  onChange={() => handleExtraToggle("Black pepper")}
                  className="h-5 w-5 mr-2 accent-amber-800"
                />
                <label htmlFor="black-pepper" className="text-dark">Black pepper</label>
              </div>
              <div className="flex items-center">
                <input
                  id="mint"
                  type="checkbox"
                  checked={extras["Mint"]}
                  onChange={() => handleExtraToggle("Mint")}
                  className="h-5 w-5 mr-2 accent-amber-800"
                />
                <label htmlFor="mint" className="text-dark">Mint</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailsPage;