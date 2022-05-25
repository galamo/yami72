import express, { Request, Response, NextFunction } from "express";
import { getUserCarts, createCart, addProductToCart } from "./businessLogic";
const router = express.Router();
router.get("/details", getUserCartApi);
router.post("/product", addProductToCartApi);

async function getUserCartApi(req, res, next) {
  try {
    const { userData } = req;
    const { employee_id: empId } = userData;
    if (!empId) return next(new Error("Missing employee"));
    let [currentCart] = await getUserCarts(empId, "open");
    if (Array.isArray(currentCart) && !currentCart.length) {
      const createdDate = new Date();
      const result = await createCart(empId, createdDate);
      currentCart = {
        id: result.insertId,
        created_at: createdDate,
        status: "open",
      };
    }
    return res.json({ currentCart });
  } catch (ex) {
    return next(new Error("getUserCartApi error"));
  }
}

async function addProductToCartApi(req, res, next) {
  // validate params
  // validate cart owner
  try {
    const { cartId, productId } = req.body;
    await addProductToCart(cartId, productId);
    res.json({ message: "ok" });
  } catch (error) {
    return next(new Error("addProductToCartApi error"));
  }
}

export default router;
