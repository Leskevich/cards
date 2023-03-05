import React from "react";
import { LoginForm } from "../form-auth/LoginForm/LoginForm";
import style from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={style.loginContainer}>
      <LoginForm />
    </div>
  );
};
