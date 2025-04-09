import { configureStore } from "@reduxjs/toolkit";
import setMenuReducer from "./slices/setMenuSlice";
export const store = configureStore({
  reducer: {
    setMenu: setMenuReducer,
  },
});
