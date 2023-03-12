import React from 'react';
import {Search} from "../../../common/components/Search/Search";
import {NumbersOfCard} from "./NumbersOfCard";
import {ToggleButtons} from "./ToggleButtons";
import style from './PackFilter.module.scss'
import {ResetFilter} from "./ResetFilter";

export const PackFilter = () => {

  return (
    <div className={style.packFilterContainer}>
      <div className={style.search}>
        <Search length={'413px'}/>
      </div>
      <div className={style.toggleButtons}>
        <ToggleButtons/>
      </div>
      <div className={style.rangeSlider}>
        <NumbersOfCard/>
      </div>
      <div className={style.resetFilter}>
        <ResetFilter/>
      </div>
    </div>
  )
}