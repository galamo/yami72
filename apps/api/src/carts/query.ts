const getUserCartsQuery = (limit): string => {
  return `
  SELECT 
      id,created_at,status
  FROM
      northwind.carts
  WHERE
      status = ? AND emp_id = ?
  ORDER BY created_at DESC
  LIMIT ${limit}`;
};

const createCartQuery = (): string => {
  return `INSERT INTO northwind.carts (emp_id, status,created_at) VALUES (?,?,?)`;
};

const addProductToCartQuery = (): string => {
  return `INSERT INTO northwind.carts_products (cartId, productId) VALUES (?, ?)`;
};
export { getUserCartsQuery, createCartQuery, addProductToCartQuery };
