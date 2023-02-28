import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../../features/auth/login/Login";
import { Registration } from "../../features/auth/registration/Registracion";
import { Profile } from "../../features/profile/Profile";
import { Error404 } from "../../common/components/error404/Error404";
import { PasswordRecovery } from "../../features/auth/forgot-password/passwordRecovery/PasswordRecovery";
import { NewPassword } from "../../features/auth/forgot-password/new-password/NewPassword";

export const Pages = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"login"} />} />
      <Route path={"login"} element={<Login />} />
      <Route path={"registration"} element={<Registration />} />
      <Route path={"passwordRecovery"} element={<PasswordRecovery />} />
      <Route path={"newPassword"} element={<NewPassword />} />
      <Route path={"profile"} element={<Profile />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
  );
};
