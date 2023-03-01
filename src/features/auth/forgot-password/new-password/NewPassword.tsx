import React from "react";
import { NewPasswordForm } from "../../form-auth/new-password-form/NewPasswordForm";
import style from "./NewPassword.module.scss";

export const NewPassword = () => {
  return (
    <div className={style.NewPasswordContainer}>
      <NewPasswordForm />
    </div>
  );
};
