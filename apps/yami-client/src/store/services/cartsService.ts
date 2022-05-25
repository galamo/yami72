import axiosInstance from "./index.axios";
const url = `/carts/details`;

interface ICart {
  cartId: number;
}

export async function getCartsDetails(): Promise<Array<ICart>> {
  const { data } = await axiosInstance.get(`${url}`);
  return data.currentCart;
}

// export async function getCartsHistroy(
//   category?: string
// ): Promise<Array<IProductClient>> {
//   const categoryQueryParam = category ? `?category=${category}` : "";
//   const { data } = await axiosInstance.get(`${url}${categoryQueryParam}`);
//   const products = data?.products.map((p: IProductServer): IProductClient => {
//     return {
//       productCode: p.product_code,
//       productName: p.product_name,
//       id: p.id,
//       productCost: p.standard_cost,
//       category: p.category,
//     };
//   });
//   return products;
// }
