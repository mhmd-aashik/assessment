// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Adjust the path as needed

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});