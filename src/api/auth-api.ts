import { AxiosResponse } from "axios";
import { instance } from "../common/instance/instance";

export const authAPI = {
  login(payload: loginResponseType) {
    return instance
      .post<any, AxiosResponse<LoginRequestType>, loginResponseType>("https://neko-back.herokuapp.com/2.0/auth/login", payload)
      .then((res) => res.data);
  },
  logOut() {
    return instance.delete<{ info: string; error: string }>("https://neko-back.herokuapp.com/2.0/auth/me");
  },
  me() {

    return instance.post<LoginRequestType>("https://neko-back.herokuapp.com/2.0/auth/me", {});
  },
  setNewUserName(name: string, avatar?: string) {
    return instance.put<any, AxiosResponse<UpdateResponseUserType>, ChangeNameAvatarType>("https://neko-back.herokuapp.com/2.0/auth/me", {name, avatar});
  },
  register(payload: RegisterPayloadType) {
    return instance.post<any, AxiosResponse<RegisterResponseType>, RegisterPayloadType>("https://neko-back.herokuapp.com/2.0/auth/register", payload)
      .then((res) => res.data);
  },
  forgotPassword(data: ForgotPasswordType) {
    return instance.post("https://neko-back.herokuapp.com/2.0/auth/forgot", data);
  },
  setNewPassword(data: SetNewPasswordType){
    return instance.post<AxiosResponse<{info: string, error: string}>>("https://neko-back.herokuapp.com/2.0/auth/set-new-password", data)
  }
};

export type SetNewPasswordType = {
  password: string,
  resetPasswordToken: string | undefined
}
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

export type UserType = {
  _id?: string;
  email: string;
  rememberMe?: boolean;
  isAdmin?: boolean;
  name: string;
  verified?: boolean;
  publicCardPacksCount?: number;
  created?: string;
  updated?: string;
  __v?: number;
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
