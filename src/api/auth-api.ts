import {AxiosResponse} from "axios";
import {instance} from "../common/instance/instance";

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
    return instance.post<AxiosResponse<RegisterResponseType>>("auth/register", payload);
  },

};
//тип для регистр
// <any, AxiosResponse<registerResponseType>, RegisterPayloadType>
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
