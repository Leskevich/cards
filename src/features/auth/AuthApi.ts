import { instance } from "../../common/instance/instance";
import { AxiosResponse } from "axios";

export const AuthApi = {
  login: (data: loginResponseType) => {
    return instance
      .post<any, AxiosResponse<LoginRequestType>, loginResponseType>("/auth/login", data)
      .then((res) => res.data);
  },
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
