import "./index.css";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `f0682a374f145c4aa17ce5f08f7c93e5`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
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
