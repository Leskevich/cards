import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import defaultAvatar from "../../assets/img/default-avatar.png"
import {ProfileType} from "../auth/auth-api"

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: {
            name: '' as string ,
            avatar: defaultAvatar as string | null,
            email: "",
        },
    },
    reducers: {
        setProfile(state, action: PayloadAction<ProfileType>) {
            state.profile = action.payload
        },
    },
})

export const {setProfile} = profileSlice.actions

export const profileReducer = profileSlice.reducer
