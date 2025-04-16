import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import { selectOrderedTotal, setRemainingAmount } from "../slices/cartSlice";
import OrderItem from "../components/OrderItem";

const OrderedPage = () => {
  // const orderedItems = useSelector((state) => state.cart.orderedItems);
  const orderedItems = useSelector((state) => state.cart.orderedItems);
  // console.log("Ordered Items", orderedItems);
  const total = useSelector(selectOrderedTotal);
  const dispatch = useDispatch();
  /* keep store.remainingAmount in sync with what is still unpaid */
  useEffect(() => {
    dispatch(setRemainingAmount(total));
  }, [dispatch, total]);

  const navigate = useNavigate();

  return (
    <div className="text-dark ">
      <h1 className="text-3xl font-bold font-title text-center mt-5 mb-6 text-dark">
        Order created!
      </h1>
      {/* <div className="flex flex-col gap-0"> */}
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-6 "></div>
      <div className="text-center mb-4 text-dark ">
        <p className="text-xl font-medium">Estimated waiting time:</p>
      </div>
      <div className="w-full flex justify-center mb-4">
        <div className="inline-flex items-center bg-red text-light py-4 px-6 rounded-full">
          <BsClock className="mr-2 text-4xl" />
          <Timer />
        </div>
      </div>
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4 "></div>
      <div className="flex justify-between ml-5 mr-5 mb-4 text-lg font-bold ">
        <span className="font-title">Total:</span>

        <span className="font-body">{total}€</span>
      </div>{" "}
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4 "></div>
      <div className="mb-24">
        {orderedItems.map((item) => (
          <OrderItem key={item.id} item={item} isCheckBox={true} />
          // <CartItem countNotPossible key={item.id} item={item} />
        ))}

        <div className="border-t border-1 rounded border-light-dark mx-4 mb-6 "></div>
      </div>
      <div className="fixed w-full  max-w-md  bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 px-4 ">
        <Button onClick={() => navigate("/payment-page")}>
          Proceed To Payment
        </Button>
      </div>
    </div>
  );
};

export default OrderedPage;
