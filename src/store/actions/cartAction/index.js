import { SHOPIFY_CART_LIST } from "../../types";

export const cartListAction = (payload) => (dispatch) => {
  dispatch({
    type: SHOPIFY_CART_LIST,
    payload,
  });
};
