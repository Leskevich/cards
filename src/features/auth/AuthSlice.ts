import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AuthApi, LoginRequestType, loginResponseType } from "./AuthApi";
import { ErrorNetwork } from "../../common/utils/ErrorNetwork";

const initialState = {
  dataProfile: {} as LoginRequestType,
  isLoginIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<{ isLoginIn: boolean }>) => {
      state.isLoginIn = action.payload.isLoginIn;
    },
  },
});

export const authReducer = authSlice.reducer;
const { setLogin } = authSlice.actions;

export const login = (data: loginResponseType) => async (dispatch: Dispatch) => {
  try {
    const response = await AuthApi.login(data);
    if (response) {
      dispatch(setLogin({ isLoginIn: true }));
    }
  } catch (e) {
    ErrorNetwork(e, dispatch);
  }
};
