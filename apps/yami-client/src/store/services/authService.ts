import axios from "axios"
const url = `http://localhost:3500/auth/login`
export interface ILoginPayload {
    userName: string,
    password: string
}
export interface ILoginResponse {
    token: string
    message: string
}
export async function login(payload: ILoginPayload): Promise<ILoginResponse> {
    const { data } = await axios.post(url, payload)
    return data
}

