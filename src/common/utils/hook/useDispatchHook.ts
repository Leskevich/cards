import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { StateType } from "../../../app/store";
import { useDispatch } from "react-redux";

export type AppThunkDispatch = ThunkDispatch<StateType, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
