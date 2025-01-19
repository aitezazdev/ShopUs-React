import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./Slices/fvt";
import cartReducer from "./Slices/cart";
import searchReducer from "./Slices/SearchProduct";

export const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    cart: cartReducer,
    search: searchReducer
  }
});
