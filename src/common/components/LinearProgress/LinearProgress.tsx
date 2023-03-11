import {default as MUILinearProgress} from '@mui/material/LinearProgress';
import {useAppSelector} from "../../hook/useSelect";
import {selectStatus} from "../../selectors/selectors";
import {STATUSES} from "../../../app/app-slice";

export const LinearProgress = () => {
  const status = useAppSelector(selectStatus);
  return status === STATUSES.loading ? <MUILinearProgress color="secondary"/> : null;
}