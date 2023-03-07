import React from "react";
import style from "./CheckEmail.module.scss";
import Button from "@mui/material/Button";
import checkEmailIMG from "../../../assets/img/CheckEmail.png";
import { Navigate } from "react-router-dom";

const initialProps = {
  emailAddres: "user_email@gmail.com",
};

export const CheckEmail = () => {

  return (
    <div className={style.profileParent}>
      <p className={style.title}>Personal Information</p>
      <div className={style.image} style={{ backgroundImage: `url("${checkEmailIMG}")` }}></div>
      <p className={style.info}>We’ve sent an Email with instructions <p>to {initialProps.emailAddres}</p></p>
      <Button variant="contained" sx={{ borderRadius: "30px", width: "347px", height: "36px" }}>
        Back to login
      </Button>
    </div>
  );
};
