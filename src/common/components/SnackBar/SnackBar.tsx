import Alert from "@mui/material/Alert/Alert";
import Button from "@mui/material/Button/Button";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Stack from "@mui/material/Stack/Stack";
import { SyntheticEvent } from "react";
import { useAppSelector } from "../../hook/useSelectHook";
import { useAppDispatch } from "../../hook/useDispatchHook";
import { setError } from "../../../app/AppReducer";

export const CustomizedSnackbars = () => {
  const errorMessage = useAppSelector((state) => state.app.error);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setError({ error: null }));
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setError({ error: null }));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={!!errorMessage} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
