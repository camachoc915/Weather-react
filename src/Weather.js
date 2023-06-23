import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
  }

  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
}
if (ready) {
  return (
    <div className="container">
      <h1 id="city">San Diego, CA</h1>
      <h2 id="date">{weatherData.date}</h2>
      <span className="weather-icon">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="Scattered Showers"
          id="icon"
          className="float-left"
        />
      </span>
      <h3 id="temperature">{weatherData.temperature}</h3>
      <span className="unit">
        <span id="celsius-link">°C |</span>
        <span id="fahrenheit-link">°F </span>
      </span>
      <h3 className="weather" id="weather-description">
        {weatherData.description}
      </h3>
      <h3>
        Wind: <span id="speed">{weatherData.wind}</span> km/h
      </h3>
      <section className="vh-100">
        <div className="container py-4 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-5 col-xl-0">
              <div className="card shadow-0" style={{ borderRadius: "10px" }}>
                <div className="card-body p-0">
                  <div className="row text-center">
                    <div
                      className="d-flex justify-content-around align-items-center py-2 my-2"
                      id="forecast-weather"
                    >
                      <div className="flex-column"></div>
                      <div className="flex-column">
                        <p className="small mb-1">Thur</p>
                        <p className="small mb-1">🌥️</p>
                        <p className="small mb-0">
                          <strong> 73°</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small mb-1">Fri</p>
                        <p className="small mb-1">☀️</p>
                        <p className="small mb-0">
                          <strong>78°</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small mb-1">Sat</p>
                        <p className="small mb-1">🌤️</p>
                        <p className="small mb-0">
                          <strong>82°</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small mb-1">Sun</p>
                        <p className="small mb-1">☁️</p>
                        <p className="small mb-0">
                          <strong>84°</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small mb-1">Mon</p>
                        <p className="small mb-1">🌤️</p>
                        <p className="small mb-0">
                          <strong>86°</strong>
                        </p>
                      </div>
                      <div className="flex-column"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form id="search-form">
          <input
            type="search"
            placeholder="Search other cities"
            id="city-input"
            className="control-form"
          />
          <input type="Submit" value="Search" className="control-submit" />
        </form>

        <button className="btn btn-success" id="current-location-button">
          Current Location
        </button>
        <p className="source-code">
          This project was coded by Cristina Camacho and is&nbsp;
          <a href="https://magical-biscotti-5da0a0.netlify.app/">
            Open-sourced
          </a>
          &nbsp;on Github
        </p>
      </section>
    </div>
  );
} else {
  const apiKey = "4d47aca4t54edb1e29ed0ff22da3a8do";
  let city = "New York";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}
