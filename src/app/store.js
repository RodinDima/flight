import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import priceReducer from "../reducers/priceReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: priceReducer,
  },
});
