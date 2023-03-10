import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, {AlertColor, AlertProps} from "@mui/material/Alert";
import {setAppErrorAC} from "../../../app/app-slice";
import {useAppSelector} from "../../hook/useSelectHook";
import {useAppDispatch} from "../../hook/useDispatchHook";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
    const error = useAppSelector((state) => state.app.error);
    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.app.status)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setAppErrorAC({error: null}));
    };
    let severity: AlertColor | undefined = undefined
    if (status === "succeeded") {
        severity = "success"
    } else if (status === "failed") {
        severity = "error"
    }

    return (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{width: "100%"}}>
                {error}
            </Alert>
        </Snackbar>
    );
}
