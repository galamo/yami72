import { ACTIONS } from "../actions";
import { getTokenLS, setTokenLS, clearTokenLS } from "./helpers/localStorage";

const initialState = {
  isLoading: false,
  token: getTokenLS(),
  isRedirectToLogin: false,
};

export const authReducer = (
  state: any = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ACTIONS.LOGIN.SET_LOADER: {
      return { ...state, isLoading: action.payload };
    }
    case ACTIONS.LOGIN.SUCCESS: {
      setTokenLS(action?.payload?.token);
      return { ...state, token: action?.payload?.token };
    }

    case ACTIONS.CHANGE_PASSWORD.CLEAR: {
      console.log("ACTIONS.CHANGE_PASSWORD.CLEAR");
      clearTokenLS(state.token);
      return { ...state, token: null };
    }

    default:
      return state;
  }
};
