import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {ReactComponent as Loupe} from '../../../assets/img/Union.svg';
import style from './Search.module.scss'

type SearchType = {
  length: string
}

export const Search = (props: SearchType) => {
  return (
    <div>
      <div className={style.textSearch}>Search</div>
      <TextField
        placeholder={'Provide your text'}
        size={'small'}
        sx={{width: props.length}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Loupe/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  )
}