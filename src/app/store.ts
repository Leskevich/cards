import {AnyAction, combineReducers} from "redux";
import { appReducer } from "./AppReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import { ProfileReducer } from "../features/profile/ProfileReducer";
import { authReducer } from "../features/auth/authReducer";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

const RootReducer = combineReducers({
  app: appReducer,
  profile: ProfileReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const useAppDispatch:() => AppDispatch=useDispatch
export type AppDispatch = typeof store.dispatch
// export type AppThunkDispatch = ThunkDispatch<StateType, unknown, AnyAction>

export type StateType = ReturnType<typeof RootReducer>;
