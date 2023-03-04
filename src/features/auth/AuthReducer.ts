import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";
import {authAPI, LoginPayloadType} from "../../api/auth-api";
import {setAppStatusAC} from "../../app/AppReducer";


const initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    }
})

export const {setIsLoggedIn} = slice.actions
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
