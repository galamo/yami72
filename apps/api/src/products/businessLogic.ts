import { getConnection } from "../db";
import { getProductsQuery } from "./query";

async function getProducts(category: string) {
  const query = getProductsQuery(category);
  console.log(query);
  const params = category ? [category] : null;
  const [result] = await getConnection().execute(query, params);
  return result;
}

export { getProducts };
