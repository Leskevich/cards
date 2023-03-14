import {instance} from "../../../common/instance/instance";
import {PackFilter} from "./PackFilter";

export const packsAPI = {
  getPacksCards: async (data: ParamsType) => {
    const response = await instance.get<ResponsePacksType>(`/cards/pack`,{
      params: {
        ...data,
        packName: data.packName || null,
        user_id: data.user_id || null,
      }
    })
    return response.data;
  }
}

export type ParamsType = {
  packName: string | null
  min: number | null
  max: number | null
  sortPacks: string
  //page: string | null
  pageCount: string | null
  user_id: string | null
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