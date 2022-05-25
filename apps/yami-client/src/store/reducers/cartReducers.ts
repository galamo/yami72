import { ACTIONS } from "../actions";

const initialState = {
  currentCart: {},
};

export const cartReducers = (
  state: any = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ACTIONS.CARTS.GET_CARTS_SUCCESS: {
      return { ...state, currentCart: action.payload };
    }
    default:
      return state;
  }
};
