import React from "react"
import style from "./Profile.module.scss"
import {EditableSpan} from "../../common/components/EditableSpan/EditableSpan"
import Button from "@mui/material/Button"
import changeAvatarImage from "../../assets/img/changeAvatar.png"
import defaultAvatar from "../../assets/img/default-avatar.png"
import {Navigate} from "react-router-dom"
import {isAuth, logoutThunk, setNewUserNameThunk} from "../auth/auth-slice"
import {CircularProgress} from "@mui/material"
import {useAppSelector} from "../../common/hook/useSelect"
import {useAppDispatch} from "../../common/hook/useDispatch"
import {PATH} from "../../common/constans/path"
import {selectIsInitialized, selectIsLoggedIn, selectProfile} from "../../common/selectors/selectors";

export const Profile = React.memo(() => {

    const userProfile = useAppSelector(selectProfile)
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const isInitialized = useAppSelector(selectIsInitialized)

    const dispatch = useAppDispatch()

    if (!isLoggedIn) {
        dispatch(isAuth())
    }

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }
    if (!isInitialized) {
        return (
            <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
                <CircularProgress/>
            </div>
        )
    }

    const setNewName = (title: string) => {
        dispatch(setNewUserNameThunk(title))
    }
    const logOutMe = () => {
        dispatch(logoutThunk())
        return <Navigate to={PATH.LOGIN}/>
    }
    return (
        <div className={style.profileParent}>
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
})
