import Button from "../components/Button";
import {  useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import RateItem from "../components/RateItem";
const RatingPage = () => {
  
  const cartItems = useSelector((state) => state.cart.cartItems);

  let total = 0;
  cartItems.map((item) => (total = +total + item.price * item.count));
 
  return (
    <>
    
      <h1 className="text-4xl font-bold font-title text-center mt-5 mb-4">
        Rate your food
      </h1>
      <div className="px-4 text-sm italic text-dark mb-2">
        Let us know how you liked your food. You can skip this step and go directly to payment.        

      </div>
       
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4 "></div>

      <div className="mb-24">
          {cartItems.map((item) => (
            <RateItem key={item.id} item={item} />
          ))}
        </div>
      
      <div className="fixed w-full  max-w-md  bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 px-4 ">
      
      
          <Button>Proceed To Payment</Button>
        
      </div>
    </>
  );
};

export default RatingPage;
