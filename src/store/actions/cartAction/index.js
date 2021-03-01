import {
  SHOPIFY_ADD_CART_LIST,
  SHOPIFY_REMOVE_CART_LIST,
  SHOPIFY_BUY_CART_LIST,
} from "../../types";

export const cartAddListAction = (payload) => (dispatch) => {
  dispatch({
    type: SHOPIFY_ADD_CART_LIST,
    payload,
  });
};

export const cartRemoveListAction = (payload) => (dispatch) => {
  dispatch({
    type: SHOPIFY_REMOVE_CART_LIST,
    payload,
  });
};

export const cartBuyListAction = () => (dispatch) => {
  dispatch({
    type: SHOPIFY_BUY_CART_LIST,
  });
};
