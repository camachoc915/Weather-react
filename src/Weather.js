import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city /*setCity*/] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   search();
  // }

  // function handleCityChange(event) {
  //   setCity(event.target.value);
  // }

  function search() {
    const apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <h1 id="city">{weatherData.city}</h1>
        <h2 id="date">
          <FormattedDate date={weatherData.date} />
        </h2>
        <span className="weather-icon">
          <WeatherIcon code={props.data.icon} />
        </span>
        <WeatherTemperature celsius={props.data.temperature} />
        <h3 id="temperature">{Math.round(weatherData.temperature)}</h3>
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
        <weatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
