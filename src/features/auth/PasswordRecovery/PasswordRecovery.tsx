import React from "react";
import style from "./PasswordRecovery.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {EmailField} from "../../../common/components/Inputs/Email/EmailField";
import {PATH} from "../../../common/constans/path";
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../common/hook/useDispatchHook";
import {forgot} from "../auth-slice";
import {useAppSelector} from "../../../common/hook/useSelectHook";
import {ButtonForm} from "../../../common/components/Button/ButtonForm";
import FormControl from "@mui/material/FormControl/FormControl";

type PasswordRecoveryFormType = {
  email: string;
};

export const PasswordRecovery = () => {
  const dispatch = useAppDispatch();
  const isEmail = useAppSelector((state) => state.auth.isEMail);
  const {
    register,
    formState: {isValid, errors},
    handleSubmit,
    reset,
  } = useForm<PasswordRecoveryFormType>({mode: "onBlur"});
  const onSubmit: SubmitHandler<PasswordRecoveryFormType> = (data) => {
    dispatch(forgot(data.email));
    reset();
  };
  if (isEmail) return <Navigate to={PATH.CHECK_EMAIL}/>;
  return (
    <div className={style.recovery}>
      <div className={style.blockContainer}>
        <h2>Forgot your password?</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <FormControl className={style.emailInput}>
            <EmailField name={"email"} errors={errors} register={register}/>
            <p className={style.info}>Enter your email address and we will send you further instructions</p>
            <ButtonForm name={'Send Instructions'} isValid={isValid}/>
          </FormControl>
        </form>
        <p className={style.infoIsRemember}>Did you remember your password?</p>
        <NavLink to={PATH.LOGIN} className={style.tryLogging}>
          Try logging in
        </NavLink>
      </div>
    </div>

  );
};
