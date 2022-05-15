const getProductsQuery = (category?: string): string => {
  return `SELECT 
  id, product_code, product_name, standard_cost, category
FROM
  northwind.products
WHERE
  ${category ? " category like ?" : " 1 = 1"}
`;
};

export { getProductsQuery };
