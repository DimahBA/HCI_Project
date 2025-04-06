import { useState } from "react";
import AddButton from "./AddButton";
import glutenFree from "../assets/icons/gluten-free2.svg";
import vegetarian from "../assets/icons/vegetarian2.svg";
import vegan from "../assets/icons/vegan2.svg";

// import tomatoSoup from "../assets/images/tomato-soup.jpg";

// const imageMap = {
//   "Tomato Soup": tomatoSoup,
// };

const Item = ({ name, price, image, tags, description }) => {
  const [count, setCount] = useState(0);

  return (
    <li className="flex min-h-[140px] justify-between items-center p-3 bg-red m-6 rounded-xl font-body text-light">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-26 h-26 object-cover rounded-xl"
        />
        <div className="flex flex-col items-start">
          <div className="flex w-full justify-between">
            <span className="font-title text-lg text-start">{name}</span>{" "}
            <span className="pr-1 font-body font-bold text-xl">{price}€</span>
          </div>

          <span className="font-body text-s text-light-dark text-start">
            {description}
          </span>
          <div className="w-full flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center justify-center gap-1.5">
              <button className="bg-green px-4 py-0.5 rounded-xl  text-red">
                Details
              </button>
              {tags?.includes("Vegetarian") && (
                <img src={vegetarian} alt="Vegetarian" className="w-7 h-7 " />
              )}
              {tags?.includes("Vegan") && (
                <img src={vegan} alt="Vegan" className="w-7 h-7 " />
              )}
              {tags?.includes("Gluten Free") && (
                <img src={glutenFree} alt="Gluten Free" className="w-7 h-7 " />
              )}
            </div>

            <AddButton />
          </div>
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
