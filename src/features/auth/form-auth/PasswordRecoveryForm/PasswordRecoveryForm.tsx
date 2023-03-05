import Button from "@mui/material/Button/Button";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import React from "react";
import style from "./PasswordRecoveryForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

type PasswordRecoveryFormType = {
  email: string;
};
export const PasswordRecoveryForm = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm<PasswordRecoveryFormType>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<PasswordRecoveryFormType> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={style.blockContainer}>
      <h2>Forgot your password?</h2>
      <Grid container justifyContent={"center"} className={style.formContainer}>
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
                  className={style.passwordInput}
                  variant="filled"
                  type="email"
                  label="Email"
                  margin="normal"
                />
                {errors.email?.message && <span>{errors.email.message}</span>}

                <p className={style.info}>Enter your email address and we will send you further instructions</p>
                <Button
                  disabled={!isValid}
                  className={style.submitButton}
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                >
                  Send Instructions
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
      </Grid>
      <p className={style.toLogin}>Did you remember your password?</p>
      <p className={style.toSignIn}>Try logging in</p>
    </div>
  );
};
