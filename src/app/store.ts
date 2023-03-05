import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { ProfileReducer } from "../features/profile/ProfileReducer";
import { authReducer } from "../features/auth/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./AppReducer";

const RootReducer = combineReducers({
  app: appReducer,
  profile: ProfileReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type StateType = ReturnType<typeof RootReducer>;
