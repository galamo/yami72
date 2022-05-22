import { ACTIONS } from "../actions";

const initialState = {
  products: [],
};

export const productsReducer = (
  state: any = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ACTIONS.PRODUCTS.GET_PRODUCTS_SUCCESS: {
      return { ...state, products: [...action.payload] };
    }
    default:
      return state;
  }
};
