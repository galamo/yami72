import { ACTIONS } from "../actions"


const initialState = {
    isLoading: false
}

export const authReducer = (state: any = initialState, action: { type: string, payload?: any }) => {

    switch (action.type) {
        case ACTIONS.LOGIN.SET_LOADER: {
            return { ...state, isLoading: action.payload }
        }
        default:
            return state
    }
}
