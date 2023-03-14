import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from "./NumbersOfCard.module.scss"
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {setParams} from "../../cards-slice";
import {useDebounce} from "../../../../common/hook/useDebounce";


export const NumbersOfCard = () => {
    const dispatch = useAppDispatch()

    const [value, setValue] = React.useState<number[]>([0, 100]);
    const [min, max] = value as Array<number>
    const debouncedMi = useDebounce<number>(min, 500)
    const debouncedMa = useDebounce<number>(max, 500)

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    useEffect(() => {
        if (min === 0 && max === 100) return
            dispatch(setParams({
                min: `${debouncedMi}`,
                max: `${debouncedMa}`
            }))
    }, [debouncedMi, debouncedMa])

    return (
        <div>
            <div className={style.numbers}>{value[0]}</div>
            <Box sx={{width: 300}} className={style.slider}>
                <Slider
                    value={value}
                    onChange={handleChange}
                />
            </Box>
            <div className={style.numbers}>{value[1]}</div>
        </div>
    );
}