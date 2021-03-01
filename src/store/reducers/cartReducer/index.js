import { uniqBy, sortBy } from "lodash";
import { SHOPIFY_ADD_CART_LIST, SHOPIFY_REMOVE_CART_LIST } from "../../types";

export const cartList = (state = [], { type, payload }) => {
  switch (type) {
    case SHOPIFY_ADD_CART_LIST:
      return sortBy(uniqBy([payload, ...state], "id"), ["id"]);
    case SHOPIFY_REMOVE_CART_LIST:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
