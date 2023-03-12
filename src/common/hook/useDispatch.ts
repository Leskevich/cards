import {StateType} from "../../app/store";
import {useDispatch} from "react-redux";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = ThunkDispatch<StateType, any, AnyAction>;
