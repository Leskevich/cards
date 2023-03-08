import React from "react";
import style from "./NewPassword.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {PasswordField} from "../../../common/components/Inputs/Password/PasswordField";
import {Navigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../../common/hook/useSelectHook";
import {PATH} from "../../../common/constans/path";
import {changePasswordTC} from "../auth-slice";
import {useAppDispatch} from "../../../common/hook/useDispatchHook";
import Button from "@mui/material/Button/Button";

type NewPasswordFormType = {
  password: string;
};

export const NewPassword = () => {
  const dispatch = useAppDispatch();
  const {isChangePassword} = useAppSelector(state => state.auth)
  const {token} = useParams<{token: string}>();

  const {
    register,
    reset,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<NewPasswordFormType>({mode: "onBlur"});

  const onSubmit: SubmitHandler<NewPasswordFormType> = (data) => {
    console.log(data);
    const password = data.password
    dispatch(changePasswordTC({password, resetPasswordToken: token}))
    reset();
  };

  if(isChangePassword){
    return <Navigate replace to={PATH.LOGIN} />;
  }

  return (
    <div className={style.formContainer}>
    <div className={style.title}>Create new password</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <PasswordField name={"password"} errors={errors} register={register} />
      <p className={style.info}>Create new password and we will send you further instructions to email</p>
      <Button
        disabled={!isValid}
        type={"submit"}
        className={style.button}
        variant={"contained"}
        color={"primary"}
      >
        Create new password
      </Button>
    </form>
  </div>
  );
};

