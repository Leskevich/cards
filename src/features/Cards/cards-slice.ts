import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cardsAPI, CardsPackType, PackCardsType, ParamsType} from "./cards-api";
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
            packName: null,
            min: null,
            max: null,
            sortPacks: '',
            page: "1",
            pageCount: "8",
            user_id: null,
        }
    },
    reducers: {
        setPacksAC: (state, action: PayloadAction<Array<PackCardsType>>) => {
            state.packs = action.payload
        },
        updateAC: (state, action: PayloadAction<PackCardsType>) => {
            state.packs = state.packs.map(p => p._id === action.payload._id ? {...p, name: action.payload.name} : p)
        },
        setSortPack: (state, action: PayloadAction<{ sortPack: string }>) => {
            state.params.sortPacks = action.payload.sortPack
        }

    },

})


export const packsReducer = packsSlice.reducer
export const {setPacksAC, updateAC,setSortPack} = packsSlice.actions


export const setPacks = () => async (dispatch: Dispatch, getState: () => StateType) => {

    const params: ParamsType = {...getState().packs.params}
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await cardsAPI.getPacksCards(params)
        dispatch(setPacksAC(res.cardPacks))
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}

export const removePack = (packId: string) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await cardsAPI.removePack(packId)
        dispatch(setPacks())
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}

export const updatePack = (payload: CardsPackType) => async (dispatch: AppDispatch) => {
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await cardsAPI.updatePack(payload)
        dispatch(updateAC(res.updatedCardsPack))
        dispatch(setAppStatusAC({status: STATUSES.succeeded}))
    } catch (e) {
        errorNetwork(e, dispatch)
    }
}

