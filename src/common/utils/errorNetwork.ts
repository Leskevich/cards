import { Dispatch } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { setAppErrorAC, setAppStatusAC } from "../../app/app-slice"

export const errorNetwork = (e: any, dispatch: Dispatch) => {
  //уточнить типизацию на уроке
  const err = e as Error | AxiosError<{ error: string }>
  if (axios.isAxiosError(err)) {
    const error = err.response?.data.error ? err.response.data.error : err.message
    dispatch(setAppErrorAC({ error }))
  } else {
    dispatch(
      setAppErrorAC({
        error: `Native error ${err.message}`,
      })
    )
  }
  dispatch(setAppStatusAC({ status: "failed" }))
}
