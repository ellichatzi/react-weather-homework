import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchCity from "./SearchCity";
import reportWebVitals from "./reportWebVitals";
import Forecast from "./Forecast";

ReactDOM.render(
  <React.StrictMode>
    <SearchCity />
    <Forecast />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
