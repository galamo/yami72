import { ACTIONS } from "../actions";
import { store } from "../index";
import { getProducts, IProductClient } from "../services/productsService";
function getDispatchStore() {
  return store.dispatch;
}

export async function getProductsAction(category?: string) {
  // 2 console.log(store.getState())
  const dispatch = getDispatchStore();
  // dispatch(setLoginloader(true))
  try {
    const result: Array<IProductClient> = await getProducts(category);
    dispatch(getProductsSuccess(result));
  } catch (ex: any) {
    // dispatch(getCountryError({ message: ex.message }))
  } finally {
    // dispatch(setLoginloader(false))
  }
}

function getProductsSuccess(payload: Array<IProductClient>) {
  return { type: ACTIONS.PRODUCTS.GET_PRODUCTS_SUCCESS, payload };
}
