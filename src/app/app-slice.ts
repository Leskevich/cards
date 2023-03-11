import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "app",
    initialState: {
        status: "" as RequestStatusType,
        error: "" as string | null,
        isInitialized: false,
    },
    reducers: {
        setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error;
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status;
        },
        setIsInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized;
        },
    },
});
export const appSlice = slice.reducer;
export const {setAppErrorAC, setAppStatusAC, setIsInitializedAC} = slice.actions;

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

