import React from "react";
import style from "./Header.module.scss";
import Button from "@mui/material/Button";
import incubatorLogo from "./../../assets/img/Incubator-logo.svg";
import {useAppSelector} from "../../common/utils/hook/useSelectHook";
import {useAppDispatch} from "../../common/utils/hook/useDispatchHook";
import {logoutThunk} from "../auth/AuthReducer";

export const Header = () => {
    const isLogged = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const logOutMe = () => {
        dispatch(logoutThunk())
    }
  return (
    <div className={style.headerContainer}>
      <img src={incubatorLogo} alt="logo" />
        { !isLogged
            ? <Button
                className={style.button}
                variant={"contained"}
                color={"primary"}>Sign in</Button>

            :  <Button
                className={style.button}
                variant={"contained"}
                color={"primary"}
                onClick={logOutMe}
            >Log out</Button>
        }
    </div>
  );
};
