import React, { useState } from "react";
import style from "./PasswordField.module.scss";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl/FormControl";

type InputPasswordType = {
  name: string;
  errors: any;
  register: any;
};

export const PasswordField = (props: InputPasswordType) => {
  const { name, errors, register } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className={style.InputContainer}>
      <FormControl className={style.InputPassword} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password1"
          type={showPassword ? "text" : "password"}
          autoComplete={"on"}
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
          {...register(name, {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Need more than 8 characters",
            },
          })}
        />
        {errors.password?.message && <span style={{ color: "red" }}>{errors.password.message}</span>}
      </FormControl>
    </div>
  );
};
