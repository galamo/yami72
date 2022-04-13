import { ACTIONS } from "../actions"

interface IInitialState {
    message: string,
    isOpen: boolean,
    header: string
}
const initialState: IInitialState = {
    message: "",
    header: "",
    isOpen: false
}

export const modalReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case ACTIONS.MODAL.TOGGLE_MODAL: {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}
