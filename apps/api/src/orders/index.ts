import express, { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/", getOrdersHandler)

router.post("/", createOrderHandler)

function getOrdersHandler(req: Request, res: Response, next: NextFunction) {
    res.json(["order1", "order2", "order3"])
}
function createOrderHandler(req: Request, res: Response, next: NextFunction) {

}

export default router;
