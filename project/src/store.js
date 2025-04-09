import { configureStore } from "@reduxjs/toolkit";
import setMenuReducer from "./slices/setMenuSlice";
import  setCartReducer  from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    setMenu: setMenuReducer,
    cart: setCartReducer,
  },
});
