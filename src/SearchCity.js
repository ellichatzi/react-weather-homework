import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

export default function SearchCity() {
  return (
    <div className="WeatherApp">
      <form className="SearchCity" id="cityForm">
        <input type="search" placeholder="Enter a city" id="enterCity" />
        <input type="submit" value="Search" id="searchButton" />
      </form>
      <div className="LocationButton">
        <button id="getLocationButton">Get my location</button>
      </div>
      <h1>
        <span className="weather" id="description">
          Mostly sunny in
        </span>
        <span id="currentCity"> Athens, Greece.</span>
      </h1>
    </div>
  );
}
