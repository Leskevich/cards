import { combineReducers } from "redux";
import { appReducer } from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { profileReducer } from "../features/Profile/profile-reducer";
import { authSlice } from "../features/auth/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type StateType = ReturnType<typeof rootReducer>;
