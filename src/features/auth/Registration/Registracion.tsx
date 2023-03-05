import React from "react";
import { RegistrationForm } from "../form-auth/RegistrationForm/RegistrationForm";
import style from "./Regisrtation.module.scss";

export const Registration = () => {
  return (
    <div className={style.registrationFrom}>
      <RegistrationForm />
    </div>
  );
};
