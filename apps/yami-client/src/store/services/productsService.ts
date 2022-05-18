import axiosInstance from "./index.axios";
const url = `/products`;

interface IProductServer {
  category: string;
  id: number;
  product_code: string;
  product_name: string;
  standard_cost: string;
}
export interface IProductClient {
  category: string;
  id: number;
  productCode: string;
  productName: string;
  productCost: string;
}

export async function getProducts(
  category?: string
): Promise<Array<IProductClient>> {
  const categoryQueryParam = category ? `?category=${category}` : "";
  const { data } = await axiosInstance.get(`${url}${categoryQueryParam}`);
  const products = data?.products.map((p: IProductServer): IProductClient => {
    return {
      productCode: p.product_code,
      productName: p.product_name,
      id: p.id,
      productCost: p.standard_cost,
      category: p.category,
    };
  });
  return products;
}
