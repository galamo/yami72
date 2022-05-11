import axios from "axios";
import axiosInstance from "./index.axios";
const baseUrl = `http://localhost:3500/auth`;
const loginUrl = `${baseUrl}/login`;
const changePasswordUrl = `auth/change-password`;

export interface ILoginPayload {
  userName: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  message: string;
}
export async function login(payload: ILoginPayload): Promise<ILoginResponse> {
  const { data } = await axios.post(loginUrl, payload);
  return data;
}

export interface IChangePasswordRequestPayload {
  token: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface IChangePasswordResponsePayload {
  message: string;
}

export async function changePassword(
  payload: IChangePasswordRequestPayload
): Promise<string> {
  const { data } = await axiosInstance.post(changePasswordUrl, payload);
  return data;
}
