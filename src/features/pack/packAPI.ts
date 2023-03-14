import {instance} from "../../common/instance/instance"
import {AxiosResponse} from "axios";

export const packAPI = {
    getPacksCards: (params: ParamsType) => {
        return instance.get<ResponsePacksType>(`/cards/pack`, {params})
            .then(res => res.data)
    },
    createNewPack: (payload: createPackPayloadType) => {
        return  instance.post<any, AxiosResponse<ResponseUpdatePack>, ResponsePackType<createPackPayloadType>>("/cards/pack", {
            cardsPack: payload
        })
    },
    removePack: (packId: string) => {
        return instance.delete(`/cards/pack?id=${packId}`)
    },
    updatePack: (payload: CardsPackType) => {
        return instance.put<any, AxiosResponse<ResponseUpdatePack>, ResponsePackType<CardsPackType>>("/cards/pack", {cardsPack: payload})
            .then(res => res.data)
    }

}

export type ParamsType = {
    packName?: string
    min?: string
    max?: string
    sortPacks?: string
    page?: string
    pageCount?: string
    user_id?: string
}

export type createPackPayloadType = {
    name: string
    deckCover?: string
    private?: boolean
}

export type CardsPackType = {
    _id: string;
    name: string;
}
export type ResponsePackType<T> = {
    cardsPack: T;
}


export type ResponseUpdatePack = {
    updatedCardsPack: PackCardsType;
    token: string;
    tokenDeathTime: number;
}


export type PackCardsType = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    more_id: string,
    __v: number,
    deckCover: number
}
type ResponsePacksType = {
    cardPacks: PackCardsType[],
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: number
}