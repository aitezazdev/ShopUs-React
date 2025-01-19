import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  filteredProducts: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { updateSearchQuery, setFilteredProducts } = searchSlice.actions;
export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectFilteredProducts = (state) => state.search.filteredProducts;
export default searchSlice.reducer;
