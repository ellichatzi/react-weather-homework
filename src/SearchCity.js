import "./index.css";
import React, { useState } from "react";
import axios from "axios";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
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
    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(
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
              {Math.round(response.data.main.temp)}
            </span>
            <span className="units"></span>

            <span className="unitlinks">
              <a href="#" id="celsius-link" className="active">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
          <div className="col-4">
            <ul>
              <li>
                Humidity:{" "}
                <span className="humidity">
                  {" "}
                  {response.data.main.humidity}%{" "}
                </span>
              </li>
              <li>
                Wind:{" "}
                <span className="wind">
                  {Math.round(response.data.wind.speed)} km/h{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  function handlePosition(position) {
    let lon = console.log(position.coords.longitude);
    let lat = console.log(position.coords.latitude);
    let apiKey = "9b4ea4a09ca2cf04ce4190565f6f899b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }
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
      {temperature}
    </div>
  );
}
