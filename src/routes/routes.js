import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../assets/css/App.css";

import Home from "../views/Home";
import { CreateEnterprise } from "../views/CreateEnterprise";
import ErrorPage from "../views/errors/Error404";

export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<CreateEnterprise />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
