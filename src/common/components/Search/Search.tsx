import React, {ChangeEvent} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {ReactComponent as Loupe} from '../../../assets/img/Union.svg';
import style from './Search.module.scss'

type SearchType = {
  length: string
  field: any;
}

export const Search: React.FC<SearchType> = ({length, field}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.currentTarget.value)
  }

  return (
    <div>
      <div className={style.textSearch}>Search</div>
      <TextField
        {...field}
        placeholder={'Provide your text'}
        size={'small'}
        sx={{width: length}}
        onChange={handleChange}
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