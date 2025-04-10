import menuData from "../data/menu";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

const CartPage = () => {
  // notes: for the item, needs to be thinner
  // so todo: make a isCart thingy without detail button and smaller (pic smaller)
  // also should we add a arrow down button?
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("Cart Items", cartItems);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-4xl font-bold font-title text-center mt-10 mb-6">
        My Cart
      </h1>

      {/* <div className="flex flex-col gap-0"> */}
      <div className="border-t border-1 rounded border-light-dark mx-4 mb-6 "></div>

      {cartItems.length !== 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mb-4">
            <label
              for="text"
              className="block ml-6 mb-2 text-xl font-medium text-dark "
            >
              Notes for the chef
            </label>

            <div className="ml-6 mr-6">
              <input
                type="text"
                id="text"
                className="border border-dark placeholder-light-dark text-dark text-sm rounded-lg focus:ring-red focus:border-red block w-full h-16 p-2.5"
                placeholder="Write if you have some notes"
                required
              />
            </div>
          </div>

          <div className="flex justify-between ml-6 mr-6 text-lg">
            <span className="font-bold">Total:</span>
            <span>150€</span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center  gap-4 justify-center ">
          <div className="flex  flex-col justify-center items-center gap-8 opacity-45  w-full h-full mt-44">
            <BsCartX className="text-2xl w-full h-50 text-light-dark" />{" "}
            <p className="text-center font-body font-bold text-light-dark text-xl">
              Your cart is empty.
            </p>
          </div>
        </div>
      )}
      {/* </div> */}
      <div className="fixed bottom-20  w-full max-w-md h-20 flex items-center justify-evenly">
        <Button onClick={() => navigate("/menu")}>Add more</Button>
        {cartItems.length !== 0 && <Button>Order</Button>}
      </div>
    </>
  );
};

export default CartPage;
