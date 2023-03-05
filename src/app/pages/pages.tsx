import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Registration} from "../../features/auth/registration/Registration";
import {Profile} from "../../features/profile/Profile";
import {Error404} from "../../common/components/error404/Error404";
import {PasswordRecovery} from "../../features/auth/forgot-password/passwordRecovery/PasswordRecovery";
import {NewPassword} from "../../features/auth/forgot-password/new-password/NewPassword";
import {Login} from "../../features/auth/login/Login";
import style from "./Pages.module.scss"
import {CheckEmail} from "../../features/auth/checkEmail/CheckEmail";


export const Pages = () => {
    return (<div className={style.pagesContainer}>
            <Routes>
                <Route path={"/"} element={<Navigate to={"login"}/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"registration"} element={<Registration/>}/>
                <Route path={"passwordRecovery"} element={<PasswordRecovery/>}/>
                <Route path={"newPassword"} element={<NewPassword/>}/>
                <Route path={"profile"} element={<Profile/>}/>
                <Route path={"checkEmail"} element={<CheckEmail/>}/>
                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </div>
    );
};
