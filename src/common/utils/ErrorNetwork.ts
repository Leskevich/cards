import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { setAppErrorAC } from "../../app/app-reducer";

export const ErrorNetwork = (e:any, dispatch: Dispatch) => {
  //уточнить типизацию на уроке
  const err = e as Error | AxiosError<{ error: string }>;
  if (axios.isAxiosError(err)) {
    const error = err.response?.data.error ? err.response.data.error : err.message;
    dispatch(setAppErrorAC({ error }));
  }
};
