import React from "react";
import "./App.css";
import {Pages} from "./pages/Pages";
import {Header} from "../common/components/Header/Header";
import {ErrorSnackbar} from "../common/components/ErrorSnackbar/ErrorSnackbar";
import {useAppSelector} from "../common/hook/useSelect";
import LinearProgress from '@mui/material/LinearProgress';
import {selectStatus} from "../common/selectors/selectors";


function App() {
    const status = useAppSelector(selectStatus)

    return (
        <div className="App">
            <Header/>
            {status === 'loading' && <LinearProgress color="secondary"/>}
            <Pages/>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
