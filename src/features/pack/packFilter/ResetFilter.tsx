import React from 'react';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as ResetFilterIcon} from '../../../assets/img/resetFilter.svg';

export const ResetFilter = () => {
  return (
      <IconButton aria-label="delete">
        <ResetFilterIcon />
      </IconButton>
  )
}