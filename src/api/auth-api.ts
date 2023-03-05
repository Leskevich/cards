import axios from "axios";
import { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7542/2.0/",
  withCredentials: true,
});

export const authAPI = {
  login(payload: loginResponseType) {
    return instance
      .post<any, AxiosResponse<LoginRequestType>, loginResponseType>("auth/login", payload)
      .then((res) => res.data);
  },
  logOut() {
    return instance.delete("auth/me", {});
  },
  me() {
    return instance.post("auth/me", {});
  },
  setNewUserName(title: string) {
    return instance.put("auth/me", { name: title });
  },
  register(payload: RegisterPayloadType) {
    return instance.post("auth/register", payload);
  },
};

export type RegisterPayloadType = {
  email: string;
  password: string;
};

export type loginResponseType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type LoginRequestType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
  avatar: string;
};
