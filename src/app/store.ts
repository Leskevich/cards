import {combineReducers} from "redux";
import { appReducer } from "./AppReducer";
import thunk from "redux-thunk";
import { ProfileReducer } from "../features/profile/ProfileReducer";
import { authReducer } from "../features/auth/AuthReducer";
import {configureStore} from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  app: appReducer,
  profile: ProfileReducer,
  auth: authReducer,
});

// export const _store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type StateType = ReturnType<typeof RootReducer>;
