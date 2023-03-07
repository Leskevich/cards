import axios, { AxiosResponse } from "axios";
import { instance } from "../common/instance/instance";

export const authAPI = {
  login(payload: loginResponseType) {
    return instance
      .post<any, AxiosResponse<LoginRequestType>, loginResponseType>("auth/login", payload)
      .then((res) => res.data);
  },
  logOut() {
    return instance.delete<{ info: string; error: string }>("auth/me");
  },
  me() {
    return instance.post<LoginRequestType>("auth/me", {});
  },
  setNewUserName(name: string) {
    return instance.put<any, AxiosResponse<UpdateResponseUserType>, ChangeNameAvatarType>("auth/me", {name});
  },
  register(payload: RegisterPayloadType) {
    return instance.post<any, AxiosResponse<RegisterResponseType>, RegisterPayloadType>("auth/register", payload)
      .then((res) => res.data);
    return instance.post<any, AxiosResponse<registerResponseType>, RegisterPayloadType>("auth/register", payload);
  },
  forgotPassword(data: forgotPasswordType) {
    return axios.post("https://neko-back.herokuapp.com/2.0/auth/forgot", data);
  },
};

export type ForgotPasswordType = {
  email: string;
  from: string;
  message: string;
};
export type ChangeNameAvatarType = {
  name: string;
  avatar?: string;
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

type UserType = {
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
};
type registerResponseType = {
  addedUser: UserType;
};

type RegisterResponseType = {
  addedUser: UserType;
  error?: string
};
export type LoginRequestType = UserType & {
  token: string;
  tokenDeathTime: number;
  avatar: string;
};
type UpdateResponseUserType = {
  updatedUser: LoginRequestType;
  token: string;
  tokenDeathTime: number;
};
