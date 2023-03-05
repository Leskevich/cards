import {combineReducers} from "redux";
import { appReducer } from "./AppReducer";
import thunkMiddleware from "redux-thunk";
import { ProfileReducer } from "../features/profile/ProfileReducer";
import { authReducer } from "../features/auth/authReducer";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
  app: appReducer,
  profile: ProfileReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const useAppDispatch:() => AppDispatch=useDispatch
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

export type StateType = ReturnType<typeof rootReducer>;
