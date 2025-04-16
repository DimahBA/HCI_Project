import { useEffect } from "react";
import { useSelector } from "react-redux";

const CartSyncer = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderedItems = useSelector((state) => state.cart.orderedItems);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
  }, [cartItems, orderedItems]);

  return null;
};

export default CartSyncer;
