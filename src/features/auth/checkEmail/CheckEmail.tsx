import React from "react";
import style from "./CheckEmail.module.scss"
import {EditableSpan} from "../../../common/components/EditableSpan/EditableSpan";
import {useAppSelector} from "../../../common/utils/hook/useSelectHook";
import Button from "@mui/material/Button";
import checkEmailIMG from "../../../assets/img/CheckEmail.png"

const initialProps = {
    emailAddres: "user_email@gmail.com"
}

export const CheckEmail = () => {
    const userName = useAppSelector(state => state.profile)
    return <div className={style.profileParent}>
            <p className={style.title}>Personal Information</p>
            <div className={style.image} style={{backgroundImage:` url("${checkEmailIMG}")`}}>
            </div>
            <p className={style.info}>We’ve sent an Email with instructions to {initialProps.emailAddres}</p>
            <Button variant="contained" sx={{borderRadius: "30px", width: "347px",
                height: "36px"}}>Back to login</Button>
    </div>;
};

