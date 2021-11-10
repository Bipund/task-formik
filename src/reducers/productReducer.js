import { appConstants } from "../constants";

export const initialState = {
  products: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload]
      };
    default:
      return state;
  }
};

export default appReducer;
