import React from "react";
import "./App.css";
import { Pages } from "./pages/Pages";
import { Header } from "../features/Header/Header";
import { CustomizedSnackbars } from "../common/components/SnackBar/SnackBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <CustomizedSnackbars />
    </div>
  );
}

export default App;
