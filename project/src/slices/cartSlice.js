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
      state.cartItems.push(action.payload);
    },
    setRemainingAmount: (state, action) => {
      state.remainingAmount = action.payload;
    },
    createOrderedItems: (state) => {
      state.orderedItems = [...state.cartItems];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((it) => it.id !== id);
    },
    increaseCount: (state, action) => {
      const item = state.cartItems.find((it) => it.id === action.payload.id);
      if (item) item.count += 1;
    },
    decreaseCount: (state, action) => {
      const item = state.cartItems.find((it) => it.id === action.payload.id);
      if (item) item.count -= 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    clearOrdered: (state) => {
      state.orderedItems = [];
    },

    /* -------------- MAIN CHANGE -------------- */
    markItemsPaid: (state, action) => {
      const ids = action.payload; // array of IDs just paid
      state.orderedItems = state.orderedItems.map((it) =>
        ids.includes(it.id) ? { ...it, paid: true } : it
      );
      localStorage.setItem("orderedItems", JSON.stringify(state.orderedItems));
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  clearOrdered,
  increaseCount,
  decreaseCount,
  createOrderedItems,
  setRemainingAmount,
  markItemsPaid,
} = cartSlice.actions;

/* Selectors */

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

export const selectUnpaidOrderedTotal = (state) =>
  state.cart.orderedItems.reduce(
    (tot, it) => (it.paid ? tot : tot + it.price * it.count),
    0
  );
