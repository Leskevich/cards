import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {
    authAPI,
    ForgotPasswordType,
    LoginPayloadType,
    RegisterPayloadType,
    SetNewPasswordType,
} from "../../api/auth-api"
import {setAppErrorAC, setAppStatusAC, setIsInitializedAC} from "../../app/app-slice"
import {setProfile} from "../Profile/profile-slice"
import {ErrorNetwork} from "../../common/utils/ErrorNetworckUtils/ErrorNetwork"
import {ForgotPayload} from "../../common/utils/ForgotPayloadUtils/ForgotPayload"

const initialState = {
    isLoggedIn: false,
    isRegister: false,
    isEMail: false,
    email: "",
    isChangePassword: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsRegistration(state, action: PayloadAction<{ isRegister: boolean }>) {
            state.isRegister = action.payload.isRegister
        },
        setIsLoggedIn(state, action: PayloadAction<{ isLoginIn: boolean }>) {
            state.isLoggedIn = action.payload.isLoginIn
        },
        setIsMail(state, action: PayloadAction<{ isEMail: boolean }>) {
            state.isEMail = action.payload.isEMail
        },
        setMail(state, action: PayloadAction<{ email: string }>) {
            state.email = action.payload.email
        },
        changePassword(state, action: PayloadAction<{ isChangePassword: boolean }>) {
            state.isChangePassword = action.payload.isChangePassword
        },
    },
})

export const {setIsLoggedIn, setIsRegistration, setIsMail, setMail, changePassword} = slice.actions
export const authSlice = slice.reducer

//Thunks
export const isAuth = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        const res = await authAPI.me()
        dispatch(setIsLoggedIn({isLoginIn: true}))
        dispatch(setProfile(res.data))
        dispatch(setAppStatusAC({status: "succeeded"}))
        dispatch(setAppErrorAC({error: "добро пожаловать"}))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    } finally {
        dispatch(setIsInitializedAC({isInitialized: true}))
    }
}
export const registerTC = (data: RegisterPayloadType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.register(data)
        dispatch(setAppStatusAC({status: "succeeded"}))
        dispatch(setIsRegistration({isRegister: true}))
        dispatch(setAppErrorAC({error: "Вы зарегистрировались"}))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    }
}
export const login = (data: LoginPayloadType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        const response = await authAPI.login(data)
        dispatch(setProfile(response))
        dispatch(setIsLoggedIn({isLoginIn: true}))
        dispatch(setIsRegistration({isRegister: true}))
        dispatch(setAppStatusAC({status: "succeeded"}))
        dispatch(setAppErrorAC({error: "Вы зылогинены"}))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    }
}
export const logoutThunk = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.logOut()
        dispatch(setIsLoggedIn({isLoginIn: false}))
        dispatch(setAppStatusAC({status: "succeeded"}))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    }
}
///оитимизировать
export const setNewUserNameThunk = (name: string, avatar?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: "loading"}))
        const res = await authAPI.setNewUserName({name, avatar})
        dispatch(setProfile(res.data.updatedUser))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    } finally {
        dispatch(setAppStatusAC({status: "idle"}))
    }
}
//
export const forgot = (email: string) => async (dispatch: Dispatch) => {
    const data: ForgotPasswordType = ForgotPayload(email)
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.forgotPassword(data)
        dispatch(setIsMail({isEMail: true}))
        dispatch(setMail({email}))
        dispatch(setAppStatusAC({status: "succeeded"}))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    }
}
export const changePasswordTC = (data: SetNewPasswordType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.setNewPassword(data)
        dispatch(changePassword({isChangePassword: true}))
        dispatch(setAppErrorAC({error: "Your password changed"}))
        dispatch(setAppStatusAC({status: "succeeded"}))
    } catch (e) {
        ErrorNetwork(e, dispatch)
    }
}
