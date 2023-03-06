import React, {useEffect} from "react";
import "./App.css";
import { Pages } from "./pages/Pages";
import { Header } from "../features/Header/Header";
import { ErrorSnackbar } from "../common/components/ErrorSnackbar/ErrorSnackbar";
import CircularProgress from '@mui/material/CircularProgress';
import {useAppSelector} from "../common/hook/useSelectHook";
import {useAppDispatch} from "../common/hook/useDispatchHook";
import {isAuth} from "../features/auth/auth-slice";


function App() {

  const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isAuth())
  }, [])

  if (!isInitialized) {
    return <div className="preloader">
      <CircularProgress/>
    </div>
  }

  return (
    <div className="App">
      <Header />
      <Pages />
      <ErrorSnackbar />
    </div>
  );
}

export default App;
