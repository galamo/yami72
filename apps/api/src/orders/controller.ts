import { orders } from "../data"
export function deleteOrder(id: string) {
    const params = id.split("_")
    const [owner, date] = params
    if (!owner || !date) return
    console.log(owner, date)
    console.log(orders)
    const index = orders.findIndex(order => order.orderOwner === owner && date === order.date)
    if (index === -1) return;
    orders.splice(index, 1)
    return true;

}