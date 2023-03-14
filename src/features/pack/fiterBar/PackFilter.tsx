import React from 'react';
import {Search} from "../../../common/components/Search/Search";
import style from '../packFilter/PackFilter.module.scss'
import { ToggleButtons } from '../packFilter/ToggleButtons';
import {NumbersOfCard} from "../packFilter/NumbersOfCard";

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