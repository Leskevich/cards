import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {authAPI, LoginPayloadType} from "../../api/auth-api";
import {setAppStatusAC, setIsInitializedAC} from "../../app/app-reducer";
import {setProfile} from "../profile/profile-reducer";
import {errorResponse} from "../../common/utils/errorResponse/errorResponse";

const initialState = {
    isLoggedIn: true
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        },

    }
})

export const {setIsLoggedIn} = slice.actions
export const authReducer = slice.reducer

//Thunks
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


export const isLoggedInThunk = (data: LoginPayloadType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: "loading"}))
        const res = await authAPI.logIn(data)
        if (!res.data.error) {
            dispatch(setIsLoggedIn({value: true}))
        } else {
            alert("Are you sure about you are programmer?")
        }
    } catch (e: any) {
        errorResponse(e)
    } finally {
        dispatch(setAppStatusAC({status: "idle"}))
    }
}
export const logoutThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC({status: 'loading'}))
        const res = await authAPI.logOut()
        dispatch(setIsLoggedIn({value: false}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    } catch (e: any) {
        errorResponse(e)
    } finally {
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
