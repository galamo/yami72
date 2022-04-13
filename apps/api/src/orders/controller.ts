import { orders } from "../data"
export function deleteOrder(id: string, userName: string) {
    const params = id.split("_")
    const [owner, date] = params
    if (!owner || !date) return
    console.log(userName)
    const index = getUserOrders(userName).findIndex(order => order.orderOwner === owner && date === order.date)
    console.log(index)
    if (index === -1) return;
    orders.splice(index, 1)
    return true;
}

export function getUserOrders(userName: string) {
    return orders.filter(order => order.orderOwner === userName)
}
// 