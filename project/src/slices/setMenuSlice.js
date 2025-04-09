import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedMenuId: "",
  setMenuItems: [],
};

const setMenuSlice = createSlice({
  name: "setMenu",
  initialState,
  reducers: {
    setSelectedMenuId: (state, action) => {
      state.selectedMenuId = action.payload;
    },
    addSetMenuItems: (state, action) => {
      state.setMenuItems.push(action.payload);
    },
    removeSetMenuItems: (state, action) => {
      state.setMenuItems = state.setMenuItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const { setSelectedMenuId, removeSetMenuItems, addSetMenuItems } =
  setMenuSlice.actions;
export default setMenuSlice.reducer;
