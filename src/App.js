import React from "react";

import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes/routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes></Routes>
    </>
  );
}

export default App;
