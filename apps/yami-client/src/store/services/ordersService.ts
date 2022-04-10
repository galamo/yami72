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

