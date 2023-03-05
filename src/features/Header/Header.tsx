import React from "react";
import style from "./Header.module.scss";
import Button from "@mui/material/Button";
import incubatorLogo from "./../../assets/img/Incubator-logo.svg";

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
