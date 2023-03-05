import React from "react";
import "./App.css";
import { Pages } from "./pages/Pages";
import { Header } from "../features/Header/Header";
import { ErrorSnackbar } from "../common/components/ErrorSnackbar/ErrorSnackbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <ErrorSnackbar />
    </div>
  );
}

export default App;
