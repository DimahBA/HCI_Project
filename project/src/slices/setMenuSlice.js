import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedMenuId: "",
};

const setMenuSlice = createSlice({
  name: "setMenu",
  initialState,
  reducers: {
    setSelectedMenuId: (state, action) => {
      state.selectedMenuId = action.payload;
    },
  },
});
export const { setSelectedMenuId } = setMenuSlice.actions;
export default setMenuSlice.reducer;
