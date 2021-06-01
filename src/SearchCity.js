import "./index.css";
import React, { useState } from "react";
import axios from "axios";

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
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
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
            Mostly sunny in
          </span>
          <span id="currentCity"> {city}.</span>
        </h1>

        <div className="DateTime">
          <div className="row">
            <div className="col-8">
              <div className="date">
                <ul className="day">
                  <li className="dayToday">Friday</li>
                  <li className="time">13:15</li>
                  <li className="temperature">Temperature:</li>
                </ul>
              </div>
              <img
                id="icon"
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt=""
              />
              <span className="temp" id="temperature">
                {" "}
                {weatherData.temperature}
              </span>
              <span className="units"></span>

              <span className="unitlinks">
                <button id="celsius-link" className="active">
                  °C
                </button>{" "}
                |
                <button href="#" id="fahrenheit-link">
                  °F
                </button>
              </span>
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }

  function handlePosition(position) {
    let lon = console.log(position.coords.longitude);
    let lat = console.log(position.coords.latitude);
    let apiKey = "9b4ea4a09ca2cf04ce4190565f6f899b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
