import { createAction } from "@reduxjs/toolkit";


export const fetchPriceRequest = createAction("item/fetchPriceRequest");

export const fetchPriceSucces = createAction("item/fetchPriceSucces");

export const fetchPriceFailed = createAction("item/fetchPriceFailed");


export const setPrice = createAction("item/setPrice");

