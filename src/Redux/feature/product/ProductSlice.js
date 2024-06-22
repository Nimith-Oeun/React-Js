import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BAS_URL } from "../../Api/Api";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

// create asynceThunk to fetch APi
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(`${BAS_URL}products`);
    const data = await res.json();
    // console.log("data", data);
    return data;
  }
);

// create reducer and action
export const productsSlice = createSlice({
  name: "products", 
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "Loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      });
  },
});

export default productsSlice.reducer;
