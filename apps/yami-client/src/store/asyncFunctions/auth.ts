
import { ACTIONS } from "../actions"
import { store } from "../index"
import { ILoginPayload, login } from "../services/authService"
function getDispatchStore() {
    return store.dispatch
}

export async function loginAction(payload: ILoginPayload) {
    const dispatch = getDispatchStore()
    dispatch(setLoginloader(true))
    try {
        const loginResponse = await login(payload)
        // dispatch(loginSuccess(currentCountry))
    } catch (ex: any) {
        // dispatch(getCountryError({ message: ex.message }))
    } finally {
        dispatch(setLoginloader(false))
    }
}

function setLoginloader(payload: boolean) {
    return { type: ACTIONS.LOGIN.SET_LOADER, payload }
}