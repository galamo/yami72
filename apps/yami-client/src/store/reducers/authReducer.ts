import { ACTIONS } from "../actions"
import { getTokenLS, setTokenLS } from "./helpers/localStorage"


const initialState = {
    isLoading: false,
    token: getTokenLS()
}

export const authReducer = (state: any = initialState, action: { type: string, payload?: any }) => {

    switch (action.type) {
        case ACTIONS.LOGIN.SET_LOADER: {
            return { ...state, isLoading: action.payload }
        }
        case ACTIONS.LOGIN.SUCCESS: {
            setTokenLS(action?.payload?.token)
            return { ...state, token: action?.payload?.token }
        }
        default:
            return state
    }
}


