import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosStarOutline, IoIosStar } from "react-icons/io";

const RateItem = ({
  item,

}) => {
    const [rating, setRating] = useState(0); 
    const [hover, setHover] = useState(0);   
  
  return (
   

<div className="bg-red m-4 p-4 rounded-lg shadow">
      <div className="flex items-start gap-4 mb-2">
        <img
          src={item.image}
          alt="img"
          className="w-22 h-22 object-cover rounded"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-title text-light mb-4">{item.name}</h2>
          
          
          <div className="flex gap-1 ">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = hover >= star || rating >= star;
          const StarIcon = isFilled ? IoIosStar : IoIosStarOutline;

          return (
            <StarIcon
              key={star}
              className="text-3xl text-light transition-transform hover:scale-110"
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            />
          );
        })}
      </div>
        </div>
      </div>

      

      <label
        htmlFor="text"
        className="mb-2 text-lg font-semibold font-title text-light"
      >
        Notes:
      </label>
      <textarea
        id="text"
        className="bg-light border-red border-2 placeholder-light-dark text-dark text-md rounded-lg focus:ring-red focus:border-red block w-full h-12 p-2.5"
        placeholder="Type here..."
        required
      ></textarea>
    </div>
  );
};

export default RateItem;

