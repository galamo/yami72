import express, { Request, Response, NextFunction } from "express"
import { orders } from "../data"
import { validateOrderPayload } from "./validations"

const router = express.Router()

router.get("/", getOrdersHandler)

router.post("/", validateOrderPayload, createOrderHandler)

function getOrdersHandler(req: Request, res: Response, next: NextFunction) {
    res.json(orders)
}
function createOrderHandler(req: Request, res: Response, next: NextFunction) {
    orders.push(req.body)
    res.json({ message: "order created" })
}

export default router;
