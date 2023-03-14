import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {packAPI, CardsPackType, createPackPayloadType, PackCardsType, ParamsType} from "./packAPI";
import {Dispatch} from "redux";
import {errorNetwork} from "../../common/utils/errorNetwork";
import {setAppStatusAC, STATUSES} from "../../app/app-slice";
import {AppDispatch} from "../../common/hook/useDispatch";
import {StateType} from "../../app/store";


const packsSlice = createSlice({
    name: "cards",
    initialState: {
        packs: [] as Array<PackCardsType>,
        params: {
            packName: '',
            min: '0',
            max: '100',
            sortPacks: '',
            page: "3",
            pageCount: "8",
            user_id: "",
        }
    },
    reducers: {
        setPacksAC: (state, action: PayloadAction<Array<PackCardsType>>) => {
            state.packs = action.payload
        },
        updateAC: (state, action: PayloadAction<PackCardsType>) => {
            state.packs = state.packs.map(p => p._id === action.payload._id ? {...p, name: action.payload.name} : p)
        },
        setParams: (state, action: PayloadAction<ParamsType>) => {
            state.params = {...state.params, ...action.payload}
        }
    },

})


export const packsReducer = packsSlice.reducer
export const {setPacksAC, setParams} = packsSlice.actions


export const setPacks = () => async (dispatch: Dispatch, getState: () => StateType) => {
    const params: ParamsType = {...getState().packs.params}
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await packAPI.getPacksCards(params)
        dispatch(setPacksAC(res.cardPacks))
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}
export const createNewPack = (payload: createPackPayloadType) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await packAPI.createNewPack(payload)
        dispatch(setPacks())
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}
export const removePack = (packId: string) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await packAPI.removePack(packId)
        dispatch(setPacks())
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}

export const updatePack = (payload: CardsPackType) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await packAPI.updatePack(payload)
        dispatch(setPacks())
        // dispatch(updateAC(res.updatedCardsPack))
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}

