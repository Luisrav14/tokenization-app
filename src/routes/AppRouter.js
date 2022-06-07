import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../assets/css/App.css";
import { CreateEnterprise } from "../views/CreateEnterprise";
import { CreateUser } from '../views/CreateUser';
import { ErrorPage } from "../views/errors/Error404";
import { Home } from "../views/Home";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<CreateEnterprise />} />
        <Route path="/employed-create" element={<CreateUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
