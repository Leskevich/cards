import React from 'react'
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {toggleButtonStyle} from "./toggleButtonStyle";
import style from "./ToggleButtons.module.scss"
import {useAppSelector} from "../../../common/hook/useSelect";

type ToggleButtons = {
  field: any;
}

export const ToggleButtons: React.FC<ToggleButtons> = ({field}) => {
  const userID = useAppSelector(state => state.auth.userID)

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    console.log(value)
    if (value !== null) {
      field.onChange(value);
    }
  }
  console.log(userID);
  return (
    <div>
      <div className={style.textToggleButton}>Show packs cards</div>
      <ToggleButtonGroup
        {...field}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value={userID} sx={toggleButtonStyle}>My</ToggleButton>
        <ToggleButton value='' sx={toggleButtonStyle}>All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}