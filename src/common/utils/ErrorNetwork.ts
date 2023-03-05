import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "../../app/AppReducer";

export const ErrorNetwork = (e: any, dispatch: Dispatch) => {
  if (axios.isAxiosError<{ error: string }>(e)) {
    const error = e.response?.data.error ? e.response.data.error : e.message;
    dispatch(setError({ error }));
  }
};
