import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { authAPI, loginResponseType, RegisterPayloadType } from "../../api/auth-api";
import { setAppErrorAC, setAppStatusAC, setIsInitializedAC } from "../../app/app-reducer";
import { setProfile } from "../Profile/profile-slice";
import { errorResponse } from "../../common/utils/errorResponse/errorResponse";
import { ErrorNetwork } from "../../common/utils/ErrorNetwork";

const initialState = {
  isLoggedIn: false,
  isRegister: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoginIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoginIn;
    },
    setIsRegistration(state, action: PayloadAction<{ value: boolean }>) {
      state.isRegister = action.payload.value;
    },
  },
});

export const { setIsLoggedIn, setIsRegistration } = slice.actions;
export const authSlice = slice.reducer;

//Thunks
export const login = (data: loginResponseType) => async (dispatch: Dispatch) => {
  try {
    const response = await authAPI.login(data);
    if (response) {
      dispatch(setIsLoggedIn({ isLoginIn: true }));
    }
  } catch (e) {
    ErrorNetwork(e, dispatch);
  }
};
export const logoutThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatusAC({ status: "loading" }));
    const res = await authAPI.logOut();
    if (!res.data.error) {
      dispatch(setIsLoggedIn({ isLoginIn: false }));
      dispatch(setAppStatusAC({ status: "succeeded" }));
    } else {
      alert("Are you sure about you are programmer?");
    }
  } catch (e: any) {
    const error = e.response ? e.response.data.error : e.message + ", more details in the console";
    alert(error);
  } finally {
    dispatch(setAppStatusAC({ status: "idle" }));
  }
};
export const registerTC = (data: RegisterPayloadType) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatusAC({ status: "loading" }));
    const res = await authAPI.register(data);
    // if (!res.error) {
    dispatch(setIsRegistration({ value: true }));
    // } else {
    alert("здесь будет handleServerAppError");
    // }
  } catch (e: any) {
    const error = e.response ? e.response.data.error : e.message + ", more details in the console";
    dispatch(setAppErrorAC({ error: error }));
  } finally {
    dispatch(setAppStatusAC({ status: "idle" }));
  }
};
export const setNewUserNameThunk = (title: string) => async (dispatch: Dispatch) => {
  try {
    const res = await authAPI.setNewUserName(title);
    dispatch(setProfile(res.data.updatedUser));
  } catch (e: any) {
    errorResponse(e);
  }
};
export const isAuth = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatusAC({ status: "loading" }));
    const res = await authAPI.me();
    dispatch(setIsLoggedIn({ isLoginIn: true }));
    dispatch(setProfile(res.data));
  } catch (e: any) {
    errorResponse(e);
  } finally {
    dispatch(setAppStatusAC({ status: "idle" }));
    dispatch(setIsInitializedAC({ isInitialized: true }));
  }
};
