import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import style from "./Registration.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {registerTC} from "../auth-slice";
import {PATH} from "../../../common/constans/path";
import {useAppSelector} from "../../../common/hook/useSelect";
import {useAppDispatch} from "../../../common/hook/useDispatch";
import {Navigate, NavLink} from "react-router-dom";
import {EmailField} from "../../../common/components/Inputs/Email/EmailField";
import {PasswordField} from "../../../common/components/Inputs/Password/PasswordField";
import {ButtonForm} from "../../../common/components/Button/ButtonForm";
import {selectIsRegister} from "../../../common/selectors/selectors";

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

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowRepeatPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    if (isRegister) {
        return <Navigate replace to={PATH.LOGIN}/>;
    }

    return (
        <div className={style.registration}>
            <h2>Sign Up</h2>
            <Grid container justifyContent={"center"} className={style.formContainer}>
                <Grid item justifyContent={"center"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <EmailField register={register} errors={errors} name={"email"}/>
                            <PasswordField name={"password"} errors={errors} register={register}/>
                            <FormControl className={style.emailInput} variant="filled">
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
                            <ButtonForm name={'Sign Up'} isValid={isValid}/>
                        </FormGroup>
                    </form>
                </Grid>
            </Grid>
            <p className={style.toLogin}>Already have an account?</p>
            <NavLink to={PATH.LOGIN} className={style.toSignIn}>
                Sign in
            </NavLink>
        </div>
    );
};
