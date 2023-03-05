import React from "react";
import { RegistrationForm } from "../form-auth/registration-form/RegistrationForm";
import style from "./Regisrtation.module.scss";

export const Registration = () => {
  return (
    <div className={style.registrationForm}>
      <RegistrationForm />
    </div>
  );
};
