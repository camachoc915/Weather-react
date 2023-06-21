import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <footer>
          This project was coded by Cristina Camacho and is
          <a
            href="https://github.com/camachoc915/Weather-react"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
