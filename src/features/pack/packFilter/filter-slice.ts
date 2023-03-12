import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState = {
  search: '',
  userId: '',
  min: 2,
  max: 10
}

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    clear(){return initialState},
    setValueFilter(state, action: PayloadAction<{[key: string]: string | number}>){
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const filterReducer = slice.reducer
export const {clear, setValueFilter} = slice.actions