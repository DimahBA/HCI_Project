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
      {/* Header */}
      <div className="fixed top-0 w-full max-w-md bg-red text-light h-15 px-4 shadow-light-dark shadow-sm z-50 flex items-center justify-between">
        <BackButton />
        <h1 className="text-2xl font-title">Table 24</h1>
        <div className="w-6"></div> {/* Empty div for flex spacing */}
      </div>

      {/* Main content */}
      <div className="pt-20 pb-20 px-4">
        {/* Dish Image */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
          <img 
            src={dish.imageUrl} 
            alt={dish.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dish Name and Price */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-title text-dark">{dish.name}</h2>
          <span className="text-2xl font-bold text-dark">{dish.price}€</span>
        </div>

        {/* Dish Description */}
        <p className="text-dark mb-6">{dish.description}</p>

        {/* Dietary Tags */}
        <div className="flex gap-3 mb-6">
          {dish.tags && dish.tags.includes("Vegetarian") && (
            <img src={vegetarian} alt="Vegetarian" className="w-8 h-8" />
          )}
          {dish.tags && dish.tags.includes("Vegan") && (
            <img src={vegan} alt="Vegan" className="w-8 h-8" />
          )}
          {dish.tags && dish.tags.includes("Gluten Free") && (
            <img src={glutenFree} alt="Gluten Free" className="w-8 h-8" />
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h3 className="text-2xl font-title text-dark mb-2">Ingredients</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Olive oil</div>
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Parmesan rind</div>
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Tomatoes</div>
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Carrot</div>
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Salt</div>
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Onion</div>
            <div className="bg-light-dark bg-opacity-20 p-2 rounded-lg text-center">Cream</div>
          </div>
        </div>

        {/* Extras */}
        <div className="mb-10">
          <h3 className="text-2xl font-title text-dark mb-2">Extras</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(extras).map(([extra, isSelected]) => (
              <div 
                key={extra}
                onClick={() => handleExtraToggle(extra)}
                className={`p-3 rounded-lg flex items-center ${isSelected ? 'bg-green' : 'bg-light-dark bg-opacity-20'}`}
              >
                <input 
                  type="checkbox" 
                  checked={isSelected}
                  onChange={() => {}}
                  className="mr-2 h-5 w-5"
                />
                <span className={isSelected ? 'text-green-dark' : 'text-dark'}>{extra}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default DishDetailsPage;