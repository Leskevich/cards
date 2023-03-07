import React, { useState } from "react";
import style from "./Error404.module.scss";
import error404 from "../../../assets/img/404.svg";
import Button from "@mui/material/Button/Button";
import {Navigate} from "react-router-dom";

export const Error404 = () => {
  const [modeOn, setMode] = useState(false)
  const redirectToProfile = () => {
    setMode(!modeOn)
  }

  return (
    modeOn ? <Navigate to={"Profile"}/>
    : <div className={style.parentContainer}>
    <div className={style.info}>
      <p className={style.title}>Ooops!</p>
      <p className={style.text}>Sorry! Page not found!</p>
      <Button sx={{ borderRadius: "30px", width: "100%", height: "36px", color: "white"}}
              className={style.button}
              onClick={redirectToProfile}
      >
        Back to home page
      </Button>
    </div>
    <div className={style.imageBlock} style={{ backgroundImage: `url("${error404}")` }}></div>
  </div>);
};
