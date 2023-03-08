import { combineReducers } from "redux";
import { appSlice } from "./app-slice";
import thunkMiddleware from "redux-thunk";
import { profileReducer } from "../features/Profile/profile-slice";
import { authSlice } from "../features/auth/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  app: appSlice,
  profile: profileReducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type StateType = ReturnType<typeof rootReducer>;
