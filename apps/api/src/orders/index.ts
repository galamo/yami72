import express, { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/", getOrdersHandler)

router.post("/", createOrderHandler)

function getOrdersHandler(req: Request, res: Response, next: NextFunction) {

}
function createOrderHandler(req: Request, res: Response, next: NextFunction) {

}
