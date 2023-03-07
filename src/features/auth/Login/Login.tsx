import React from "react";
import style from "./Login.module.scss";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../common/hook/useDispatchHook";
import { useAppSelector } from "../../../common/hook/useSelectHook";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../auth-slice";
import { PasswordField } from "../../../common/components/Inputs/Password/PasswordField";
import { EmailField } from "../../../common/components/Inputs/Email/EmailField";

export const Login = () => {
  const dispatch = useAppDispatch();
  const isLoginIn = useAppSelector((state) => state.auth.isLoggedIn);
  type LoginForm = {
    email: string;
    password: string;
    rememberMe: boolean;
  };
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
    console.log(data);
    reset();
  };

  if (isLoginIn) return <Navigate to={"/Profile"} />;
  return (
    <div>
      <div className={style.formContainer}>
        <div className={style.title}>Sign in</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EmailField register={register} errors={errors} name={"email"} />
          <PasswordField name={"password"} errors={errors} register={register} />
          <div className={style.checkbox}>
            <Checkbox id="rememberMe" {...register("rememberMe")} />
            <span>Remember me</span>
          </div>
          <NavLink to={"/passwordRecovery"} className={style.recovery}>
            Forgot Password?
          </NavLink>
          <button disabled={!isValid} type={"submit"} className={style.button}>
            Sign In
          </button>
        </form>

        <NavLink to={"/"} className={style.onAccount}>
          Already have an account?
        </NavLink>
        <NavLink to={"/registration"} className={style.onAccount}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};
