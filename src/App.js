import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MoralisProvider } from "react-moralis";
import "./assets/css/App.css";
import { AppRouter } from "./routes/AppRouter";


export const App = () => {
  return (
    <MoralisProvider appId="5777" serverUrl="http://localhost:8545">
      <AppRouter />
    </MoralisProvider>
  );
}