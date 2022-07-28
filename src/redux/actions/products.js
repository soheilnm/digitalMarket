import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const setProducts = createAction("PRODUCTS");
export const setLoading = createAction("ISLOADING");
// export function setProducts(payload) {
//   return {
//     type: "PRODUCTS",
//     payload,
//   };
// }

// export function setLoading () {
//     return {
//         type:"ISLOADING",
//     }
// }

export function getProducts() {
  return (dispatch, getstate) => {
    dispatch(setLoading(true));
    axios("/v1/")
      .then(({ data }) => dispatch(setProducts(data.data)))
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
//
