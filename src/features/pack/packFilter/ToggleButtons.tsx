import React from 'react'
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import {toggleButtonStyle} from "./toggleButtonStyle";
import style from "./ToggleButtons.module.scss"

export const ToggleButtons = () => {
  const [alignment, setAlignment] = React.useState('my');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment){
      setAlignment(newAlignment);
    }
  };
  return (
    <div>
      <div className={style.textToggleButton}>Show packs cards</div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="my" sx={toggleButtonStyle}>My</ToggleButton>
        <ToggleButton value="all" sx={toggleButtonStyle}>All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}