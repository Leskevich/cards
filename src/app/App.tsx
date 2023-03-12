import React, {useEffect} from "react";
import "./App.css";
import {Pages} from "./pages/Pages";
import {Header} from "../common/components/Header/Header";
import {ErrorSnackbar} from "../common/components/ErrorSnackbar/ErrorSnackbar";
import {useAppSelector} from "../common/hook/useSelect";
import LinearProgress from '@mui/material/LinearProgress';
import {selectIsInitialized, selectStatus} from "../common/selectors/selectors";
import {useAppDispatch} from "../common/hook/useDispatch";
import {initialApp} from "../features/auth/auth-slice";
import {ProgressCircular} from "../common/components/ProgressBar/ProgressCircular";


function App() {
    const status = useAppSelector(selectStatus)
    const initial = useAppSelector(selectIsInitialized)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initialApp())
    }, [])


    return (
        <div className="App">
            <Header/>
            {status === 'loading' && <LinearProgress color="secondary"/>}
            {initial ? <Pages/> : <ProgressCircular/>}
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
