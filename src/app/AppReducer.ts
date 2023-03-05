import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  error: "" as string | null,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { setError } = appSlice.actions;
