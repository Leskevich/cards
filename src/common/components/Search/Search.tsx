import React, {ChangeEvent} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {ReactComponent as Loupe} from '../../../assets/img/Union.svg';
import style from './Search.module.scss'

type SearchType = {
  field: any;
}

export const Search: React.FC<SearchType> = ({field}) => (
  <>
    <div className={style.textSearch}>Search</div>
    <TextField
      {...field}
      placeholder={'Provide your text'}
      size={'small'}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Loupe/>
          </InputAdornment>
        ),
      }}
    />
  </>
);