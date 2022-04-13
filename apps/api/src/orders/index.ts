import express, { Request, Response, NextFunction } from "express"
import { orders } from "../data"
import { deleteOrder, getUserOrders } from "./controller"
import { validateOrderPayload } from "./validations"

const router = express.Router()

router.get("/", getOrdersHandler)

router.post("/", validateOrderPayload, createOrderHandler)
router.delete("/", deleteOrderHandler)

function getOrdersHandler(req: Request, res: Response, next: NextFunction) {
    res.json(getUserOrders((req as any).userData.userName))
}
function createOrderHandler(req: Request, res: Response, next: NextFunction) {
    orders.push({ ...req.body, orderOwner: (req as any)?.userData?.userName })
    console.log(orders)
    res.json({ message: "order created" })
}

function deleteOrderHandler(req: Partial<Request>, res: Response, next: NextFunction) {
    const id = req?.query?.id
    const { userName } = (req as any).userData
    const result = deleteOrder(id as string, userName)
    if (result) return res.json({ message: `Order ${id} Removed` })
    else return res.status(403).json({ message: `Order ${id} was not Removed` })
}

export default router;
