import React from "react";
import style from "./Profile.module.scss"
import {EditableSpan} from "../../common/components/EditableSpan/EditableSpan";
import {useAppSelector} from "../../common/utils/hook/useSelectHook";
import Button from "@mui/material/Button";
import changeAvatarImage from "../../assets/img/changeAvatar.png"

const initialProps = {
    imageUrl: "https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png",
    emailAddres: "user_email@gmail.com"
}

export const Profile = () => {
    const userName = useAppSelector(state => state.profile)
    return <div className={style.profileParent}>
            <p className={style.title}>Personal Information</p>
            <div className={style.avatar} style={{backgroundImage:` url("${initialProps.imageUrl}")`}}>
                <div className={style.changeAvatar} style={{backgroundImage:`url(${changeAvatarImage})`}}> </div>
            </div>
            <EditableSpan value={"User Name"} onChange={() => {}}/>
            <p className={style.email}>{initialProps.emailAddres}</p>
            <Button variant="contained" sx={{bgcolor: "white",color: "black", borderRadius: "30px", width: "127px",
                height: "36px"}}>Log Out</Button>
    </div>;
};

