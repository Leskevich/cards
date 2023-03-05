import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {authAPI, LoginPayloadType, RegisterPayloadType} from "../../api/auth-api";
import {setAppErrorAC, setAppStatusAC, setIsInitializedAC} from "../../app/app-reducer";
import {setProfile} from "../profile/profile-reducer";
import {errorResponse} from "../../common/utils/errorResponse/errorResponse";


const initialState = {
    isLoggedIn: false,
    isRegister: false
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        },
        setIsRegistration(state, action: PayloadAction<{ value: boolean }>) {
            state.isRegister = action.payload.value
        }
    },

})

export const {setIsLoggedIn, setIsRegistration} = slice.actions
export const authReducer = slice.reducer


//Thunks
export const isLoggedInThunk = (data: LoginPayloadType)  => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: "loading"}))
        const res = await authAPI.logIn(data)
        if (!res.data.error) {
            dispatch(setIsLoggedIn({value: true}))
        } else {
            alert("Are you sure about you are programmer?")
        }
    } catch (e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
        alert(error)
    }finally {
        dispatch(setAppStatusAC({status: "idle"}))
    }
}
export const logoutThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status:'loading'}))
        const res = await authAPI.logOut()
        if (!res.data.error) {
            dispatch(setIsLoggedIn({value: false}))
            dispatch(setAppStatusAC({status:'succeeded'}))
        } else {
            alert("Are you sure about you are programmer?")
        }
    } catch (e: any) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
        alert(error)
    }finally {
        dispatch(setAppStatusAC({status: "idle"}))
    }
}
export const registerTC = (data: RegisterPayloadType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: 'loading'}))
        const res = await authAPI.register(data)
        if (!res.data.error){
            dispatch(setIsRegistration({value: true}))
        } else {
            alert('здесь будет handleServerAppError')
        }
    }
    catch (e: any){
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
        dispatch(setAppErrorAC({error: error}))
    }
    finally {
        dispatch(setAppStatusAC({status: "idle"}))
    }
}
export const setNewUserNameThunk = (title: string) => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.setNewUserName(title)
        dispatch(setProfile(res.data.updatedUser))
    } catch (e: any) {
        errorResponse(e)
    }
}
export const isAuth = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: "loading"}))
        const res = await authAPI.me()
        dispatch(setIsLoggedIn({value: true}))
        dispatch(setProfile(res.data))
    } catch (e: any) {
        errorResponse(e)
    } finally {
        dispatch(setAppStatusAC({status: "idle"}))
        dispatch(setIsInitializedAC({isInitialized: true}))
    }
}

export type setIsLoggedInResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number// количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean// подтвердил ли почту
    rememberMe: boolean

    error?: string
}