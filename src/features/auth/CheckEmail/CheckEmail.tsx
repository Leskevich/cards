import React from "react";
import style from "./CheckEmail.module.scss";
import Button from "@mui/material/Button";
import checkEmailIMG from "../../../assets/img/CheckEmail.png";
import { useAppSelector } from "../../../common/hook/useSelectHook";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../common/constans/path";
import { setIsMail } from "../auth-slice";
import { useAppDispatch } from "../../../common/hook/useDispatchHook";

export const CheckEmail = () => {
  const dispatch = useAppDispatch();
  const eMail = useAppSelector((state) => state.auth.email);
  const navigate = useNavigate();
  const clickPathLogin = () => {
    navigate(PATH.LOGIN);
    dispatch(setIsMail({ isEMail: false }));
  };
  return (
    <div className={style.profileParent}>
      <p className={style.title}>Personal Information</p>
      <div className={style.image} style={{ backgroundImage: `url("${checkEmailIMG}")` }}></div>
      <p className={style.info}>We’ve sent an Email with instructions to {eMail}</p>
      <Button
        variant="contained"
        sx={{ borderRadius: "30px", width: "347px", height: "36px" }}
        onClick={clickPathLogin}
      >
        Back to login
      </Button>
    </div>
  );
};
