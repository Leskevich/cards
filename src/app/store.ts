import {combineReducers} from "redux";
import { appReducer } from "./app-reducer";
import thunk from "redux-thunk";
import {profileReducer} from "../features/profile/profile-reducer";
import { authReducer } from "../features/auth/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  auth: authReducer,
});

// export const _store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})


export type StateType = ReturnType<typeof RootReducer>;
