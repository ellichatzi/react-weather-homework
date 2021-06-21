import "./index.css";
import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";
export default function SearchCity(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function retrievePosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `f0682a374f145c4aa17ce5f08f7c93e5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }
  function handlePosition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    const apiKey = "9b4ea4a09ca2cf04ce4190565f6f899b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function search() {
    const apiKey = "9b4ea4a09ca2cf04ce4190565f6f899b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form className="SearchCity" id="cityForm" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            id="enterCity"
            onChange={updateCity}
          />
          <input type="submit" value="Search" id="searchButton" />
        </form>
        <div className="LocationButton">
          <button id="getLocationButton" onClick={retrievePosition}>
            Get my location
          </button>
        </div>
        <h1>
          <span className="weather" id="description">
            {weatherData.description} in
          </span>
          <span id="currentCity"> {city}.</span>
        </h1>

        <div className="DateTime">
          <div className="row">
            <div className="col-8">
              <div className="date">
                <ul className="day">
                  <li className="dayToday">
                    <FormattedDate date={weatherData.date}></FormattedDate>
                  </li>
                  <li className="temperature">Temperature:</li>
                </ul>
              </div>
              <div className="float-left">
                <div className="d-flex CurrentWeather">
                  <WeatherIcon id="#icon" code={weatherData.icon} size={52} />

                  <WeatherTemperature celsius={weatherData.temperature} />
                </div>
              </div>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  Humidity:{" "}
                  <span className="humidity"> {weatherData.humidity}% </span>
                </li>
                <li>
                  Wind: <span className="wind">{weatherData.wind} km/h </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
