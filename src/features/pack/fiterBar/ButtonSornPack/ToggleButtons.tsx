import React from 'react'
import ToggleButton from "@mui/material/ToggleButton";

import style from "./ToggleButtons.module.scss"
import {useAppDispatch} from "../../../../common/hook/useDispatch";
import {setParams} from "../../cards-slice";
import {useAppSelector} from "../../../../common/hook/useSelect";
import {toggleButtonStyle} from "./toggleButtonStyle";


export const ToggleButtons = () => {
    const dispatch = useAppDispatch()
    const user_id = useAppSelector(state => state.auth.userID)
    const handleChangeMyPack = (value: string) => {
        dispatch(setParams({user_id: value}))
    }

    return (
        <div>
            <div className={style.textToggleButton}>Show packs cards</div>
            <ToggleButton onClick={() => handleChangeMyPack(user_id)} value='My' sx={toggleButtonStyle}>
                My
            </ToggleButton>
            <ToggleButton onClick={() => handleChangeMyPack('')} value='All' sx={toggleButtonStyle}>
                All
            </ToggleButton>
        </div>
    )
}