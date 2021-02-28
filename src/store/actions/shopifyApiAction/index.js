import { SHOPIFY_API_LIST } from "../../types";
import { shopifyApi } from "../../../services/shopifyApi";

export const getShopifyList = () => async (dispatch) => {
  const payload = await shopifyApi.get();

  dispatch({
    type: SHOPIFY_API_LIST,
    payload,
  });
};
