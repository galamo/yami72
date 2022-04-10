import axios, { AxiosError } from "axios"
import { getTokenLS } from "../reducers/helpers/localStorage"

const axiosInstance: any = axios.create({ baseURL: "http://localhost:3500" })
axiosInstance.interceptors.request.use((request: any) => {
    console.log("On every request sent to server!")
    request.headers.authorization = getToken()
    return request;
})

axiosInstance.interceptors.response.use((request: any) => {
    console.log("On every request sent to server!")
    request.headers.authorization = getToken()
    return request;
}, (error: AxiosError) => {
    
    console.log("On every error response")
})


function getToken() {
    return getTokenLS()
}
export default axiosInstance


