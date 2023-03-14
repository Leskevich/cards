import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dispatch} from "redux";
import {packsAPI} from "./packs-api";
import {PackFilter} from "./PackFilter";
import {setPacksAC} from "../cards-slice";

const initialState = {
  packName: '',
  userId: '',
  min: 2,
  max: 10,
  sortPack: 0,
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

export const getPacksTC = (values: PackFilter) => async (dispatch: Dispatch) => {
  const response = await packsAPI.getPacksCards(values);
  console.log(values)
  console.log(response)
  dispatch(setPacksAC(response.cardPacks))
}

export const filterReducer = slice.reducer
export const {clear, setValueFilter} = slice.actions