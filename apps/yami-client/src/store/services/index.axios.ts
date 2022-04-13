import axios, { AxiosError } from "axios"
import { getTokenLS } from "../reducers/helpers/localStorage"
import { store } from "../index"
import { ACTIONS } from "../actions"
const { dispatch } = store
const axiosInstance: any = axios.create({ baseURL: "http://localhost:3500" })
axiosInstance.interceptors.request.use((request: any) => {
    console.log("On every request sent to server!")
    request.headers.authorization = getToken()
    return request;
})

axiosInstance.interceptors.response.use((response: any) => {
    console.log("On every response from  server!")
    return response;
}, (error: AxiosError) => {
    openModalError()
    console.log("On every error response")
})

function openModalError() {
    dispatch({
        type: ACTIONS.MODAL.TOGGLE_MODAL,
        payload: {
            isOpen: true,
            header: "Error", message: "Something went wrong! Please contact Adina"
        }
    })
}

function getToken() {
    return getTokenLS()
}
export default axiosInstance



