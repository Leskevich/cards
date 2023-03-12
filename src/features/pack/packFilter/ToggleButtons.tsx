import React from 'react'
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {toggleButtonStyle} from "./toggleButtonStyle";
import style from "./ToggleButtons.module.scss"

type ToggleButtons = {
  field: any;
}

export const ToggleButtons: React.FC<ToggleButtons> = ({field}) => {

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    if (value !== null) {
      field.onChange(value);
    }
  }

  return (
    <div>
      <div className={style.textToggleButton}>Show packs cards</div>
      <ToggleButtonGroup
        {...field}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value='dfgdg' sx={toggleButtonStyle}>My</ToggleButton>
        <ToggleButton value='' sx={toggleButtonStyle}>All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}