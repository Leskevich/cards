import {combineReducers} from "redux";
import { appReducer } from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import {profileReducer} from "../features/profile/profile-reducer";
import { authReducer } from "../features/auth/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const useAppDispatch:() => AppDispatch=useDispatch
export type AppDispatch = typeof store.dispatch

export type StateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store
