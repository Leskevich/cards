import React from "react";
import style from "./Header.module.scss";
import Button from "@mui/material/Button";
import incubatorLogo from "./../../assets/img/Incubator-logo.svg";
import {useAppSelector} from "../../common/utils/hook/useSelectHook";
import {useAppDispatch} from "../../common/utils/hook/useDispatchHook";
import {logoutThunk} from "../auth/auth-reducer";

export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <img src={incubatorLogo} alt="logo"/>
            <Button
                className={style.button}
                variant={"contained"}
                color={"primary"}>
                Sign in
            </Button>

        </div>
    );
};
