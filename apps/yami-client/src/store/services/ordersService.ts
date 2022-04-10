import { IOrder } from "../asyncFunctions/orders"
import axiosInstance from "./index.axios"
const url = `http://localhost:3500/orders/`

interface IOrders {
    order: string
}


export async function getOrders(): Promise<IOrders> {
    // 3. console.log(store.getState())
    // @ts-ignore
    const { data } = await axiosInstance.get("/orders")
    return data
}

export async function createOrder(payload: IOrder): Promise<any> {
    // 3. console.log(store.getState())
    // @ts-ignore
    const { data } = await axiosInstance.post("/orders", {
        date: payload.reservationDate,
        orderOwner: payload.owner,
        numberOfSeats: payload.numberOfSeats,
        insideOrOutside: payload.insideOrOutside,
    })
    return data
}

