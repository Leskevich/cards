import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from "./NumbersOfCard.module.scss"
import {useAppDispatch} from "../../../common/hook/useDispatch";
import {setValueFilter} from "./filter-slice";
import {useAppSelector} from "../../../common/hook/useSelect";
import {selectMax, selectMin} from "../../../common/selectors/selectors";

type NumbersOfCard = {
  field: any;
}

export const NumbersOfCard: React.FC<NumbersOfCard> = ({field}) => {
  const min = useAppSelector(selectMin)
  const max = useAppSelector(selectMax)
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className={style.textRange}>Number of cards</div>
      <div className={style.NumberOfCardContainer}>
        <div className={style.numbers}>{min}</div>
        <Box sx={{ width: 300 }} className={style.slider}>
          <Slider
            {...field}
            onChange={(_, value: number[]) => {
              field.onChange(value);
              dispatch(setValueFilter({
                min: value[0],
                max: value[1]
              }));
            }}
            value={[min, max]}
            max={95}
          />
        </Box>
        <div className={style.numbers}>{max}</div>
      </div>
    </div>
  );
}