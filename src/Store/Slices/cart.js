import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAlreadyInCart = state.cart.find(
        (item) => item.title === action.payload.title
      );
      if (!isAlreadyInCart) {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.title !== action.payload.title);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
