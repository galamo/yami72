
import { ACTIONS } from "../actions"
import { store } from "../index"
import { createOrder, getOrders } from "../services/ordersService"
function getDispatchStore() {
    return store.dispatch
}

export async function getOrdersAction() {
    // 2 console.log(store.getState())
    const dispatch = getDispatchStore()
    dispatch(setLoginloader(true))
    try {
        const orders = await getOrders()
        console.log(orders)
        // dispatch(loginSuccess(loginResponse))
    } catch (ex: any) {
        // dispatch(getCountryError({ message: ex.message }))
    } finally {
        dispatch(setLoginloader(false))
    }
}
export interface IOrder {
    reservationDate: Date,
    numberOfSeats: number,
    owner: string,
    insideOrOutside: string
}
export async function orderAction(order: IOrder) {
    const dispatch = getDispatchStore()
    try {
        const orders = await createOrder(order)
        
    } catch (ex: any) {
    } finally {
        dispatch(setLoginloader(false))
    }
}

function setLoginloader(payload: boolean) {
    return { type: ACTIONS.LOGIN.SET_LOADER, payload }
}

function loginSuccess(payload: { token: string, message: string }) {
    return { type: ACTIONS.LOGIN.SUCCESS, payload }
}