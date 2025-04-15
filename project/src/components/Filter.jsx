const images = import.meta.glob("../assets/images/*.jpg", { eager: true });

import glutenFree from "../assets/icons/gluten-free.svg";
import vegetarian from "../assets/icons/vegetarian.svg";
import vegan from "../assets/icons/vegan.svg";

const imageMap = {
  "Gluten Free": glutenFree,
  Vegetarian: vegetarian,
  Vegan: vegan,
};

const Filter = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 rounded-full py-1.5 px-2 flex font-normal items-center transition small-text ${
        isActive
          ? "bg-green text-green-dark border-green-dark"
          : "border-green-dark text-green-dark"
      }`}
    >
      <img src={imageMap[name]} alt={name} className="w-6 h-6 mr-2" />
      {name}
    </button>
  );
};

export default Filter;
