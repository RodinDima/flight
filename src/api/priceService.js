import {
  fetchProductRequest, // Змінити на правильну дію
  fetchProductSuccess, // Змінити на правильну дію
  fetchProductFailed, // Змінити на правильну дію
  setProduct,
} from "../actions/productActions"; // Переконайтеся, що шлях вірний// Переконайтеся, що шлях вірний// Оновлені дії

import axios from "axios";

export const fetchProductPrice = (productId) => async (dispatch) => {
  dispatch(fetchProductRequest()); // Змінити на відповідну дію для запиту продуктів

  try {
    const response = await axios.get(
      `https://dummyjson.com/products/`
    ); // Оновити URL запиту
    const productData = response.data;

    console.log("data", fetchProductPrice);

    dispatch(fetchProductSuccess(productData)); // Оновити стан з отриманими даними

    // При необхідності, ви можете також оновити ціну конкретного продукту
    if (productData && productData.price) {
      dispatch(setProduct({ productId, newPrice: productData.price }));
    }
  } catch (error) {
    dispatch(fetchProductFailed(error.message));
  }
};
