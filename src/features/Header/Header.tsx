import React from "react";
import style from "./Header.module.scss";
import Button from "@mui/material/Button";
import incubatorLogo from "./../../assets/img/Incubator-logo.svg";
import { useAppSelector } from "../../common/hook/useSelectHook";
import { useAppDispatch } from "../../common/hook/useDispatchHook";
import { logoutThunk, setIsLoggedIn } from "../auth/auth-slice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handlerLogout = () => {
    dispatch(logoutThunk());
    dispatch(setIsLoggedIn({ isLoginIn: false }));
  };
  const goToLogin = () => {
    navigate("login");
  };
  return (
    <div className={style.headerContainer}>
      <img src={incubatorLogo} alt="logo" />
      {
        isLoggedIn
          ? <Button
            className={style.button}
            variant={"contained"}
            color={"primary"}
            onClick={handlerLogout}
          >
            Logout
          </Button>
          : <Button
            className={style.button}
            variant={"contained"}
            color={"primary"}
            onClick={goToLogin}>
            Sign in
          </Button>
      }

    </div>
  );
};
