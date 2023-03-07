import React from "react";
import style from "./PasswordRecovery.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import { EmailField } from "../../../common/components/Inputs/Email/EmailField";
import { PATH } from "../../../common/constans/path";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../common/hook/useDispatchHook";
import { forgot } from "../auth-slice";

type PasswordRecoveryFormType = {
  email: string;
};

export const PasswordRecovery = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm<PasswordRecoveryFormType>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<PasswordRecoveryFormType> = (data) => {
    dispatch(forgot(data.email));
    reset();
  };
  return (
    <div className={style.blockContainer}>
      <div className={style.title}>Forgot your password?</div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <EmailField name={"email"} errors={errors} register={register} />
        <p className={style.info}>Enter your email address and we will send you further instructions</p>
        <Button disabled={!isValid} className={style.button} type={"submit"} variant={"contained"} color={"primary"}>
          Send Instructions
        </Button>
      </form>
      <p className={style.text}>Did you remember your password?</p>
      <NavLink to={PATH.LOGIN} className={style.tryLogging}>
        Try logging in
      </NavLink>
    </div>
  );
};
