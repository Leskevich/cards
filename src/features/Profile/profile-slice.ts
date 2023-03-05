import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import defaultAvatar from "../../assets/img/default-avatar.png";

type InitialStateType = {
  name: string;
  avatar: string;
  email: string;
};

const initialState = {
  name: "Some Name",
  avatar: defaultAvatar,
  email: "user_email@gmail.com",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<InitialStateType>) {
      return (state = action.payload);
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
