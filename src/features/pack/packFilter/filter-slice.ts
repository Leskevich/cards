import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Dispatch} from "redux";
import {packsAPI, ParamsType} from "./packs-api";
import {PackFilter} from "./PackFilter";
import {setPacksAC} from "../cards-slice";

const initialState = {
  packName: '',
  user_id: localStorage.getItem('userId') || '',
  min: 2,
  max: 10,
  sortPacks: '0updated',
  pageCount: '8'
}

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setValueFilter(state, action: PayloadAction<{[key: string]: string | number}>){
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const getPacksTC = (values: ParamsType) => async (dispatch: Dispatch) => {
  const response = await packsAPI.getPacksCards(values);
  dispatch(setPacksAC(response.cardPacks))
}

export const filterReducer = slice.reducer
export const {setValueFilter} = slice.actions