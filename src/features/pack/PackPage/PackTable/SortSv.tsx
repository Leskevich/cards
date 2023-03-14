import React from "react";
import {useAppSelector} from "../../../../common/hook/useSelect";
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {setValueFilter} from "../../packFilter/filter-slice";
import downIcon from "../../../../assets/imgTable/down.svg";
import upIcon from "../../../../assets/imgTable/UP.svg";

export const SortSv = () => {
  const dispatch = useAppDispatch();
  const sortPackFilter = useAppSelector(state => state.filter.sortPacks)

  const onClickHandler = () => {
    dispatch(setValueFilter({sortPacks: sortPackFilter === '1updated' ? '0updated' : '1updated'}))
  }

  return (
    <span onClick={onClickHandler}>
      <img src={sortPackFilter === '1updated' ? downIcon : upIcon}/>
    </span>
  )
}