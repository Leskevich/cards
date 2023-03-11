import {combineReducers} from "redux";
import {appSlice} from "./app-slice";
import {profileReducer} from "../features/Profile/profile-slice";
import {authSlice} from "../features/auth/auth-slice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  app: appSlice,
  profile: profileReducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type StateType = ReturnType<typeof rootReducer>;
