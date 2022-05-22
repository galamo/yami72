import express, { Request, Response, NextFunction } from "express";
import { getProducts, getCategories } from "./businessLogic";

const router = express.Router();

router.get("/", getProductsHandler);
router.get("/categories", getCategoriesHandler);

async function getProductsHandler(req, res, next) {
  const results = await getProducts(req.query.category);
  res.json({ message: "ok", products: results });
}

async function getCategoriesHandler(req, res, next) {
  const results = await getCategories();
  res.json({ message: "ok", categories: results });
}

export default router;
