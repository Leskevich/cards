import React from "react";
import "./App.css";
import {Pages} from "./pages/Pages";
import {Header} from "../common/components/Header/Header";
import {ErrorSnackbar} from "../common/components/ErrorSnackbar/ErrorSnackbar";
import {LinearProgress} from "../common/components/LinearProgress/LinearProgress";

function App() {

    return (
        <div className="App">
            <Header/>
            <LinearProgress />
            <Pages/>
            <ErrorSnackbar/>
        </div>
    );
}

export default App;
