import Button from "../components/Button";
import {  useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OrderedPage = () => {
  
  const cartItems = useSelector((state) => state.cart.cartItems);

  let total = 0;
  cartItems.map((item) => (total = +total + item.price * item.count));

  const timerDuration = 1;
  const [time, setTime] = useState(timerDuration * 60);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1; 
        } else {
          clearInterval(interval); 
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  return (
    <>
      <h1 className="text-4xl font-bold font-title text-center mt-5 mb-6">
        Order created!
      </h1>
      <div className="text-center mb-4">
            <p className="text-xl font-medium">Estimated waiting time:</p>
        </div>
        
        <div className="w-full flex justify-center mb-4">
            <div className="inline-flex items-center bg-red text-light py-4 px-6 rounded-full">
                <BsClock className="mr-2 text-4xl" />
                {time === 0 ? (
                <p className="text-lg">Should arrive soon...</p>
                ) : (
                <p className="text-4xl">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </p>
                )}
            </div>
        </div>

      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4 "></div>

      <div className="mb-24">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          
          <div className="border-t border-1 rounded border-light-dark mx-4 mb-6 "></div>

          <div className="flex justify-between ml-6 mr-6 text-lg font-bold ">
            <span className="font-title">Total:</span>

            <span className="font-body">{total}€</span>
          </div>
        </div>
      
      <div className="fixed w-full  max-w-md  bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 px-4 ">
      
      
          <Button onClick={() => navigate("/rating")}>Proceed To Payment</Button>
        
      </div>
    </>
  );
};

export default OrderedPage;
