import React, { useEffect } from "react";
import style from "./Profile.module.scss";
import { EditableSpan } from "../../common/components/EditableSpan/EditableSpan";

import Button from "@mui/material/Button";
import changeAvatarImage from "../../assets/img/changeAvatar.png";
import defaultAvatar from "../../assets/img/default-avatar.png";
import { Navigate } from "react-router-dom";

import { isAuth, logoutThunk, setNewUserNameThunk } from "../auth/auth-slice";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "../../common/hook/useSelectHook";
import { useAppDispatch } from "../../common/hook/useDispatchHook";

const initialProps = {
  name: "Some Name",
  avatar: defaultAvatar,
  email: "user_email@gmail.com",
};

export const Profile = React.memo(() => {
  const userProfile = useAppSelector((state) => state.profile);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isInitialized = useAppSelector((state) => state.app.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isAuth());
  }, []);

  const setNewName = (title: string) => {
    dispatch(setNewUserNameThunk(title));
  };

  const logOutMe = () => {
    dispatch(logoutThunk());
  };

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  if (!isInitialized) {
    return (
      <div style={{ position: "fixed", top: "30%", textAlign: "center", width: "100%" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={style.profileParent}>
      <p className={style.title}>Personal Information</p>

      <div className={style.image} style={{ backgroundImage: ` url("${initialProps.avatar}")` }}>
        <div className={style.changeAvatar} style={{ backgroundImage: `url(${changeAvatarImage})` }}></div>
      </div>

      <EditableSpan value={userProfile.name} onChange={setNewName} />

      <p className={style.info}>{userProfile.email}</p>

      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "black",
          borderRadius: "30px",
          width: "127px",
          height: "36px",
        }}
        onClick={logOutMe}
      >
        Log Out
      </Button>
    </div>
  );
});
