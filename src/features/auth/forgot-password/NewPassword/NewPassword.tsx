import React from "react";
import { NewPasswordForm } from "../../form-auth/NewPasswordForm/NewPasswordForm";
import style from "./NewPassword.module.scss";

export const NewPassword = () => {
  return (
    <div className={style.NewPasswordContainer}>
      <NewPasswordForm />
    </div>
  );
};
