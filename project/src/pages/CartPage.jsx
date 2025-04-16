import menuData from "../data/menu";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import {
  clearCart,
  selectCartTotal,
  createOrderedItems,
} from "../slices/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log("Cart Items", cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = useSelector(selectCartTotal);
  const orderedItems = useSelector((state) => state.cart.orderedItems);
  console.log("Ordered Items", total);
  return (
    <>
      <h1 className="text-3xl font-bold font-title text-center mt-5 mb-6 text-dark">
        My Cart
      </h1>

      {/* <div className="flex flex-col gap-0"> */}
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4 "></div>
      <div className="flex justify-between ml-6 mr-6 text-lg font-bold text-dark mb-4">
        <span className="font-title">Total:</span>

        <span className="font-body">{total}€</span>
      </div>
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4 "></div>

      {cartItems.length !== 0 ? (
        <div className="mb-24">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mb-4">
            <label
              for="text"
              className="block ml-6 mb-2 text-lg font-semibold font-title text-dark "
            >
              Notes for the chef
            </label>

            <div className="ml-6 mr-6">
              <textarea
                id="text"
                className=" border-red border-2 placeholder-light-dark text-dark text-md rounded-lg focus:ring-red focus:border-red block w-full h-32 p-2.5"
                placeholder="Type if you have some notes"
                required
              ></textarea>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center  gap-4 justify-center h-[70%]">
          <div className="flex  flex-col justify-center items-center gap-8 opacity-45  w-full h-full ">
            <BsCartX className="text-2xl w-full h-50 text-light-dark" />{" "}
            <p className="text-center font-body font-bold text-light-dark text-xl">
              Your cart is empty.
            </p>
          </div>
        </div>
      )}
      {/* </div> */}
      <div className="fixed w-full  max-w-md  bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 px-4 ">
        <Button onClick={() => navigate("/menu")}>Add more</Button>
        {cartItems.length !== 0 && (
          <>
            <Button onClick={() => dispatch(clearCart())}>Clear all</Button>
            <Button
              onClick={() => {
                navigate("/ordered");
                dispatch(createOrderedItems());
                dispatch(clearCart());
              }}
            >
              Order
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
