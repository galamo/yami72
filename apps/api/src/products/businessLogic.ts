import { getConnection } from "../db";
import { getProductsQuery, getCategoriesQuery } from "./query";

async function getProducts(category: string) {
  const query = getProductsQuery(category);
  console.log(query);
  const params = category ? [`%${category}%`] : null;
  const [result] = await getConnection().execute(query, params);
  return result;
}

async function getCategories() {
  const query = getCategoriesQuery();
  console.log(query);
  const [result] = await getConnection().execute(query);
  return result;
}

export { getProducts, getCategories };
