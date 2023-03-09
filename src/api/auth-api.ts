import { AxiosResponse } from "axios"
import { instance } from "../common/instance/instance"

export const authAPI = {
  register(payload: RegisterPayloadType) {
    return instance.post("https://neko-back.herokuapp.com/2.0/auth/register", payload).then((res) => res.data)
  },
  login(payload: LoginPayloadType) {
    return instance
      .post<any, AxiosResponse<ProfileType>, LoginPayloadType>(
        "https://neko-back.herokuapp.com/2.0/auth/login",
        payload
      )
      .then((res) => res.data)
  },
  logOut() {
    return instance.delete<{ info: string }>("https://neko-back.herokuapp.com/2.0/auth/me")
  },
  me() {
    return instance.post("https://neko-back.herokuapp.com/2.0/auth/me", {})
  },
  setNewUserName(payload: UpdateUserType) {
    return instance.put<any, AxiosResponse<UpdateResponseUserType>, UpdateUserType>(
      "https://neko-back.herokuapp.com/2.0/auth/me",
      payload
    )
  },
  forgotPassword(payload: ForgotPasswordType) {
    return instance.post<AxiosResponse<{ info: string }>>("https://neko-back.herokuapp.com/2.0/auth/forgot", payload)
  },
  setNewPassword(payload: SetNewPasswordType) {
    return instance.post<AxiosResponse<{ info: string }>>(
      "https://neko-back.herokuapp.com/2.0/auth/set-new-password",
      payload
    )
  },
}

type ProfileType = {
  email: string
  name: string
  avatar: string
}
export type RegisterPayloadType = {
  email: string
  password: string
}
export type LoginPayloadType = {
  email: string
  password: string
  rememberMe: boolean
}
export type UpdateUserType = {
  name?: string
  avatar?: string
}
type UpdateResponseUserType = {
  updatedUser: ProfileType
  token: string
  tokenDeathTime: number
}
export type ForgotPasswordType = {
  email: string
  from: string
  message: string
}
export type SetNewPasswordType = {
  password: string
  resetPasswordToken: string | undefined
}
