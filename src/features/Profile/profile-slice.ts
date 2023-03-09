import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import defaultAvatar from "../../assets/img/default-avatar.png"
import { ProfileType } from "../../api/auth-api"

const initialState = {
  profile: {
    name: "",
    avatar: defaultAvatar,
    email: "",
  },
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileType>) {
      state.profile = action.payload
    },
  },
})

export const { setProfile } = profileSlice.actions

export const profileReducer = profileSlice.reducer
