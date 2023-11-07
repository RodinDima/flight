import { createAction } from "@reduxjs/toolkit";

export const fetchProductRequest = createAction("item/fetchProductRequest");
export const fetchProductSuccess = createAction("item/fetchProductSuccess"); // Виправлено ім'я
export const fetchProductFailed = createAction("item/fetchProductFailed"); // Виправлено ім'я
export const setProduct = createAction("item/setProduct");
