import {AxiosResponse} from "axios"
import {instanceHeroku} from "../../common/instance/instance"

export const authAPI = {
    register(payload: RegisterPayloadType) {
        return instanceHeroku.post<any,AxiosResponse<ProfileType>,RegisterPayloadType>("auth/register", payload).then((res) => res.data)
    },
    login(payload: LoginPayloadType) {
        return instanceHeroku.post<any, AxiosResponse<ProfileType>, LoginPayloadType>("auth/login", payload)
            .then((res) => res.data)
    },
    logOut() {
        return instanceHeroku.delete<ResponseTypeInfo>("auth/me")
    },
    me() {
        return instanceHeroku.post<ProfileType>("auth/me").then(res=>res.data)
    },
    setNewUserName(payload: UpdateUserType) {
        return instanceHeroku.put<any, AxiosResponse<UpdateResponseUserType>, UpdateUserType>(
            "auth/me",
            payload
        )
    },
    forgotPassword(payload: ForgotPasswordType) {
        return instanceHeroku.post<ResponseTypeInfo>("auth/forgot", payload)
    },
    setNewPassword(payload: SetNewPasswordType) {
        return instanceHeroku.post<ResponseTypeInfo>(
            "auth/set-new-password",
            payload
        )
    },
}

export type ResponseTypeInfo = {
    info: string
    error: string;
}
export type ProfileType = {
    email: string
    name: string
    avatar: string|null
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
