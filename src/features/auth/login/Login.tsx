import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./Login.module.scss";
import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import IconButton from "@mui/material/IconButton/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../common/hook/useDispatchHook";
import { login } from "../AuthSlice";
import { useAppSelector } from "../../../common/hook/useSelectHook";

export const Login = () => {
  const dispatch = useAppDispatch();
  const isLoginIn = useAppSelector((state) => state.auth.isLoginIn);
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
    reset();
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  if (isLoginIn) return <Navigate to={"/profile"} />;
  return (
    <div>
      <div className={style.formContainer}>
        <div className={style.title}>Sign in</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={style.email}
            sx={{ width: "347px" }}
            id="email"
            label="Email"
            variant="standard"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                message: "email must be a valid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <FormControl sx={{ width: "347px" }} variant="standard" className={style.email}>
            <InputLabel htmlFor="password" style={{ color: "red" }}>
              Password
            </InputLabel>
            <Input
              {...register("password", {
                required: "Required",
                minLength: {
                  value: 4,
                  message: "password must be at least 8 characters",
                },
              })}
              type={showPassword ? "text" : "password"}
              error={!!errors}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && <span className={style.error}>{errors.password.message}</span>}
          </FormControl>
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
