const images = import.meta.glob("../assets/images/*.jpg", { eager: true });

import glutenFree from "../assets/icons/gluten-free.svg";
import vegetarian from "../assets/icons/vegetarian.svg";
import vegan from "../assets/icons/vegan.svg";
import alcohol from "../assets/icons/alcohol.svg";
import soft from  "../assets/icons/soft.svg";
import hot from "../assets/icons/hot.svg";
import cold from  "../assets/icons/cold.svg";


const imageMap = {
  "Gluten Free": glutenFree,
  Vegetarian: vegetarian,
  Vegan: vegan,
  Alcohol: alcohol,
  Soft: soft,
  Hot: hot,
  Cold: cold,
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
     {
      (name === "Alcohol" || name === "Soft" || name === "Hot" || name === "Cold") ? (
        <div className="w-7 h-7 flex items-center justify-center border-2 border-green-dark rounded-full mr-2">
          <img 
            src={name === "Alcohol" ? alcohol : 
                name === "Soft" ? soft : 
                name === "Hot" ? hot : 
                cold} 
            alt={name} 
            className={`${name === "Hot" ? "w-4 h-4" : "w-5 h-5"}  ${name === "Soft" ? "ml-1" : ""}`} 
          />
        </div>
      ) : (
        <>
          <img src={imageMap[name]} alt={name} className="w-6 h-6 mr-2" />
        </>
      )}
      {name}
    </button>
  );
};

export default Filter;
