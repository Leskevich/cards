import React, { useState } from "react";
import style from "../../features/auth/Registration/Registration.module.scss";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl/FormControl";

type InputPasswordType = {
  errors: any;
  register: any;
};

const InputPassword = (props: InputPasswordType) => {
  const { errors, register } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //не понятно для чего пока
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <FormControl className={style.emailInput} variant="filled">
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Need more than 8 characters"
            }
          })}
        />
        {errors.password?.message && <span style={{ color: "red" }}>{errors.password.message}</span>}
      </FormControl>
    </div>
  );
};

export default InputPassword;
