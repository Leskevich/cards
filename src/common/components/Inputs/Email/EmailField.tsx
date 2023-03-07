import React from "react";
import style from "./EmailField.module.scss";
import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";

type EmailFieldType = {
  name: string;
  register: any;
  errors: any;
};
export const EmailField = (props: EmailFieldType) => {
  const { name, register, errors } = props;
  return (
    <div className={style.div}>
      <FormControl className={style.emailField}>
        <TextField
          {...register(name, {
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
    </div>
  );
};
