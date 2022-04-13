
import { ACTIONS } from "../actions"
import { store } from "../index"
import { createOrder, deleteOrder, getOrders } from "../services/ordersService"
function getDispatchStore() {
    return store.dispatch
}

export async function getOrdersAction() {
    // 2 console.log(store.getState())
    const dispatch = getDispatchStore()
    dispatch(setLoginloader(true))
    try {
        const orders: any = await getOrders()
        dispatch(ordersSuccess(orders))
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
        ordersSuccess(orders)
    } catch (ex: any) {
    } finally {
        dispatch(setLoginloader(false))
    }
}

export async function deleteOrderAction(id: string) {
    const dispatch = getDispatchStore()
    try {
        const result: any = await deleteOrder(id)
        _openSuccessModal(result)
    } catch (ex: any) {
    } finally {
        dispatch(setLoginloader(false))
    }
    function _openSuccessModal(result: { message: string }) {
        dispatch({
            type: ACTIONS.MODAL.TOGGLE_MODAL,
            payload: {
                isOpen: true,
                header: "Success", message: result.message
            }
        })
    }

}



function setLoginloader(payload: boolean) {
    return { type: ACTIONS.LOGIN.SET_LOADER, payload }
}

function ordersSuccess(payload: Array<any>) {
    return { type: ACTIONS.ORDERS.GET_ORDERS_SUCCESS, payload }
}