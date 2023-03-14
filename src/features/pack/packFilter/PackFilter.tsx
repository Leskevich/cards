import React, {useEffect} from 'react';
import {Search} from "../../../common/components/Search/Search";
import {NumbersOfCard} from "./NumbersOfCard";
import {ToggleButtons} from "./ToggleButtons";
import style from './PackFilter.module.scss'
import {ResetFilter} from "./ResetFilter";
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {useAppSelector} from "../../../common/hook/useSelect";
import {selectFilter} from "../../../common/selectors/selectors";
import {useAppDispatch} from "../../../common/hook/useDispatch";
import {getPacksTC, setValueFilter} from "./filter-slice";
import { useSearchParams } from "react-router-dom";

export type PackFilter = {
  packName: string;
  userId: string;
  range: Array<number>;
  //sortpack
}

export const PackFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter)
  let [searchParams, setSearchParams] = useSearchParams();

  const {control, handleSubmit, watch, getValues} = useForm<PackFilter>({
    defaultValues: {
      packName: filter.packName,
      userId: filter.userId,
      range: [filter.min, filter.max],
      // sortPack: filter.sortPack,
    },
    mode: "onSubmit"
  });


  const onSubmit: SubmitHandler<PackFilter> = (data) => {
    dispatch(getPacksTC(data));
    dispatch(setValueFilter({
      packName: data.packName,
      userId: data.userId,
      min: data.range[0],
      max: data.range[1],
      // sortPack: filter.sortPack,

    }));

    //function
    const packName = data.packName ? {packName: data.packName} : null;
    const userId = data.userId ? {userId: data.userId} : null;
    setSearchParams({
      ...packName,
      ...userId,
      min: `${data.range[0]}`,
      max: `${data.range[1]}`,
      // sortPack: data.sortPack
    })
  };

  useEffect(() => {
    const subscription = watch((values) => onSubmit(values as PackFilter));
    return subscription.unsubscribe;
  }, [watch, getValues])

  useEffect(() => {
    dispatch(getPacksTC(getValues()));
//function для начальных квери
  }, [ getValues]);  //filter.sortPack,

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.packFilterContainer}>
        <div className={style.search}>
          <Controller
            name={'packName'}
            control={control}
            render={({field}) => (
              <Search {...field} field={field} length={'413px'}/>
            )}
          />
        </div>
        <div className={style.toggleButtons}>
          <Controller name={'userId'}
                      control={control}
                      render={({field}) => <ToggleButtons field={field}/>}
          />
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



    </form>

  )
}