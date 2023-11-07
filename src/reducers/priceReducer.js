import { createReducer } from "@reduxjs/toolkit";

import {
  fetchPriceRequest,
  fetchPriceSucces,
  fetchPriceFailed,
  setPrice,
} from "../actions/priceActions";

const initialState = {
  products: [
    {
      product: {
        id: 1,
        price: 10,
      },
    },
    {
      product: {
        id: 2,
        price: 20,
      },
    },
  ],
  loading: false,
  error: null,
};

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
