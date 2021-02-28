import { SHOPIFY_API_LIST } from "../../types";

export const shopifyList = (state = [], { type, payload }) => {
  switch (type) {
    case SHOPIFY_API_LIST:
      return payload;
    default:
      return state;
  }
};
