import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getOrdersAction, deleteOrderAction } from "../../../store/asyncFunctions/orders"
import Order from "../../ui-components/order"
import { CreateOrder } from "./create-order"
import { useDispatch } from "react-redux"


// const ?q=ukraine&apiKey=


export function OrdersPage() {
    const orders = useSelector((state: any) => state.ordersReducer?.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        getOrdersAction()
    }, [])
    return <div className="container">
        <div className="row">
            <h1> Orders page </h1>
            <CreateOrder />
            {Array.isArray(orders) &&
                orders.map((order: any) => <Order {...order}
                    onDeleteOrder={(id: string) => { dispatch(deleteOrderAction(id)) }} />)}
        </div>
    </div>
}


