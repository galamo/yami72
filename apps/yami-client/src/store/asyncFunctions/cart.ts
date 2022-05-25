import { ACTIONS } from "../actions";
import { store } from "../index";
import { getCartsDetails } from "../services/cartsService";
function getDispatchStore() {
  return store.dispatch;
}

export async function getCartDetailsAction() {
  const dispatch = getDispatchStore();
  try {
    const result: Array<any> = await getCartsDetails();
    dispatch(getCartDetailsSuccess(result));
  } catch (ex: any) {
  } finally {
  }
}

function getCartDetailsSuccess(payload: any) {
  return { type: ACTIONS.CARTS.GET_CARTS_SUCCESS, payload };
}
