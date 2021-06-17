import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="float-left">
        <div className="WeatherTemperature">
          <span className="temp" id="temperature">
            {" "}
            {Math.round(props.celsius)}
          </span>
          <span className="units">
            Cº|
            <a href="/" onClick={showFahrenheit}>
              Fº
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="float-left">
        <div className="WeatherTemperature">
          <span className="temp" id="temperature">
            {" "}
            {Math.round(fahrenheit)}
          </span>
          <span className="units">
            <a href="/" onClick={showCelsius}>
              Cº
            </a>
            | Fº
          </span>
        </div>
      </div>
    );
  }
}
