import { createReducer } from "@reduxjs/toolkit";

import {
  fetchPriceRequest,
  fetchPriceSucces,
  fetchPriceFailed,
  setPrice
} from "../actions/priceActions";

const initialState = {
    price: null,
    loading: false,
    error: null,
}

const priceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPriceRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchPriceSucces, (state, action) => {
      state.price = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchPriceFailed, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(setPrice, (state, action) => {
      state.price = action.payload;
    });
});

export default priceReducer;