// src/redux/accessibilitySlice.js
import { createSlice } from '@reduxjs/toolkit';
const storedSettings = JSON.parse(localStorage.getItem('accessibility')) || {
    contrast: false,
    bigFont: false,
    simpleMode: false,
    darkMode: false,
  };


const accessibilitySlice = createSlice({
  name: 'accessibility',
  initialState: storedSettings,
  reducers: {
    toggleContrast: (state) => { state.contrast = !state.contrast; },
    toggleBigFont: (state) => { state.bigFont = !state.bigFont; },
    toggleSimpleMode: (state) => { state.simpleMode = !state.simpleMode; },
    toggleDarkMode: (state) => { state.darkMode = !state.darkMode; },
  },
});

export const {
  toggleContrast,
  toggleBigFont,
  toggleSimpleMode,
  toggleDarkMode,
} = accessibilitySlice.actions;

export default accessibilitySlice.reducer;
