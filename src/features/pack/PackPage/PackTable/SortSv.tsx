import React from "react";
import {useAppSelector} from "../../../../common/hook/useSelect";
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {setValueFilter} from "../../packFilter/filter-slice";
import downIcon from "../../../../assets/imgTable/down.svg";
import upIcon from "../../../../assets/imgTable/UP.svg";

export const SortSv = () => {
  const dispatch = useAppDispatch();
  const sortPackFilter = useAppSelector(state => state.filter.sortPacks)

  const update = (sortPackFilter: string) => {
    if (sortPackFilter === '0updated') return '1updated'
    if (sortPackFilter === '1updated') return '0updated'
    return '1updated'
}

  const onClickHandler = () => {
    const res = update(sortPackFilter)
    dispatch(setValueFilter({sortPacks: res}))
  }
  const icon = sortPackFilter === '1updated' ? downIcon : upIcon
  return (
    <span onClick={onClickHandler}><img src={icon}/></span>
  )
}