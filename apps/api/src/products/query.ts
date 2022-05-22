const getProductsQuery = (category?: string): string => {
  return `SELECT 
  id, product_code, product_name, standard_cost, category
FROM
  northwind.products
WHERE
  ${category ? " category like ?" : " 1 = 1"}
`;
};

const getCategoriesQuery = (): string => {
  return `SELECT distinct(category) FROM northwind.products`;
};

const deleteProductByIdQuery = (): string => {
  return `DELETE FROM northwind.products WHERE (id = ?);`;
};

export { getProductsQuery, getCategoriesQuery, deleteProductByIdQuery };
