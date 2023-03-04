import React from "react";
import s from "./LoginForm.module.scss";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {isLoggedInThunk, setIsLoggedIn} from "../../AuthReducer";
import {useAppDispatch} from "../../../../common/utils/hook/useDispatchHook";
import {LoginPayloadType} from "../../../../api/auth-api";

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginPayloadType>({
    defaultValues: {
      rememberMe: false,
    },
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<LoginPayloadType> = (data) => {
    dispatch(isLoggedInThunk(data))
    reset();
  };
  return (
    <div className={s.registration}>
      <h2>Sign In</h2>
      <Grid container justifyContent={"center"} className={s.formContainer}>
        <Grid item justifyContent={"center"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormGroup>
                <TextField
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={s.emailInput}
                  variant="filled"
                  label="Email"
                  margin="normal"
                />
                {errors.email?.message && <span>{errors.email?.message || "error"}</span>}
                <TextField
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 4,
                      message: "больше 4 символов",
                    },
                  })}
                  className={s.passwordInput}
                  variant="filled"
                  type="password"
                  label="Password"
                  margin="normal"
                />
                {errors.password?.message && <span>{errors.password.message}</span>}
                <FormControlLabel label={"Remember me"} control={<Checkbox {...register("rememberMe")} />} />
                <NavLink to={"/passwordRecovery"}>Forgot Password?</NavLink>
                <Button
                  disabled={!isValid}
                  className={s.submitButton}
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                >
                  Sign Up
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
      </Grid>
      <p className={s.toLogin}>Already have an account?</p>
      <p className={s.toSignIn}>Sign Up</p>
    </div>
  );
};
