import {
  fetchPriceRequest,
  fetchPriceSucces,
  fetchPriceFailed,
} from "../actions/priceActions";

import axios from "axios";


export const fetchProductPrice = (productId) => async (dispatch) => {
  dispatch(fetchPriceRequest());

  try {

      const response = await axios.get("https://dummyjson.com/products/1");
      console.log("test55555", response);
   
      const data = response.data;
      
      console.log("Testdata", data)

    dispatch(fetchPriceSucces(data.price));
  } catch (error) {
    dispatch(fetchPriceFailed(error.message));
  }
};