import React from "react";
import style from "./NewPassword.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import Grid from "@mui/material/Grid/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import {PasswordField} from "../../../common/components/Inputs/Password/PasswordField";
import {EmailField} from "../../../common/components/Inputs/Email/EmailField";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {Navigate, NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../../common/hook/useSelectHook";
import {PATH} from "../../../common/constans/path";
import {changePasswordTC} from "../auth-slice";
import {useAppDispatch} from "../../../common/hook/useDispatchHook";

type NewPasswordFormType = {
  password: string;
};

export const NewPassword = () => {
  const dispatch = useAppDispatch();
  const {isChangePassword} = useAppSelector(state => state.auth)
  const {resetPasswordToken} = useParams();

  const {
    register,
    reset,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<NewPasswordFormType>({mode: "onBlur"});

  const onSubmit: SubmitHandler<NewPasswordFormType> = (data) => {
    console.log(data);
    const password = data.password
    dispatch(changePasswordTC({password, resetPasswordToken}))
    reset();
  };

  if(isChangePassword){
    return <Navigate replace to={PATH.LOGIN} />;
  }

  return (
      // <div className={style.blockContainer}>
      //   <h2>Create new password</h2>
      //   <Grid container justifyContent={"center"} className={style.formContainer}>
      //     <Grid item justifyContent={"center"}>
      //       <form onSubmit={handleSubmit(onSubmit)}>
      //         <PasswordField name={"password"} errors={errors} register={register}/>
      //         <FormGroup>
      //           <p className={style.info}>Create new password and we will send you further instructions to email</p>
      //           <Button
      //             disabled={!isValid}
      //             className={style.submitButton}
      //             type={"submit"}
      //             variant={"contained"}
      //             color={"primary"}
      //           >
      //             Create new password
      //           </Button>
      //         </FormGroup>
      //       </form>
      //     </Grid>
      //   </Grid>
      // </div>
    <div className={style.formContainer}>
    <div className={style.title}>Create new password</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <PasswordField name={"password"} errors={errors} register={register} />
      <p className={style.info}>Create new password and we will send you further instructions to email</p>
      <button disabled={!isValid} type={"submit"} className={style.button}>
        Create new password
      </button>
    </form>
  </div>


  );
};

