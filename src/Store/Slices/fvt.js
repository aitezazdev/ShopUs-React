import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavouriteProduct: (state, action) => {
      const isAlreadyPresent = state.favourites.find((f) => f.title === action.payload.title);
      if (!isAlreadyPresent) {
        state.favourites = [...state.favourites, action.payload];
      }
    },
    removeFavouriteProduct: (state, action) => {
      state.favourites = state.favourites.filter(
        (p) => p.title !== action.payload.title
      );
    },
  },
});

export const { addFavouriteProduct, removeFavouriteProduct } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
