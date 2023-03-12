import {instance} from "../../common/instance/instance"
import {AxiosResponse} from "axios";

export const cardsAPI = {
    getPacksCards: () => {
        const params = {
            packName: null,
            min: null,
            max: null,
            sortPacks: null,
            page: 1,
            pageCount: 8,
            user_id: "6400c86b1b8b2e36c43f9fd2",
        }
        return instance.get<ResponsePacksType>(`/cards/pack`, {params})
            .then(res => res.data)
    },
    removePack: (packId: string) => {
        return instance.delete(`/cards/pack?id=${packId}`)
    },
    updatePack: (payload: CardsPackType) => {
        return instance.put<any, AxiosResponse<ResponseUpdatePack>, UpdatePackType>("/cards/pack", {cardsPack: payload})
            .then(res=>res.data)
    }

}
export type CardsPackType = {
    _id: string;
    name: string;
}

export type UpdatePackType = {
    cardsPack: CardsPackType;
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