import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getOrdersAction } from "../../../store/asyncFunctions/orders"
import { CreateOrder } from "./create-order"


// const ?q=ukraine&apiKey=


export function OrdersPage() {
    const orders = useSelector((state: any) => state.ordersReducer?.orders)

    useEffect(() => {
        // 1. get state from relevant reducer
        getOrdersAction()
    })
    return <div className="container">
        <div className="row">
            <h1> Orders page </h1>
            <CreateOrder />
            {Array.isArray(orders) && orders.map((o: string) => <h1>{o}</h1>)}
        </div>
    </div>
}


