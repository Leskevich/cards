import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import style from "./ConfirmPasswordField.module.scss"

type ConfirmPasswordFieldType = {
  register:  any
  errors: any
  watch: any
}
export const ConfirmPasswordField = (props: ConfirmPasswordFieldType) => {
  const {register, errors, watch} = props;

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowRepeatPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={style.inputContainer}>
      <FormControl className={style.inputPassword} variant="filled">
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
                {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          }
          {...register("confirmPassword", {
            required: "Password is required",
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Your passwords don't match";
              }
            },
          })}
        />
        {errors.confirmPassword?.message && (
          <span style={{color: "red"}}>{errors.confirmPassword.message}</span>
        )}
      </FormControl>
    </div>
  )
}