import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../assets/css/App.css";

import Home from "../views/Home";
import ErrorPage from "../views/ErrorPage";

export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
