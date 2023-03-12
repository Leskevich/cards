import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {cardsAPI, CardsPackType, PackCardsType} from "./cards-api";
import {Dispatch} from "redux";
import {errorNetwork} from "../../common/utils/errorNetwork";
import {setAppStatusAC, STATUSES} from "../../app/app-slice";
import {AppDispatch} from "../../common/hook/useDispatch";


const packsSlice = createSlice({
    name: "cards",
    initialState: {
        packs: [] as Array<PackCardsType>
    },
    reducers: {
        setPacksAC: (state, action: PayloadAction<Array<PackCardsType>>) => {
            state.packs = action.payload
        },
        updateAC: (state, action: PayloadAction<PackCardsType>) => {
            state.packs = state.packs.map(p => p._id === action.payload._id ? {...p, name: action.payload.name} : p)
        }

    },

})


export const packsReducer = packsSlice.reducer
export const {setPacksAC, updateAC} = packsSlice.actions


export const setPacks = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: STATUSES.loading}))
    try {
        const res = await cardsAPI.getPacksCards()
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

