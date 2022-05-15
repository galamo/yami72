const getProductsQuery = (params: any): string => {
  return `SELECT 
    id, product_code, product_name, standard_cost, category
        FROM
    northwind.products;
`;
};

export { getProductsQuery };
