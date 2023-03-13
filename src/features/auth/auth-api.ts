import {AxiosResponse} from "axios"
import {instance, instanceHeroku} from "../../common/instance/instance"

export const authAPI = {
    register(payload: RegisterPayloadType) {
        return instance.post("auth/register", payload).then((res) => res.data)
    },
    login(payload: LoginPayloadType) {
        return instance.post<any, AxiosResponse<ProfileType>, LoginPayloadType>("auth/login", payload)
            .then((res) => res.data)
    },
    logOut() {
        return instanceHeroku.delete<{ info: string }>("auth/me")
    },
    me() {
        return instance.post("auth/me")
    },
    setNewUserName(payload: UpdateUserType) {
        return instanceHeroku.put<any, AxiosResponse<UpdateResponseUserType>, UpdateUserType>(
            "auth/me",
            payload
        )
    },
    forgotPassword(payload: ForgotPasswordType) {
        return instanceHeroku.post<AxiosResponse<{ info: string }>>("auth/forgot", payload)
    },
    setNewPassword(payload: SetNewPasswordType) {
        return instanceHeroku.post<AxiosResponse<{ info: string }>>(
            "auth/set-new-password",
            payload
        )
    },
}

export type ProfileType = {
    email: string
    name: string
    avatar: string
    _id:string
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
