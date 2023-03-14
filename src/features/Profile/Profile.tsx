import React, {useEffect} from "react"
import style from "./Profile.module.scss"
import {EditableSpan} from "../../common/components/EditableSpan/EditableSpan"
import Button from "@mui/material/Button"
import changeAvatarImage from "../../assets/img/changeAvatar.png"
import defaultAvatar from "../../assets/img/default-avatar.png"
import {Navigate, NavLink} from "react-router-dom"
import {isAuth, logoutThunk, setNewUserNameThunk} from "../auth/auth-slice"
import {CircularProgress} from "@mui/material"
import {useAppSelector} from "../../common/hook/useSelect"
import {useAppDispatch} from "../../common/hook/useDispatch"
import {PATH} from "../../common/constans/path"
import {selectIsLoggedIn, selectProfile, selectStatus} from "../../common/selectors/selectors";
import {STATUSES} from "../../app/app-slice";

export const Profile = () => {
    const userProfile = useAppSelector(selectProfile)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const status = useAppSelector(selectStatus)
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(isAuth())
    }, [dispatch])

    const setNewName = (title: string) => {
        dispatch(setNewUserNameThunk(title))
    }
    const logOutMe = () => {
        dispatch(logoutThunk())
    }

    if (!isLoggedIn && (status === STATUSES.failed || status === STATUSES.succeeded)) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    if (!status || status === STATUSES.loading) {
        return (
            <div style={{position: "fixed", top: "50%", textAlign: "center", width: "100%"}}>
                <CircularProgress/>
            </div>
        )
    }

    return (
        <div className={style.profileParent}>
            <NavLink to={"/packs"}>+++</NavLink>
            <p className={style.title}>Personal Information</p>
            <div className={style.image} style={{backgroundImage: ` url("${defaultAvatar}")`}}>
                <div className={style.changeAvatar} style={{backgroundImage: `url(${changeAvatarImage})`}}></div>
            </div>

            <EditableSpan value={userProfile.name} onChange={setNewName}/>

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
    )
}
