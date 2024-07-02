import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BAS_URL } from "../../Api/Api";

const initialState = {
  products: [],
  singleProduct: {},
  status: "idle" ,
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

// create asynceThunk to fetch single product
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const res = await fetch(`${BAS_URL}products/${id}`);
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
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed", 
        state.error = action.error.message;
      })

      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        state.status = "success";
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "failed", 
        state.error = action.error.message;
      })
  },
});

export default productsSlice.reducer;
