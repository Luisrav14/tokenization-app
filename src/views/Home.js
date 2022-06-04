import React from "react";

import images from "../assets/images";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images.logo} className="App-logo" alt="logo" />
        <p>HOME PAGE</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
