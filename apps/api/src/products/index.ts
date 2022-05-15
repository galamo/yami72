import express, { Request, Response, NextFunction } from "express";
import { getProducts } from "./businessLogic";

const router = express.Router();

router.get("/", getProductsHandler);

async function getProductsHandler(req, res, next) {
  const results = await getProducts(req.query.category);
  res.json({ message: "ok", data: results });
}

export default router;
