import React from "react";
import style from "./PasswordRecovery.module.scss";
import { PasswordRecoveryForm } from "../../form-auth/password-recovery-form/PasswordRecoveryForm";

export const PasswordRecovery = () => {
  return (
    <div className={style.passwordRecoveryContainer}>
      <PasswordRecoveryForm />
    </div>
  );
};
