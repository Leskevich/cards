import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import {authAPI, ForgotPasswordType, loginResponseType, RegisterPayloadType} from "../../api/auth-api";
import { setAppErrorAC, setAppStatusAC, setIsInitializedAC } from "../../app/app-reducer";
import { setProfile } from "../Profile/profile-slice";
import { errorResponse } from "../../common/utils/errorResponse/errorResponse";
import { ErrorNetwork } from "../../common/utils/ErrorNetwork";

const initialState = {
  isLoggedIn: false,
  isRegister: false,
  isEMail: false,
  email: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<{ isLoginIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoginIn;
    },
    setIsRegistration(state, action: PayloadAction<{ isRegister: boolean }>) {
      state.isRegister = action.payload.isRegister;
    },
    setIsMail(state, action: PayloadAction<{ isEMail: boolean }>) {
      state.isEMail = action.payload.isEMail;
    },
    setMail(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
    },
  },
});

export const { setIsLoggedIn, setIsRegistration, setIsMail, setMail } = slice.actions;
export const authSlice = slice.reducer;

//Thunks
export const forgot = (email: string) => async (dispatch: Dispatch) => {
  const data: ForgotPasswordType = {
    email,
    from: "leskevichtema@gmail.com",
    message: `<div style="background-color: lime; padding: 15px">
password recovery link:   
<a href="http://localhost:3000/cards#/newPassword/$token$">link</a>
</div>`,
  };
  try {
    await authAPI.forgotPassword(data);
    dispatch(setIsMail({ isEMail: true }));
    dispatch(setMail({ email }));
  } catch (e) {
    ErrorNetwork(e, dispatch);
  }
};
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
    await authAPI.register(data);
    dispatch(setAppStatusAC({ status: "idle" }));
    dispatch(setIsRegistration({ isRegister: true }));
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
