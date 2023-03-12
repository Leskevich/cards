import React from 'react';
import {Search} from "../../../common/components/Search/Search";
import {NumbersOfCard} from "./NumbersOfCard";
import {ToggleButtons} from "./ToggleButtons";
import style from './PackFilter.module.scss'
import {ResetFilter} from "./ResetFilter";
import {SubmitHandler, useForm, Controller} from "react-hook-form";

type PackFilter = {
  search: string;
  userId: string;
  range: Array<number>;
}

export const PackFilter = () => {
  const {control, handleSubmit} = useForm<PackFilter>({
    mode: "onSubmit"
  });


  const onSubmit: SubmitHandler<PackFilter> = (data) => {
    console.log(data)
    // dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.packFilterContainer}>
        <div className={style.search}>
          <Controller
            name={'search'}
            control={control}
            render={({field}) => (
              <Search {...field} length={'413px'}/>
            )}
          />
        </div>

        <div className={style.toggleButtons}>
          <ToggleButtons/>
        </div>
        <div className={style.rangeSlider}>
          <Controller
            name={'range'}
            control={control}
            render={({field}) => <NumbersOfCard field={field} />}
          />
        </div>
        <div className={style.resetFilter}>
          <ResetFilter/>
        </div>
      </div>
      <button type={'submit'} >GO</button>
    </form>

  )
}