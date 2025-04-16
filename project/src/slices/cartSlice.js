import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  orderedItems: JSON.parse(localStorage.getItem("orderedItems") || "[]") || [],
  remainingAmount: 0,
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
    setRemainingAmount: (state, action) => {
      state.remainingAmount = action.payload;
    },
    createOrderedItems: (state) => {
      state.orderedItems = [...state.cartItems];
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
    markItemsPaid: (state, action) => {
      const ids = action.payload; // string[] | number[]
      state.orderedItems.forEach((it) => {
        if (ids.includes(it.id)) it.paid = true;
      });
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseCount,
  decreaseCount,
  createOrderedItems,
  setRemainingAmount,
  markItemsPaid,
} = cartSlice.actions;
export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

export const selectOrderedTotal = (state) =>
  state.cart.orderedItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

//  Total item count (useful for cart icon)
export const selectCartItemCount = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.count, 0);

export default cartSlice.reducer;
