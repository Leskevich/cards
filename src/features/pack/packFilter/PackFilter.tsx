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
import {setValueFilter} from "./filter-slice";

type PackFilter = {
  search: string;
  userId: string;
  range: Array<number>;
}

export const PackFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter)

  const {control, handleSubmit, watch} = useForm<PackFilter>({
    defaultValues: {
      search: filter.search,
      userId: filter.userId,
      range: [filter.min, filter.max]
    },
    mode: "onSubmit"
  });

  const onSubmit: SubmitHandler<PackFilter> = (data) => {
    dispatch(setValueFilter({
      search: data.search,
      userId: data.userId,
      min: data.range[0],
      max: data.range[1],
    }))
    console.log(data)
  };

  useEffect(() => {
    const subscription = watch((values) => onSubmit(values as PackFilter));
    return subscription.unsubscribe;
  }, [watch])

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
      <button type={'submit'} >GO</button>
    </form>

  )
}