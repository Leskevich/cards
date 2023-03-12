import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from "./NumbersOfCard.module.scss"

export  const NumbersOfCard = () => {
  const [value, setValue] = useState<number[]>([2, 20]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <div className={style.textRange}>Number of cards</div>
      <div className={style.NumberOfCardContainer}>
        <div className={style.numbers}>{value[0]}</div>
        <Box sx={{ width: 300 }} className={style.slider}>
          <Slider
            value={value}
            onChange={handleChange}
            max={95}
          />
        </Box>
        <div className={style.numbers}>{value[1]}</div>
      </div>
    </div>
  );
}