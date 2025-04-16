import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import glutenFree from "../assets/icons/gluten-free2.svg";
import vegetarian from "../assets/icons/vegetarian2.svg";
import vegan from "../assets/icons/vegan2.svg";
import alcohol from "../assets/icons/alcohol2.svg";
import soft from  "../assets/icons/soft2.svg";
import hot from "../assets/icons/hot2.svg";
import cold from  "../assets/icons/cold2.svg";

const Item = ({
  menuItems,

  tags,

  isSetMenu,
  isSetSelected,

  date,
  onClick,
  activeMenu,
}) => {
  const { name, price, image, description, id } = menuItems;

  const navigate = useNavigate();
  // const [count, setCount] = useState(0);

  const handleViewDetails = () => {
    // navigate(`/dish/${id}`);
    navigate(`/dish/${id}`, { state: { activeCategory: activeMenu } });
  };
  function isAvailableBetween(startHour, endHour) {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= startHour && currentHour < endHour;
  }
  const isLunch = isAvailableBetween(11, 15); // 11:00 - 15:00
  const isDinner = isAvailableBetween(17, 22); // 17:00 - 22:00
  //dispatch
  // // const dispatch = useDispatch();
  // const addToCart = (item) => {
  //   console.log("Added to cart:", item);
  // };
  return (
    <li
      onClick={onClick}
      className={`flex min-h-[140px] justify-between items-center p-3 mx-4 mb-4 rounded-xl font-body  ${
        isSetMenu && !isDinner && id === "dinner-set"
          ? "bg-light-dark pointer-events-none  text-[#7A5D34] "
          : isSetMenu && !isLunch && id === "lunch-set"
          ? "bg-light-dark pointer-events-none  text-[#7A5D34]"
          : "bg-red text-light-dark "
      }`}
    >
      <div className="flex items-center gap-3 w-full">
        <div className="w-27 h-27  rounded-xl flex-none relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        {/* 
        <img
          src={image}
          alt={name}
          className="w-26 h-26 object-fill rounded-xl"
        /> */}
        <div className="flex  flex-col items-start w-full">
          <div className="flex w-full justify-between text-light">
            <span className="font-title text-xl text-start">{name}</span>{" "}
            <span className="pr-1 font-body font-bold text-xl">{price}€</span>
          </div>

          <span className="font-body  text-start">{description}</span>
          {date && <p className="text-sm text-light">*Only available between: {date}</p>}
          {!isSetMenu && (
            <div className="w-full flex items-center justify-between gap-2 mt-2">
              <div className="flex items-center justify-center gap-1.5">
                <button
                  className="bg-green active:bg-green-dark px-4 py-0.5 rounded-xl text-red"
                  onClick={handleViewDetails}
                >
                  Details
                </button>
                {tags?.includes("Vegetarian") && (
                  <img src={vegetarian} alt="Vegetarian" className="w-6 h-6 " />
                )}
                {tags?.includes("Vegan") && (
                  <img src={vegan} alt="Vegan" className="w-6 h-6 " />
                )}
                {tags?.includes("Gluten Free") && (
                  <img
                    src={glutenFree}
                    alt="Gluten Free"
                    className="w-6 h-6 "
                  />
                )}
                {tags?.includes("Alcohol") && (
                  <div className="w-7 h-7 flex items-center justify-center border-2 border-green rounded-full">
                    <img src={alcohol} alt="Alcohol" className="w-4 h-4" />
                  </div>
                )}
                {tags?.includes("Soft") && (
                  <div className="w-7 h-7 flex items-center justify-center border-2 border-green rounded-full">
                    <img src={soft} alt="Soft" className="w-4 h-4 ml-1" />
                  </div>
                )}
                {tags?.includes("Hot") && (
                  <div className="w-7 h-7 flex items-center justify-center border-2 border-green rounded-full">
                  <img src={hot} alt="Hot" className="w-4 h-4 " />
                  </div>
                )}
                {tags?.includes("Cold") && (
                  <div className="w-7 h-7 flex items-center justify-center border-2 border-green rounded-full">
                  <img src={cold} alt="Cold" className="w-5 h-5 " />
                  </div>
                )}
              </div>

              <AddButton menuItems={menuItems} isSetSelected={isSetSelected} />
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex flex-col items-end gap-2">
        <span className="pr-1 text-xl">{price}€</span>
        {count === 0 ? (
          <button
            onClick={() => setCount(1)}
            className="border-2 border-light text-light w-8 h-8 rounded-full"
          >
            +
          </button>
        ) : (
          <div className="flex items-center gap-2 border-2 border-light rounded-full  h-8 px-3  ">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="font-bold">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </div> */}
    </li>
  );
};

export default Item;
