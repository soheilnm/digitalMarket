import { createReducer } from "@reduxjs/toolkit";
import { setProducts, setLoading } from "../actions/products";

export const product = createReducer(
  {},
  {
    [setProducts]: (state, { payload }) => payload,
  }
);

export const isLoading = createReducer(
  true,
  {
    [setLoading]: (state, { payload }) => payload,
  }
);
// export function product(state = [], action) {
//   switch (action.type) {
//     case "PRODUCTS":
//       return;
//       action.payload;
//     default:
//       return state;
//   }
// }
