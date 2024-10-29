import { createSlice } from "@reduxjs/toolkit";

interface Favorite {
  idDrink: string;
}

interface CartState {
  favorites: Favorite[];
}

const initialState: CartState = {
  favorites: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addFavorite: (state, action: { payload: Favorite }) => {
      const exists = state.favorites.find(
        (fav) => fav.idDrink === action.payload.idDrink
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: { payload: Favorite }) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.idDrink !== action.payload.idDrink
      );
    },
  },
});

export const { addFavorite, removeFavorite } = cartSlice.actions;
export default cartSlice.reducer;
