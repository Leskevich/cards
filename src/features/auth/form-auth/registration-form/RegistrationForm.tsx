import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import style from "./RegistrationForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

type RegistrationFormType = {
  email: string;
  password: string;
  repeatPassword: string;
};
export const RegistrationForm = () => {
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<RegistrationFormType>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<RegistrationFormType> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={style.registration}>
      <h2>Sign Up</h2>
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
                  className={style.emailInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  label="Email"
                  margin="normal"
                />
                {errors.email?.message && <span>{errors.email.message}</span>}

                <TextField
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 4,
                      message: "больше 4 символов",
                    },
                  })}
                  className={style.passwordInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  label="Password"
                  margin="normal"
                />
                {errors.password?.message && <span>{errors.password.message}</span>}
                <TextField
                  {...register("repeatPassword", {
                    required: "Required",
                    minLength: {
                      value: 4,
                      message: "больше 4 символов",
                    },
                  })}
                  className={style.repeatPasswordInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  label="Repeat Password"
                  margin="normal"
                />
                {errors.repeatPassword?.message && <span>{errors.repeatPassword.message}</span>}
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
            </FormControl>
          </form>
        </Grid>
      </Grid>

      <p className={style.toLogin}>Already have an account?</p>
      <p className={style.toSignIn}>Sign In</p>
    </div>
  );
};
