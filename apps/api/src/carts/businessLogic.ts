import { getConnection } from "../db";
import {
  getUserCartsQuery,
  createCartQuery,
  addProductToCartQuery,
} from "./query";

async function getUserCarts(
  empId: number,
  status: string = "open",
  limit: number = 1
) {
  const query = getUserCartsQuery(limit);
  const [result] = await getConnection().execute(query, [status, empId]);
  return result;
}
async function createCart(empId: number, createdAt: Date) {
  const query = createCartQuery();
  const [result] = await getConnection().execute(query, [
    empId,
    "open",
    createdAt,
  ]);
  return result;
}

async function addProductToCart(cartId: number, productId: number) {
  const query = addProductToCartQuery();
  const [result] = await getConnection().execute(query, [cartId, productId]);
  return result;
}

export { getUserCarts, createCart, addProductToCart };
