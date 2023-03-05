import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StateType } from "../../../app/store";

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
