import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMenuId: "",
  selectedItems: {},
};

const setMenuSlice = createSlice({
  name: "setMenu",
  initialState,
  reducers: {
    setSelectedMenuId: (state, action) => {
      state.selectedMenuId = action.payload;
      state.selectedItems = {}; // Clear previous selections when a new set menu is selected.
    },
    setSetMenuItem: (state, action) => {
      const { category, item } = action.payload;
      state.selectedItems[category] = item;
    },
    removeSetMenuItem: (state, action) => {
      const { category } = action.payload;
      delete state.selectedItems[category];
    },
    // Add this reducer to clear all selections.
    clearSetMenuSelection: (state) => {
      state.selectedItems = {};
    },
  },
});

export const {
  setSelectedMenuId,
  setSetMenuItem,
  removeSetMenuItem,
  clearSetMenuSelection,
} = setMenuSlice.actions;
export default setMenuSlice.reducer;
