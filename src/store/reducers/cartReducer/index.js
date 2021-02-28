import { uniqBy } from "lodash";
import { SHOPIFY_CART_LIST } from "../../types";

export const cartList = (state = [], { type, payload }) => {
  switch (type) {
    case SHOPIFY_CART_LIST:
      return uniqBy([payload, ...state], "id");
    default:
      return state;
  }
};
