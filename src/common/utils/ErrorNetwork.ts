import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setAppErrorAC } from "../../app/app-reducer";

export const ErrorNetwork = (e: any, dispatch: Dispatch) => {
  if (axios.isAxiosError<{ error: string }>(e)) {
    const error = e.response?.data.error ? e.response.data.error : e.message;
    dispatch(setAppErrorAC({ error }));
  }
};
