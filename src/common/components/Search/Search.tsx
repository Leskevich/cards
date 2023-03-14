import React, {ChangeEvent} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {ReactComponent as Loupe} from '../../../assets/img/Union.svg';
import style from './Search.module.scss'
import {useAppDispatch} from "../../hook/useDispatch";
import {setParams} from "../../../features/pack/cards-slice";
import {useAppSelector} from "../../hook/useSelect";

export const Search = () => {
    const dispatch = useAppDispatch()
    const packName = useAppSelector(state => state.packs.params.packName)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(setParams({packName: e.currentTarget.value}))
    }
    return (
        <div>
            <div className={style.textSearch}>Search</div>
            <TextField
                placeholder={'Provide your text'}
                size={'small'}
                value={packName}
                onChange={onChangeHandler}
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