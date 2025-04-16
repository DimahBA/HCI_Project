import { useEffect } from "react";
import { useSelector } from "react-redux";

const CartSyncer = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
};

export default CartSyncer;
