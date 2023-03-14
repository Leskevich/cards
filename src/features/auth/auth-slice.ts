import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dispatch} from "redux"
import {authAPI, ForgotPasswordType, LoginPayloadType, RegisterPayloadType, SetNewPasswordType,} from "./auth-api"
import {setAppErrorAC, setAppStatusAC} from "../../app/app-slice"
import {setProfile} from "../Profile/profile-slice"
import {errorNetwork} from "../../common/utils/errorNetwork"
import {forgotPayload} from "../../common/utils/forgotPayload"

const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        isRegister: false,
        isEMail: false,
        email: "",
        isChangePassword: false,
        userID: ''
    },
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
        setUserId: (state, action: PayloadAction<{ UserID: string }>) => {
            state.userID = action.payload.UserID
        }
    },
})

export const {setIsLoggedIn, setIsRegistration, setIsMail, setMail, changePassword, setUserId} = slice.actions
export const authSlice = slice.reducer

//Thunks
export const isAuth = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        const res = await authAPI.me()
        dispatch(setIsLoggedIn({isLoginIn: true}))
        dispatch(setProfile(res.data))
        dispatch(setAppStatusAC({status: "succeeded"}))
        dispatch(setAppErrorAC({error: "Welcome!"}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}
export const registerTC = (data: RegisterPayloadType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.register(data)
        dispatch(setAppStatusAC({status: "succeeded"}))
        dispatch(setIsRegistration({isRegister: true}))
        dispatch(setAppErrorAC({error: "You have registered"}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}
export const login = (data: LoginPayloadType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        const res = await authAPI.login(data)
        dispatch(setProfile(res))
        dispatch(setIsLoggedIn({isLoginIn: true}))
        dispatch(setIsRegistration({isRegister: true}))
        dispatch(setUserId({UserID: res._id}))
        dispatch(setAppStatusAC({status: "succeeded"}))
        dispatch(setAppErrorAC({error: "You are logged in"}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}
export const logoutThunk = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.logOut()
        dispatch(setIsLoggedIn({isLoginIn: false}))
        dispatch(setAppStatusAC({status: "succeeded"}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}
///оитимизировать
export const setNewUserNameThunk = (name: string, avatar?: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: "loading"}))
        const res = await authAPI.setNewUserName({name, avatar})
        dispatch(setProfile(res.data.updatedUser))
    } catch (e) {
        errorNetwork(e, dispatch)
    } finally {
        dispatch(setAppStatusAC({status: "idle"}))
    }
}
//
export const forgot = (email: string) => async (dispatch: Dispatch) => {
    const data: ForgotPasswordType = forgotPayload(email)
    dispatch(setAppStatusAC({status: "loading"}))
    try {
        await authAPI.forgotPassword(data)
        dispatch(setIsMail({isEMail: true}))
        dispatch(setMail({email}))
        dispatch(setAppStatusAC({status: "succeeded"}))
    } catch (e) {
        errorNetwork(e, dispatch)
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
        errorNetwork(e, dispatch)
    }
}
