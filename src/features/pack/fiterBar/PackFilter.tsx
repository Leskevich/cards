import React from 'react';
import {Search} from "../../../common/components/Search/Search";
import style from './PackFilter.module.scss'
import { ToggleButtons } from './ButtonSornPack/ToggleButtons';
import {NumbersOfCard} from "./CoutPacksSort/NumbersOfCard";

export type PackFilter = {
    search: string
}

export const PackFilter = () => {
    return (
        <div className={style.search}>
            <Search/>
            <ToggleButtons/>
            <NumbersOfCard />
            {/*<ResetFilter/>*/}
        </div>
)
}