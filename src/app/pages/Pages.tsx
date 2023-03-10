import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Registration } from "../../features/auth/Registration/Registration"

import { Error404 } from "../../common/components/error404/Error404"
import { PasswordRecovery } from "../../features/auth/PasswordRecovery/PasswordRecovery"
import { NewPassword } from "../../features/auth/NewPassword/NewPassword"
import { Login } from "../../features/auth/Login/Login"
import style from "./Pages.module.scss"
import { PATH } from "../../common/constans/path"
import { CheckEmail } from "../../features/auth/CheckEmail/CheckEmail"
import { Profile } from "../../features/Profile/Profile"

export const Pages = () => {
  return (
    <div className={style.pagesContainer}>
      <Routes>
        <Route path={"/"} element={<Navigate to={"Profile"} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.RECOVERY} element={<PasswordRecovery />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  )
}
