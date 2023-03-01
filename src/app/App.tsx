import React from "react";
import "./App.css";
import { Pages } from "./pages/pages";
import { Header } from "../features/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
    </div>
  );
}

export default App;
