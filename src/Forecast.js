import "./index.css";
import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Saturday </div>
          <WeatherIcon code="01d" size={35} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19ºC | </span>
            <span className="WeatherForecast-temperature-min">10ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
