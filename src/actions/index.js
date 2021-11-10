import { appConstants } from "../constants";

export const uploadProduct = (payload) => {
  return {
    type: appConstants.UPLOAD_PRODUCT_SUCCESS,
    payload
  };
};
