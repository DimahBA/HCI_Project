const images = import.meta.glob("../assets/images/*.jpg", { eager: true });

import glutenFree from "../assets/icons/gluten-free.svg";
import vegetarian from "../assets/icons/vegetarian.svg";
import vegan from "../assets/icons/vegan.svg";

const imageMap = {
  "Gluten Free": glutenFree,
  "Vegetarian": vegetarian,
  "Vegan": vegan,
};

const Filter = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 rounded-full mr-2 py-2 px-3 flex items-center transition ${
        isActive
          ? "bg-green text-green-dark border-green-dark"
          : "border-green-dark text-green-dark"
      }`}
    >
      <img src={imageMap[name]} alt={name} className="w-5 h-5 mr-2" />
      {name}
    </button>
  );
};

export default Filter;
