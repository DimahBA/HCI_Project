import menuData from "../data/menu";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  // notes: for the item, needs to be thinner
  // so todo: make a isCart thingy without detail button and smaller (pic smaller)
  // also should we add a arrow down button?
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("Cart Items", cartItems);
  return (
    <>
      <h1 className="text-4xl font-bold font-title text-center mt-10 mb-6">
        My Cart
      </h1>

      <div className="flex flex-col gap-0">
        <div className="border-t border-1 rounded border-light-dark mx-4 "></div>
        {cartItems.length === 0 ? (
          <p className="text-center font-body text-[var(--color-dark)]">
            Your cart is empty.
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id + "-" + item.menu} item={item} />
            ))}
          </>
        )}
      </div>
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

      <div className="flex justify-center gap-4">
        <Button>Add more</Button>
        <Button>Order</Button>
      </div>
    </>
  );
};

export default CartPage;
