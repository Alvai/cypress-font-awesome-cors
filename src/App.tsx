import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <i
            className="fa fa-info"
            data-cy="info-icon"
            aria-hidden="true"
            style={{
              fontSize: "25px",
              textAlign: "center",
              color: "rgb(255, 255, 255)",
            }}
          ></i>
        </a>
      </header>
    </div>
  );
}

export default App;
