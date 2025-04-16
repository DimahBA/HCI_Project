import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Example item structure might be { id, name, price, quantity }
      // You can push or find if it's already in the cart and just update quantity
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove the item by index or by matching an ID
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseCount: (state, action) => {
      const itemId = action.payload.id;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.count += 1; // Increment the count of the item
      }
    },
    decreaseCount: (state, action) => {
      const itemId = action.payload.id;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.count -= 1; // Increment the count of the item
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, clearCart, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
