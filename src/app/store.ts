import { combineReducers } from "redux";
import { AppReducer } from "./AppReducer";
import thunkMiddleware from "redux-thunk";
import { ProfileReducer } from "../features/profile/ProfileReducer";
import { AuthReducer } from "../features/auth/AuthReducer";
import { configureStore } from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  app: AppReducer,
  profile: ProfileReducer,
  auth: AuthReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type StateType = ReturnType<typeof RootReducer>;
