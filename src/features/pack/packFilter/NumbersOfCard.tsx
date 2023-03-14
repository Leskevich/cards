import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from "./NumbersOfCard.module.scss"

type NumbersOfCard = {
  field: any;
}

export const NumbersOfCard: React.FC<NumbersOfCard> = ({field}) => {
  // const handle = (event: any, value: number) => {
  //   field.onChange(value)
  //   console.log(value)
  // }
  return (
    <div>
      <div className={style.textRange}>Number of cards</div>
      <div className={style.NumberOfCardContainer}>
        <div className={style.numbers}>{field.value[0]}</div>
        <Box sx={{ width: 300 }} className={style.slider}>
          <Slider
            {...field}
            max={95}
            // onChangeCommitted={handle}
          />
        </Box>
        <div className={style.numbers}>{field.value[1]}</div>
      </div>
    </div>
  );
}