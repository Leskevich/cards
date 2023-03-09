import React, {useEffect} from "react";
import style from "./Login.module.scss";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../common/hook/useDispatchHook";
import { useAppSelector } from "../../../common/hook/useSelectHook";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordField } from "../../../common/components/Inputs/Password/PasswordField";
import { EmailField } from "../../../common/components/Inputs/Email/EmailField";
import {login, setIsRegistration} from "../auth-slice";
import {ButtonForm} from "../../../common/components/Button/ButtonForm";
import FormControl from "@mui/material/FormControl/FormControl";
import {PATH} from "../../../common/constans/path";

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const isLoginIn = useAppSelector((state) => state.auth.isLoggedIn);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginForm>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    dispatch(login(data));
    reset();
  };

  useEffect(() => {
    dispatch(setIsRegistration({ isRegister: false }));
  }, []);

  if (isLoginIn) return <Navigate to={"/Profile"} />;
  return (
    <div className={style.login}>
      <div className={style.formContainer}>
        {/*<div className={style.title}>Sign in</div>*/}
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={style.emailInput}>
            <EmailField register={register} errors={errors} name={"email"} />
            <PasswordField name={"password"} errors={errors} register={register} />
            <div className={style.checkbox}>
              <Checkbox id="rememberMe" {...register("rememberMe")} />
              <span>Remember me</span>
            </div>
            <NavLink to={PATH.RECOVERY} className={style.recovery}>
              Forgot Password?
            </NavLink>
            {/*<button disabled={!isValid} type={"submit"} className={style.button}>*/}
            {/*  Sign In*/}
            {/*</button>*/}
            <ButtonForm name={'Sign In'} isValid={isValid}/>
          </FormControl>

        </form>

        {/*<NavLink to={"/"} className={style.onAccount}>*/}
        {/*  Already have an account?*/}
        {/*</NavLink>*/}
        <p className={style.toLogin}>Already have an account?</p>
        <NavLink to={PATH.REGISTRATION} className={style.onAccount}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};
