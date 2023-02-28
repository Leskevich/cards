import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AppReducer } from "./AppReducer";
import thunk from "redux-thunk";
import { ProfileReducer } from "../features/profile/ProfileReducer";
import { AuthReducer } from "../features/auth/AuthReducer";

const RootReducer = combineReducers({
  app: AppReducer,
  profile: ProfileReducer,
  auth: AuthReducer,
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export type StateType = ReturnType<typeof RootReducer>;
