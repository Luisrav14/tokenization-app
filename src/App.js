import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MoralisProvider } from "react-moralis";
import "./assets/css/App.css";
import { AppRouter } from "./routes/AppRouter";


export const App = () => {
  return (
    <MoralisProvider appId="383414847825" serverUrl="http://smart1.zeniq.network:8545">
      <AppRouter />
    </MoralisProvider>
  );
}