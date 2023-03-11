import React from "react";
import style from "./Registration.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {registerTC} from "../auth-slice";
import {PATH} from "../../../common/constans/path";
import {useAppSelector} from "../../../common/hook/useSelect";
import {useAppDispatch} from "../../../common/hook/useDispatch";
import {Navigate, NavLink} from "react-router-dom";
import FormControl from "@mui/material/FormControl/FormControl";
import {EmailField} from "../../../common/components/Inputs/Email/EmailField";
import {PasswordField} from "../../../common/components/Inputs/Password/PasswordField";
import {ButtonForm} from "../../../common/components/Button/ButtonForm";
import {selectIsRegister} from "../../../common/selectors/selectors";
import {ConfirmPasswordField} from "../../../common/components/Inputs/Password/ConfirmPasswordField";
import {Search} from "../../../common/components/Search/Search";

export type RegistrationFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};
export const Registration = () => {
  const dispatch = useAppDispatch();
  const isRegister = useAppSelector(selectIsRegister);

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    watch,
  } = useForm<RegistrationFormType>({mode: "onChange"});

  const onSubmit: SubmitHandler<RegistrationFormType> = (data) => {
    dispatch(registerTC(data));
  };

  if (isRegister) {
    return <Navigate replace to={PATH.LOGIN}/>;
  }

  return (
    <div className={style.registration}>
      <div className={style.formContainer}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={style.formControlTag}>
            <EmailField register={register} errors={errors} name={"email"}/>
            <PasswordField name={"password"} errors={errors} register={register}/>
            <ConfirmPasswordField errors={errors} register={register} watch={watch()}/>
            <ButtonForm name={'Sign Up'} isValid={isValid}/>
          </FormControl>
        </form>
        <p className={style.toLogin}>Already have an account?</p>
        <NavLink to={PATH.LOGIN} className={style.toSignIn}>
          Sign in
        </NavLink>
      </div>
    </div>
  );
};
