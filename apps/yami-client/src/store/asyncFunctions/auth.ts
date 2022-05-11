import { ACTIONS } from "../actions";
import { store } from "../index";
import {
  changePassword,
  IChangePasswordRequestPayload,
  ILoginPayload,
  login,
} from "../services/authService";
function getDispatchStore() {
  return store.dispatch;
}

export async function loginAction(payload: ILoginPayload) {
  const dispatch = getDispatchStore();
  dispatch(setLoginloader(true));
  try {
    const loginResponse = await login(payload);
    dispatch(loginSuccess(loginResponse));
  } catch (ex: any) {
    // dispatch(getCountryError({ message: ex.message }))
  } finally {
    dispatch(setLoginloader(false));
  }
}

function setLoginloader(payload: boolean) {
  return { type: ACTIONS.LOGIN.SET_LOADER, payload };
}

function loginSuccess(payload: { token: string; message: string }) {
  return { type: ACTIONS.LOGIN.SUCCESS, payload };
}
