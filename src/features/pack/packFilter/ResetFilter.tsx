import React from 'react';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as ResetFilterIcon} from '../../../assets/img/resetFilter.svg';
import {useDispatch} from "react-redux";
import {clear} from "./filter-slice";

export const ResetFilter = () => {
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(clear())
  }

  return (
      <IconButton aria-label="delete" onClick={resetHandler}>
        <ResetFilterIcon />
      </IconButton>
  )
}