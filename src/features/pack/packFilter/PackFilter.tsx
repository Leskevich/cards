import React, {useCallback, useEffect} from 'react';
import {Search} from "../../../common/components/Search/Search";
import {NumbersOfCard} from "./NumbersOfCard";
import {ToggleButtons} from "./ToggleButtons";
import style from './PackFilter.module.scss'
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {useAppSelector} from "../../../common/hook/useSelect";
import {selectFilter} from "../../../common/selectors/selectors";
import {useAppDispatch} from "../../../common/hook/useDispatch";
import {getPacksTC, setValueFilter} from "./filter-slice";
// import { useSearchParams } from "react-router-dom";
import {ReactComponent as ResetFilterIcon} from "../../../assets/img/resetFilter.svg";
import IconButton from "@mui/material/IconButton";

export type PackFilter = {
  packName: string;
  user_id: string;
  range: Array<number>;
  sortPacks: string;
  pageCount: string;
}

export const PackFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter)
  // const [searchParams, setSearchParams] = useSearchParams();

  const {control, handleSubmit, watch, getValues, setValue, reset} = useForm<PackFilter>({
    defaultValues: {
      packName: filter.packName,
      user_id: filter.user_id,
      range: [filter.min, filter.max],
      sortPacks: filter.sortPacks,
      pageCount: filter.pageCount,
    },
    mode: "onSubmit"
  });

  // const setParams = (values: PackFilter) => {
  //   const packName = values.packName ? {packName: values.packName} : null;
  //   const userId = values.user_id ? {userId: values.user_id} : null;
  //   setSearchParams({
  //     ...packName,
  //     ...userId,
  //     min: `${values.range[0]}`,
  //     max: `${values.range[1]}`,
  //     sortPacks: values.sortPacks
  //   })
  // };

  const resetHandler = () => {
    reset({
      ...getValues(),
      packName: '',
      user_id: '',
      range: [2, 10],
    });
  }

  const onSubmit: SubmitHandler<PackFilter> = (values) => {
    const data = {
      packName: values.packName,
      user_id: values.user_id,
      min: values.range[0],
      max: values.range[1],
      sortPacks: values.sortPacks,
      pageCount: values.pageCount,
    };
    dispatch(getPacksTC(data));
    dispatch(setValueFilter(data));
    //setParams(values);
  };

  useEffect(() => {
    onSubmit(getValues());
  }, [getValues]);

  useEffect(() => {
    const subscription = watch((values) => onSubmit(values as PackFilter));
    return subscription.unsubscribe;
  }, [watch, getValues])

  useEffect(() => {
    if (getValues().sortPacks !== filter.sortPacks) {
      setValue('sortPacks', filter.sortPacks);
    }
  }, [filter.sortPacks, getValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.packFilterContainer}>
        <div className={style.search}>
          <Controller
            name={'packName'}
            control={control}
            render={({field}) => <Search field={field} />}
          />
        </div>
        <div className={style.toggleButtons}>
          <Controller
            name={'user_id'}
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
          <IconButton aria-label="delete" onClick={resetHandler}>
            <ResetFilterIcon />
          </IconButton>
        </div>
      </div>
    </form>
  )
}