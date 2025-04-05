import { useState } from "react";


import tomatoSoup from '../assets/images/tomato-soup.jpg';


const imageMap = {
  'Tomato Soup': tomatoSoup,
};



const Item = ({ name, price }) => {
    const [count, setCount] = useState(0);

    return (
        <li className="flex justify-between items-center p-2 bg-red m-6 rounded-xl font-body text-light">
            <div className="flex items-center gap-4">
                <img src={imageMap[name]} alt={name} className="w-15 h-15 object-cover rounded-xl" />
                <div className="flex flex-col items-start">
                    <span className="font-bold text-lg">{name}</span>
                    <button className="bg-green px-6 py-1 rounded-xl mt-2 text-red">Details</button>
                </div>
            </div>

        <div className="flex flex-col items-end gap-2">
            <span className="pr-1 text-xl">{price}€</span>
                {count === 0 ? ( <button onClick={() => setCount(1)} className="border-2 border-light text-light w-8 h-8 rounded-full">+</button>
            ) : (
            <div className="flex items-center gap-2 border-2 border-light rounded-full  h-8 px-3  ">
                <button onClick={() => setCount(count - 1)}>-</button>
                <span className="font-bold">{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            )}

        </div>
      </li>
    );
  };
  
  export default Item;
  