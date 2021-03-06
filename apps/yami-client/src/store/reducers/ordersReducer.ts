import { ACTIONS } from "../actions"


const initialState = {
    orders: []
}

export const ordersReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case ACTIONS.ORDERS.GET_ORDERS_SUCCESS: {
            return { ...state, orders: [...action.payload] }
        }

        default:
            return state
    }
}
