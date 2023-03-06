import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import style from "./Registration.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { registerTC } from "../auth-slice";
import { Navigate } from "react-router-dom";

import { PATH } from "../../../common/constans/path";
import { useAppSelector } from "../../../common/hook/useSelectHook";
import { useAppDispatch } from "../../../common/hook/useDispatchHook";

export type RegistrationFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};
export const Registration = () => {
  const dispatch = useAppDispatch();
  const isRegister = useAppSelector((state) => state.auth.isRegister);
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<RegistrationFormType>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<RegistrationFormType> = (data) => {
    dispatch(registerTC(data));
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowRepeatPassword = () => setShowConfirmPassword((show) => !show);

  //не понятно для чего пока
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (isRegister) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={style.registration}>
      <h2>Sign Up</h2>
      <Grid container justifyContent={"center"} className={style.formContainer}>
        <Grid item justifyContent={"center"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*<FormControl>*/}
            <FormGroup>
              <FormControl className={style.emailInput}>
                <TextField
                  {...register("email", {
                    required: "Email adress is required",
                    pattern: {
                      value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                      message: "Invalid email address",
                    },
                  })}
                  id="filled-start-adornment"
                  variant="filled"
                  label="Email"
                />
                {errors.email?.message && <span style={{ color: "red" }}>{errors.email.message}</span>}
              </FormControl>

              <FormControl className={style.emailInput} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                  id="filled-adornment-password1"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility1"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Need more than 8 characters",
                    },
                  })}
                />
                {errors.password?.message && <span style={{ color: "red" }}>{errors.password.message}</span>}
              </FormControl>

              <FormControl className={style.emailInput} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Confirm password</InputLabel>
                <FilledInput
                  id="filled-adornment-password2"
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility2"
                        onClick={handleClickShowRepeatPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  {...register("confirmPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Need more than 8 characters",
                    },
                    validate: (val: string) => {
                      if (watch("password") !== val) {
                        return "Your passwords don't match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword?.message && (
                  <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
                )}
              </FormControl>

              <Button
                disabled={!isValid}
                className={style.submitButton}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
              >
                Sign Up
              </Button>
            </FormGroup>
            {/*</FormControl>*/}
          </form>
        </Grid>
      </Grid>

      <p className={style.toLogin}>Already have an account?</p>
      <a className={style.toSignIn} href={"/login"}>
        Sign in
      </a>
    </div>
  );
};
