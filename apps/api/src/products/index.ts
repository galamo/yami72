import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", getProductsHandler);

async function getProductsHandler(req, res, next) {
  res.json({ message: "ok" });
}

export default router;
