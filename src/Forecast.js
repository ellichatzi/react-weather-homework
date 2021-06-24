import "./index.css";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt} </div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={35} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temp.max)}º{" "}
              </span>
              |
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temp.min)}ºC
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `f0682a374f145c4aa17ce5f08f7c93e5`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
