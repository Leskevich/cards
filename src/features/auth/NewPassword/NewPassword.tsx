import React from "react";
import style from "./NewPassword.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Grid from "@mui/material/Grid/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

type NewPasswordFormType = {
  password: string;
};

export const NewPassword = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewPasswordFormType>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<NewPasswordFormType> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={style.blockContainer}>
      <h2>Create new password</h2>
      <Grid container justifyContent={"center"} className={style.formContainer}>
        <Grid item justifyContent={"center"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormGroup>
                <TextField
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 4,
                      message: "минимум 4 симвала",
                    },
                  })}
                  className={style.passwordInput}
                  variant="filled"
                  type="password"
                  label="Password"
                  margin="normal"
                />
                {errors.password?.message && <span>{errors.password.message}</span>}
                <p className={style.info}>Create new password and we will send you further instructions to email</p>
                <Button
                  disabled={!isValid}
                  className={style.submitButton}
                  type={"submit"}
                  variant={"contained"}
                  color={"primary"}
                >
                  Create new password
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};
